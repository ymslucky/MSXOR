import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Safety net: if anything fails, make sure all content is visible. */
function revealAll(): void {
  gsap.set('[data-animate]', { opacity: 1, y: 0, clearProps: 'transform' });
}

function initSmoothScroll(): void {
  if (reducedMotion) return;
  const lenis = new Lenis({ lerp: 0.11 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/** Scroll-driven reveals for every [data-animate] element. */
function initReveals(): void {
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
    if (el.closest('[data-hero-root]')) return; // hero has its own timeline
    const delay = Number(el.dataset.animateDelay ?? 0);
    const pop = el.dataset.animatePop != null;
    gsap.fromTo(
      el,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: pop ? 0.95 : 0.9,
        delay,
        ease: pop ? 'back.out(1.6)' : 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

/** Number counters (plan prices). */
function initCounters(): void {
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter ?? 0);
    if (!Number.isFinite(target) || target === 0) return;
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.4,
      ease: 'back.out(1.2)',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(state.value));
      },
    });
  });
}

/** Section-by-section background color morph while scrolling. */
function initSectionBackgrounds(): void {
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-bg]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to('body', {
            backgroundColor: section.dataset.bg ?? '#05060a',
            duration: 0.9,
            ease: 'power2.out',
          });
        }
      },
    });
  });
}

/** 3D tilt on product cards (fine pointers only). */
function initTilt(): void {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    gsap.set(card, { transformPerspective: 900 });
    const rotationX = gsap.quickTo(card, 'rotationX', { duration: 0.55, ease: 'power2.out' });
    const rotationY = gsap.quickTo(card, 'rotationY', { duration: 0.55, ease: 'power2.out' });

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      rotationX(-py * 7);
      rotationY(px * 9);
    });
    card.addEventListener('pointerleave', () => {
      rotationX(0);
      rotationY(0);
    });
  });
}

/** Magnetic buttons with elastic release. */
function initMagnetic(): void {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      xTo(dx * 0.22);
      yTo(dy * 0.3);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/** Sticky header state. */
function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function init(): void {
  if (reducedMotion) {
    revealAll();
    initHeaderScroll();
    return;
  }
  try {
    initSmoothScroll();
    initReveals();
    initCounters();
    initSectionBackgrounds();
    initTilt();
    initMagnetic();
    initHeaderScroll();
    ScrollTrigger.refresh();
  } catch {
    revealAll();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
