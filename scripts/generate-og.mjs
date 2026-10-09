import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a78bfa"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.25" cy="0.1" r="0.6">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.8" cy="0.9" r="0.55">
      <stop offset="0" stop-color="#06b6d4" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#05060a"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    ${Array.from({ length: 17 }, (_, i) => `<line x1="${i * 72}" y1="0" x2="${i * 72}" y2="630"/>`).join('')}
    ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${i * 72}" x2="1200" y2="${i * 72}"/>`).join('')}
  </g>
  <g transform="translate(566,170)">
    <rect width="68" height="68" rx="16" fill="#10131d"/>
    <path d="M22 22 46 46M46 22 22 46" fill="none" stroke="url(#brand)" stroke-width="5" stroke-linecap="round"/>
    <circle cx="22" cy="22" r="3" fill="#a78bfa"/>
    <circle cx="46" cy="22" r="3" fill="#22d3ee"/>
    <circle cx="22" cy="46" r="3" fill="#22d3ee"/>
    <circle cx="46" cy="46" r="3" fill="#a78bfa"/>
  </g>
  <text x="600" y="330" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="140" font-weight="700" letter-spacing="-5" fill="#ffffff">MS<tspan fill="url(#brand)">X</tspan>OR</text>
  <text x="600" y="410" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#c4b5fd">AI 时代的自我进化</text>
  <text x="600" y="462" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#94a3b8">Self-evolution for the AI era · everything is $0</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('og.png regenerated');
