#!/usr/bin/env node
/**
 * Mirror every CDN asset referenced by src/data/assets.ts into public/media/.
 *
 *   node tools/download-assets.mjs           # download only
 *   node tools/download-assets.mjs --rewrite # download + switch the app to local files
 *
 * Node 18+ (uses the built-in fetch). Needs outbound access to the Agrarium CDN.
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetsFile = join(root, 'src/data/assets.ts');
const source = await readFile(assetsFile, 'utf8');

const cdnMatch = source.match(/export const CDN = '([^']+)'/);
if (!cdnMatch) {
  console.error('Could not find the CDN constant in src/data/assets.ts');
  process.exit(1);
}
const CDN = cdnMatch[1];

const paths = [...source.matchAll(/\bu\(\s*'([^']+)'\s*\)/g)].map((m) => m[1]);
const unique = [...new Set(paths)];
console.log(`Found ${unique.length} assets on ${CDN}`);

let downloaded = 0;
let skipped = 0;
const failed = [];

for (const rel of unique) {
  const url = `${CDN}/${rel}`;
  const target = join(root, 'public/media', rel);

  try {
    await access(target);
    skipped += 1;
    continue;
  } catch {
    /* not cached yet */
  }

  try {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (asset mirror)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buffer);
    downloaded += 1;
    console.log(`  ✓ ${rel}`);
  } catch (error) {
    failed.push({ url, error: String(error) });
  }
}

console.log(`\nDownloaded ${downloaded}, already cached ${skipped}, failed ${failed.length}`);
failed.forEach((f) => console.log(`  ✗ ${f.url} — ${f.error}`));

if (process.argv.includes('--rewrite')) {
  const patched = source.replace(/const useLocalMedia = (?:true|false);/, 'const useLocalMedia = true;');
  await writeFile(assetsFile, patched);
  console.log('\nSwitched src/data/assets.ts to local media (/media/…).');
}
