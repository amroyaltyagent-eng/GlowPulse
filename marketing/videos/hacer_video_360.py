"""GlowPulse · vídeo de anuncio/reel de 15 s a 24 fps reales con la vuelta 360 del producto real.

Uso: python3 hacer_video_360.py <vuelta360.mp4> <salida.mp4> [anuncio|regalo|rutina]
La vuelta (5 s, 24 fps) se repite 3 veces; encima van 4 bloques de texto.
Reglas: 1.ª línea «Masajeador de cuello GlowPulse», 2.ª «Sirve para…», sin afirmaciones médicas.
"""
import os, subprocess, sys, tempfile

SRC, OUT = sys.argv[1], sys.argv[2]
VARIANTE = sys.argv[3] if len(sys.argv) > 3 else 'anuncio'
BOLD = '/usr/share/fonts/opentype/inter/Inter-Bold.otf'
MED = '/usr/share/fonts/opentype/inter/Inter-Medium.otf'

# (inicio, fin, [(texto, tamaño, fuente, y)])  · y en px sobre 1080×1920; zona segura de Reels: 250-1500
INICIO = (0.0, 3.6, [("Masajeador de cuello", 78, BOLD, 300), ("GlowPulse", 78, BOLD, 395),
                     ("Sirve para darte un masaje en el cuello", 42, MED, 520),
                     ("en casa, en el sofá o en la cama, sin cables", 42, MED, 575)])
WEB = ("glowpulse.store", 46, BOLD, 1480)
VARIANTES = {
    'anuncio': [
        INICIO,
        (3.6, 7.6, [("Lo coges con una mano", 64, BOLD, 330), ("y lo deslizas por el cuello", 64, BOLD, 415)]),
        (7.6, 11.4, [("Calor · EMS con niveles · Luz LED", 54, BOLD, 340), ("Sin cables · se carga por USB", 44, MED, 430)]),
        (11.4, 15.0, [("59,95 €", 110, BOLD, 300), ("o 2 por 79,95 €", 58, BOLD, 440),
                      ("Envío gratis · 14 días para devolverlo", 42, MED, 530), WEB]),
    ],
    'regalo': [
        INICIO,
        (3.6, 7.6, [("Un regalo para quien", 64, BOLD, 330), ("siempre está para los demás", 64, BOLD, 415)]),
        (7.6, 11.4, [("Lo coges con una mano", 54, BOLD, 340), ("y lo deslizas por el cuello", 54, BOLD, 420)]),
        (11.4, 15.0, [("2 por 79,95 €", 96, BOLD, 300), ("uno para ti y otro para regalar", 46, MED, 430),
                      ("Envío gratis", 42, MED, 510), WEB]),
    ],
    'rutina': [
        INICIO,
        (3.6, 7.6, [("Sofá, serie y", 64, BOLD, 330), ("diez minutos para ti", 64, BOLD, 415)]),
        (7.6, 11.4, [("Calor, EMS con niveles y luz LED", 54, BOLD, 340), ("Lo deslizas por el cuello con una mano", 42, MED, 430)]),
        (11.4, 15.0, [("59,95 €", 110, BOLD, 300), ("Envío gratis · sin cables", 46, MED, 440), WEB]),
    ],
}
BLOQUES = VARIANTES[VARIANTE]
INK = '0x10322b'

tmp = tempfile.mkdtemp()
filters = ['[0:v]loop=loop=2:size=121:start=0,setpts=N/24/TB,scale=1080:1920:flags=lanczos,format=yuv420p[v0]']
last = 'v0'
k = 0
for a, b, lineas in BLOQUES:
    for texto, size, font, y in lineas:
        tf = os.path.join(tmp, f't{k}.txt')
        open(tf, 'w', encoding='utf-8').write(texto)
        # aparece y desaparece en 0,25 s
        alpha = f"if(lt(t,{a}+0.25),(t-{a})/0.25,if(gt(t,{b}-0.25),({b}-t)/0.25,1))"
        nxt = f'v{k+1}'
        filters.append(
            f"[{last}]drawtext=fontfile={font}:textfile={tf}:fontsize={size}:fontcolor={INK}:"
            f"x=(w-text_w)/2:y={y}:box=1:boxcolor=white@0.72:boxborderw=18:"
            f"alpha='{alpha}':enable='between(t,{a},{b})'[{nxt}]")
        last = nxt
        k += 1

cmd = ['ffmpeg', '-v', 'error', '-y', '-i', SRC, '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo',
       '-filter_complex', ';'.join(filters), '-map', f'[{last}]', '-map', '1:a', '-t', '15',
       '-r', '24', '-c:v', 'libx264', '-profile:v', 'high', '-crf', '18', '-preset', 'slow',
       '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', OUT]
subprocess.run(cmd, check=True)
print('ok', OUT)
