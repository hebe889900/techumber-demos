         /*! Motio 2.2.1 - 18th Apr 2013 | https://github.com/Darsain/motio */
        (function (f, l) {
          function w(u, p) {
            function k(c) {
              b.reversed = c;
              x || (a.isPaused = !1, C("play"), D())
            }

            function v() {
              E = 0;
              F = z ? Math.round(h.x) + "px " + Math.round(h.y) + "px" : r[m];
              F !== H && (u.style.backgroundPosition = H = F);
              C("frame");
              b.finite && b.to === m && (a.pause(), "function" === j(b.callback) && b.callback.call(a))
            }

            function D() {
              b.finite && b.to === m || (x = b.immediate ? 0 : 60 <= d.fps ? y(D) : setTimeout(D, 1E3 / d.fps), z ? (h.x += d.speedX / d.fps, h.y += d.speedY / d.fps, d.bgWidth && Math.abs(h.x) > d.bgWidth && (h.x %= d.bgWidth), d.bgHeight && Math.abs(h.y) >
                d.bgHeight && (h.y %= d.bgHeight)) : (b.finite ? m = b.immediate ? b.to : m + (m > b.to ? -1 : 1) : b.reversed ? 0 >= --m && (m = r.length - 1) : ++m >= r.length && (m = 0), a.frame = m), E || (E = y(v)))
            }

            function I(a, g) {
              s = 0;
              for (A = q[a].length; s < A; s++)
                if (q[a][s] === g) return s;
              return -1
            }

            function C(c, g) {
              if (q[c]) {
                s = 0;
                for (A = q[c].length; s < A; s++) q[c][s].call(a, c, g)
              }
            }

            function G(a) {
              return f.getComputedStyle ? f.getComputedStyle(u, null)[a] : u.currentStyle[a]
            }
            var d, n = p,
              J = {}, n = "object" === j(n) ? n : {}, B;
            for (B in w.defaults) J[B] = (n.hasOwnProperty(B) ? n : w.defaults)[B];
            d = J;
            var a = this,
              z = !d.frames,
              r = [],
              q = {}, b = {}, m = 0,
              h, F, H, x, E, s, A;
            a.element = u;
            a.width = d.width || u.clientWidth;
            a.height = d.height || u.clientHeight;
            a.options = d;
            a.isPaused = !0;
            a.pause = function () {
              t(x);
              clearTimeout(x);
              x = 0;
              a.isPaused || (a.isPaused = !0, C("pause"));
              return a
            };
            a.play = function (c) {
              b.finite = !1;
              b.callback = l;
              b.immediate = !1;
              k(c);
              return a
            };
            a.toggle = function () {
              a[x ? "pause" : "play"]();
              return a
            };
            a.toStart = function (c, g) {
              return a.to(0, c, g)
            };
            a.toEnd = function (c, g) {
              return a.to(r.length - 1, c, g)
            };
            a.to = function (c, g, e) {
              if (z ||
                isNaN(parseFloat(c)) || !isFinite(c) || 0 > c || c >= r.length) return a;
              "function" === j(g) && (e = g, g = !1);
              if (c === m)
                if (0 === c) m = r.length;
                else
              if (c === r.length - 1) m = -1;
              else return "function" === j(e) && e.call(a), a.pause(), a;
              b.finite = !0;
              b.to = c;
              b.immediate = !! g;
              b.callback = e;
              k();
              return a
            };
            a.set = function (c, g) {
              d[c] = g;
              return a
            };
            a.on = function (c, g) {
              if ("object" === j(c))
                for (var e in c) {
                  if (c.hasOwnProperty(e)) a.on(e, c[e])
                } else if ("function" === j(g)) {
                  e = c.split(" ");
                  for (var b = 0, d = e.length; b < d; b++) q[e[b]] = q[e[b]] || [], -1 === I(e[b], g) && q[e[b]].push(g)
                } else
              if ("array" ===
                j(g)) {
                e = 0;
                for (b = g.length; e < b; e++) a.on(c, g[e])
              }
              return a
            };
            a.off = function (c, b) {
              if (b instanceof Array)
                for (var e = 0, d = b.length; e < d; e++) a.off(c, b[e]);
              else
                for (var e = c.split(" "), d = 0, h = e.length; d < h; d++)
                  if (q[e[d]] = q[e[d]] || [], "undefined" === j(b)) q[e[d]].length = 0;
                  else {
                    var f = I(e[d], b); - 1 !== f && q[e[d]].splice(f, 1)
                  } return a
            };
            a.destroy = function () {
              a.pause();
              u.style.backgroundPosition = "";
              return a
            };
            n = (G("backgroundPosition") || G("backgroundPositionX") + " " + G("backgroundPositionY")).replace(/left|top/gi, 0).split(" ");
            h = {
              x: 0 | parseInt(n[0], 10),
              y: 0 | parseInt(n[1], 10)
            };
            if (z) a.pos = h;
            else {
              for (n = r.length = 0; n < d.frames; n++) d.vertical ? h.y = n * -a.height : h.x = n * -a.width, r.push(h.x + "px " + h.y + "px");
              a.frames = r.length;
              a.frame = 0
            }
          }

          function j(f) {
            return Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase()
          }
          for (var t = f.cancelAnimationFrame || f.cancelRequestAnimationFrame, y = f.requestAnimationFrame, k = ["moz", "webkit", "o"], p = 0, v = 0, K = k.length; v < K && !t; ++v) y = (t = f[k[v] + "CancelAnimationFrame"] || f[k[v] + "CancelRequestAnimationFrame"]) &&
            f[k[v] + "RequestAnimationFrame"];
          t || (y = function (j) {
            var k = +new Date,
              l = Math.max(0, 16 - (k - p));
            p = k + l;
            return f.setTimeout(function () {
              j(k + l)
            }, l)
          }, t = function (f) {
            clearTimeout(f)
          });
          f.Motio = w;
          w.defaults = {
            fps: 15,
            frames: 0,
            vertical: 0,
            width: 0,
            height: 0,
            speedX: 0,
            speedY: 0,
            bgWidth: 0,
            bgHeight: 0
          }
        })(window);
        (function (f) {
          f.fn.motio = function (l, w) {
            var j, t;
            if (!f.isPlainObject(l)) {
              if ("string" === typeof l || !1 === l) j = !1 === l ? "destroy" : l, t = Array.prototype.slice.call(arguments, 1);
              l = {}
            }
            return this.each(function (y, k) {
              var p = f.data(k, "motio");
              !p && !j ? (p = f.data(k, "motio", new Motio(k, l)), p.on(w), l.startPaused || p.play()) : p && j && (p[j] && p[j].apply(p, t), "destroy" === j && f.removeData(k, "motio"))
            })
          }
        })(jQuery);