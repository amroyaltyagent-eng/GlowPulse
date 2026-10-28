// Uso: node render.js <variante> <salida.mp4>   ·   node render.js <variante> --frames 1.0,5.0,...  (fotogramas sueltos en PNG)
// 15 s a 24 fps reales: 360 fotogramas distintos pintados en Chromium y unidos con ffmpeg.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), os = require('os'), { execFileSync } = require('child_process');
const [variante, out, lista] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(__dirname, 'escena.html'));
  await p.evaluate(() => document.fonts.ready);
  const shot = async (t, f) => { await p.evaluate(([t, v]) => render(t, v), [t, variante]);
    await p.evaluate(() => Promise.all([...document.images].map(i => i.decode?.().catch(() => {}))));
    await p.screenshot({ path: f }); };
  if (out === '--frames') {
    for (const t of lista.split(',').map(Number)) await shot(t, path.join(process.env.SCRATCH || '.', `${variante}_${t}.png`));
  } else {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gpanim-'));
    for (let i = 0; i < 360; i++) await shot(i / 24, path.join(dir, `f${String(i).padStart(3, '0')}.png`));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '24', '-i', path.join(dir, 'f%03d.png'),
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-movflags', '+faststart', '-r', '24', out]);
    fs.rmSync(dir, { recursive: true });
  }
  await b.close();
})();
