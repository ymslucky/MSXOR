import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/** Light-theme motion budget: functional, quick, <=300ms. */
const DUR = 0.28;
const EASE = 'power2.out';

function revealAll(): void {
  gsap.set('[data-animate]', { opacity: 1, y: 0, clearProps: 'transform' });
}

function initSmoothScroll(): void {
  if (reducedMotion) return;
  const lenis = new Lenis({ lerp: 0.14 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initReveals(): void {
  if (reducedMotion) return;
  document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
    if (el.closest('[data-hero-root]')) return;
    const delay = Number(el.dataset.animateDelay ?? 0);
    gsap.fromTo(
      el,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DUR,
        delay,
        ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      },
    );
  });
}

function initCounters(): void {
  if (reducedMotion) return;
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter ?? 0);
    if (!Number.isFinite(target) || target === 0) return;
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 0.3,
      ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(state.value));
      },
    });
  });
}

function initScrollProgress(): void {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  if (reducedMotion) {
    gsap.set(bar, { scaleX: 0 });
    return;
  }
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    },
  );
}

/** Subtle 3D tilt on module cards — capped at ~4deg. */
function initTilt(): void {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    gsap.set(card, { transformPerspective: 900 });
    const rotationX = gsap.quickTo(card, 'rotationX', { duration: 0.2, ease: EASE });
    const rotationY = gsap.quickTo(card, 'rotationY', { duration: 0.2, ease: EASE });
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      rotationX(-py * 3.5);
      rotationY(px * 4);
    });
    card.addEventListener('pointerleave', () => {
      rotationX(0);
      rotationY(0);
    });
  });
}

/** Gentle magnetic pull — weak strength. */
function initMagnetic(): void {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.2, ease: EASE });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.2, ease: EASE });
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      xTo(dx * 0.08);
      yTo(dy * 0.12);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: EASE });
    });
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 12);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function init(): void {
  if (reducedMotion) {
    revealAll();
    initHeaderScroll();
    initScrollProgress();
    return;
  }
  try {
    initSmoothScroll();
    initReveals();
    initCounters();
    initScrollProgress();
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
