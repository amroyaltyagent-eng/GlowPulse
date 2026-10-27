/*
 * GlowPulse · vuelta de 360° con el scroll (v15, 27-10).
 * Es un componente propio (<gp-showroom-360>): el navegador lo arranca solo cada vez que aparece en la página,
 * también cuando el tema Horizon cambia de página sin recargar o en el editor de temas (ahí los <script> en línea no se ejecutan).
 */
(function () {
  if (window.customElements && customElements.get('gp-showroom-360')) return;

  class GpShowroom360 extends HTMLElement {
    connectedCallback() {
      if (this._on) return;
      this._on = true;
      var root = this;
      var data = root.querySelector('script[data-gp360-urls]');
      var urls = [];
      try { urls = JSON.parse(data.textContent); } catch (e) {}
      var cv = root.querySelector('canvas'), stick = root.querySelector('[data-gp360-stick]'), buy = root.querySelector('[data-gp360-buy]');
      if (!cv || !urls.length) { this._done(); return; }
      var ctx = cv.getContext('2d');
      var N = urls.length, imgs = new Array(N), ok = new Array(N), shown = -1, cur = 0, jsStick = false;

      function draw(i) {
        // Si ese fotograma aún no ha llegado, se pinta el cargado más cercano
        for (var d = 0; d < N; d++) {
          var j = ok[(i + d) % N] ? (i + d) % N : ok[(i - d + N) % N] ? (i - d + N) % N : -1;
          if (j >= 0) {
            if (j !== shown) { ctx.drawImage(imgs[j], 0, 0, cv.width, cv.height); shown = j; }
            return;
          }
        }
      }
      function load(i) {
        if (imgs[i]) return;
        var im = new Image();
        im.decoding = 'async';
        im.onload = function () { ok[i] = true; if (shown < 0) draw(Math.round(cur) % N); };
        im.src = urls[i];
        imgs[i] = im;
      }
      // Primero 1 de cada 8 (la vuelta se ve enseguida), luego se rellenan los huecos
      [8, 4, 2, 1].forEach(function (s) { for (var i = 0; i < N; i += s) load(i); });
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { this._done(); return; }

      var self = this;
      function tick() {
        if (!root.isConnected) return;
        self._raf = requestAnimationFrame(tick);
        var r = root.getBoundingClientRect(), vh = window.innerHeight, total = root.offsetHeight - vh;
        if (r.bottom < -50 || r.top > vh + 50) return;
        var y = Math.min(Math.max(-r.top, 0), Math.max(total, 0));
        // Si algún contenedor del tema impide el sticky, la sala se fija por código
        if (!jsStick && y > 20 && stick.getBoundingClientRect().top < -10) { jsStick = true; root.classList.add('is-jsstick'); }
        if (jsStick) stick.style.transform = 'translate3d(0,' + y + 'px,0)';
        var p = total > 0 ? y / total : 1;
        if (p >= 0.97) self._done();
        var target = p * (N - 1);
        cur += (target - cur) * 0.3;
        if (Math.abs(target - cur) < 0.05) cur = target;
        draw(Math.round(cur) % N);
      }
      this._raf = requestAnimationFrame(tick);
    }

    disconnectedCallback() {
      this._on = false;
      if (this._raf) cancelAnimationFrame(this._raf);
    }

    _done() {
      this.classList.add('is-done');
      var buy = this.querySelector('[data-gp360-buy]');
      if (buy) buy.classList.add('is-on');
    }
  }

  customElements.define('gp-showroom-360', GpShowroom360);
})();
