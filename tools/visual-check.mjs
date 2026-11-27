#!/usr/bin/env node
/**
 * Headless visual QA for the clone.
 *
 *   npm i -D puppeteer-core @sparticuz/chromium   # once
 *   npm run qa:shots                              # dev server must be running
 *
 * Writes one PNG per section into ./shots (git-ignored), plus a JSON report of
 * section heights, horizontally overflowing sections and console/page errors.
 *
 * Note: on minimal Linux images Chromium needs NSS. @sparticuz/chromium ships an
 * Amazon Linux 2023 library bundle in `bin/al2023.tar.br`; extract it and point
 * LD_LIBRARY_PATH at it (the helper below does this automatically).
 */
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';

const URL = process.env.QA_URL ?? 'http://localhost:5173/';
const OUT = 'shots';

/* --- make sure chromium can find libnss3 / libnspr4 ------------------- */
const libDir = '/tmp/al2023/lib';
if (!existsSync(`${libDir}/libnss3.so`)) {
  try {
    const pkg = new URL('../node_modules/@sparticuz/chromium/bin/al2023.tar.br', import.meta.url).pathname;
    if (existsSync(pkg)) {
      const tar = '/tmp/al2023.tar';
      execFileSync(
        process.execPath,
        ['-e', `require('fs').writeFileSync('${tar}',require('zlib').brotliDecompressSync(require('fs').readFileSync('${pkg}')))`],
        { stdio: 'ignore' },
      );
      mkdirSync(libDir, { recursive: true });
      execFileSync('tar', ['-xf', tar, '-C', '/tmp/al2023'], { stdio: 'ignore' });
      process.env.LD_LIBRARY_PATH = libDir;
    }
  } catch {
    /* fall back to the system loader */
  }
}

const SECTIONS = {
  hero: '.hero',
  clients: '.clients-section',
  about: '.about',
  giant: '.giant',
  banners: '.banners',
  dark: '.dark-section',
  benefits: '.benefits',
  benefitsTwo: '.benefits-two',
  products: '.products',
  best: '.best',
  gallery: '.gallery',
  testimonials: '.testimonials',
  blog: '.blog',
  promos: '.promos',
  partners: '.partners',
  contacts: '.contacts',
  footer: '.footer',
};

/** Freeze scroll animations so captures are deterministic. */
const FREEZE = `.reveal{opacity:1!important;transform:none!important;transition:none!important}.to-top{display:none!important}`;

const browser = await puppeteer.launch({
  args: [...chromium.args, '--no-sandbox', '--disable-dev-shm-usage'],
  executablePath: await chromium.executablePath(),
  headless: true,
  env: { ...process.env, LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH ?? libDir },
});

await mkdir(OUT, { recursive: true });

async function audit(width, height, label, mobile = false) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('requestfailed', (r) => errors.push(`request failed: ${r.url().slice(0, 80)}`));

  await page.setViewport({ width, height, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: FREEZE });

  // walk the page so lazy images load and observers fire
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 45));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });

  const report = await page.evaluate(
    (sections) => ({
      title: document.title,
      docWidth: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
      fonts: [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family))],
      sections: Object.entries(sections).map(([name, sel]) => {
        const el = document.querySelector(sel);
        if (!el) return { name, missing: true };
        const r = el.getBoundingClientRect();
        return {
          name,
          height: Math.round(r.height),
          overflowsHorizontally: el.scrollWidth > el.clientWidth + 1,
        };
      }),
    }),
    SECTIONS,
  );
  report.errors = errors.slice(0, 15);

  for (const [name, sel] of Object.entries(SECTIONS)) {
    const el = await page.$(sel);
    if (el) await el.screenshot({ path: `${OUT}/${label}-${name}.png` });
  }

  if (mobile) {
    await page.click('.burger');
    await new Promise((r) => setTimeout(r, 450));
    await page.screenshot({ path: `${OUT}/${label}-drawer.png` });
  }

  await page.close();
  return report;
}

const desktop = await audit(1440, 900, 'desktop');
const mobile = await audit(390, 844, 'mobile', true);

await writeFile(`${OUT}/report.json`, JSON.stringify({ desktop, mobile }, null, 2));
console.log(`desktop ${desktop.docWidth}px  |  ${desktop.sections.length} sections`);
console.log(`mobile  ${mobile.docWidth}px   |  ${mobile.sections.length} sections`);
const overflowing = desktop.sections.filter((s) => s.overflowsHorizontally);
console.log('overflows:', overflowing.length ? overflowing.map((s) => s.name).join(', ') : 'none');
console.log('errors:', desktop.errors.length ? desktop.errors.slice(0, 5) : 'none');
console.log(`screenshots → ${OUT}/`);

await browser.close();
