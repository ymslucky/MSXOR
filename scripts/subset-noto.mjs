/**
 * Subset Noto Sans SC (variable) to exactly the glyphs used by site copy.
 * Run: node scripts/subset-noto.mjs   (after editing any zh copy)
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import subsetFont from 'subset-font';

const SRC_DIR = new URL('../src', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const FONT_IN = new URL('../.font-src/NotoSansSC.ttf', import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  '$1',
);
const FONT_OUT = new URL('../public/fonts/noto-sc-subset.woff2', import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  '$1',
);

const CJK_RE =
  /[\u3000-\u303F\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u2014\u2018\u2019\u201C\u201D\u2026\u00B7]/gu;

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory()
        ? collectFiles(p)
        : Promise.resolve(/\.(astro|ts|tsx|md)$/.test(e.name) ? [p] : []);
    }),
  );
  return files.flat();
}

const files = await collectFiles(SRC_DIR);
const chars = new Set();
for (const file of files) {
  const text = await readFile(file, 'utf8');
  for (const ch of text.match(CJK_RE) ?? []) chars.add(ch);
}
const charList = [...chars].sort().join('');
console.log(`unique CJK chars found in src: ${chars.size}`);

const input = await readFile(FONT_IN);
const subset = await subsetFont(input, charList, {
  targetFormat: 'woff2',
});
await writeFile(FONT_OUT, subset);
console.log(
  `subset written: public/fonts/noto-sc-subset.woff2 (${(subset.length / 1024).toFixed(1)} KB)`,
);
