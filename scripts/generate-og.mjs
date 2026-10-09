import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0891B2"/>
      <stop offset="1" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#FAFAFA"/>
  <g opacity="0.05" stroke="#0F172A" stroke-width="1">
    ${Array.from({ length: 38 }, (_, i) => `<line x1="${i * 32}" y1="0" x2="${i * 32}" y2="630"/>`).join('')}
    ${Array.from({ length: 20 }, (_, i) => `<line x1="0" y1="${i * 32}" x2="1200" y2="${i * 32}"/>`).join('')}
  </g>
  <rect x="80" y="90" width="1040" height="450" rx="10" fill="#FFFFFF" stroke="#E2E8F0"/>
  <text x="120" y="180" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#94A3B8">~/msxor $</text>
  <text x="120" y="300" font-family="Consolas, 'Courier New', monospace" font-size="130" font-weight="700" fill="#0F172A">MS<tspan fill="url(#brand)">X</tspan>OR</text>
  <text x="120" y="370" font-family="Consolas, 'Courier New', monospace" font-size="34" fill="#475569">AI 时代的自我进化</text>
  <text x="120" y="420" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#94A3B8">self-evolution for the AI era — all plans $0</text>
  <rect x="120" y="455" width="240" height="34" rx="4" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="135" y="477" font-family="Consolas, 'Courier New', monospace" font-size="17" fill="#059669">● build: passing</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('light og.png generated');
