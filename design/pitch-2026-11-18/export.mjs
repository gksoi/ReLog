import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { withChrome, pause } from '../../sites/relog-motion/scripts/cdp-session.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const source = resolve(root, 'design/pitch-2026-11-18');
const preview = resolve(root, 'work/relog-pitch');
mkdirSync(preview, { recursive: true });
mkdirSync(resolve(root, 'output/pdf'), { recursive: true });
const deckPath=resolve(source,'deck.html');
const deck=readFileSync(deckPath,'utf8'),appendixStart=deck.indexOf('<section class="slide business-model"');
if(appendixStart<0)throw Error('Missing appendix insertion point');
writeFileSync(deckPath,deck.slice(0,appendixStart)+readFileSync(resolve(source,'appendix.html'),'utf8')+'\n</main></body></html>\n');


await withChrome(async ({ call, evaluate }) => {
  await call('Page.enable');
  if (!process.argv.includes('--reuse-prototype')) {
  await call('Emulation.setDeviceMetricsOverride', {
    width: 390, height: 844, deviceScaleFactor: 2, mobile: true,
  });
  await call('Page.navigate', { url: 'http://127.0.0.1:4173/' });
  let loaded = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    loaded = await evaluate('document.querySelector(".tracker") !== null');
    if (loaded) break;
    await pause(100);
  }
  if (!loaded) throw Error('The ReLog prototype did not load for the screenshot.');
  await evaluate('document.fonts.ready.then(() => true)');
  await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const app = await call('Page.captureScreenshot', { format: 'png' });
  writeFileSync(resolve(source, 'assets/relog-prototype.png'), Buffer.from(app.data, 'base64'));
  }
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1600, height: 900, deviceScaleFactor: 1, mobile: false,
  });
  await call('Page.navigate', { url: new URL('./deck.html', import.meta.url).href });
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    ready = await evaluate('document.querySelectorAll(".slide").length === 8 && [...document.images].every(i => i.complete && i.naturalWidth > 0)');
    if (ready) break;
    await pause(100);
  }
  if (!ready) throw Error('Pitch assets or eight slides did not load.');
  await evaluate('document.fonts.ready.then(() => true)');
  const layout = await evaluate(`(() => {
    const slides = [...document.querySelectorAll('.slide')];
    return slides.map((s, i) => ({
      page: i + 1, width: s.offsetWidth, height: s.offsetHeight,
      overflow: [...s.querySelectorAll('[data-fit],.canvas-grid article')].filter(e =>
        e.scrollWidth > e.clientWidth + 1 || e.scrollHeight > e.clientHeight + 1
      ).map(e => e.textContent.trim().slice(0, 100)),
      text: s.innerText,
    }));
  })()`);
  writeFileSync(resolve(preview, 'layout.json'), JSON.stringify(layout, null, 2));
  if (layout.some(s => s.overflow.length)) throw Error('Text overflow: ' + JSON.stringify(layout));
  for (let i = 0; i < 8; i++) {
    const shot = await call('Page.captureScreenshot', {
      format: 'png', captureBeyondViewport: true,
      clip: { x: 0, y: i * 900, width: 1600, height: 900, scale: 1 },
    });
    writeFileSync(resolve(preview, `browser-${i + 1}.png`), Buffer.from(shot.data, 'base64'));
  }
  const pdf = await call('Page.printToPDF', {
    printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false,
    marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
    generateTaggedPDF: true,
  });
  writeFileSync(resolve(preview, 'pitch-unannotated.pdf'), Buffer.from(pdf.data, 'base64'));
  console.log('Created eight-slide PDF draft and browser previews.');
});
