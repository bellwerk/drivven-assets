/* drivven a11y + adapt fixes (impeccable audit 2026-11-27) */
(function () {
  var d = document;
  var css =
    '.dv-skip{position:fixed;left:16px;top:16px;z-index:10000;padding:12px 18px;border-radius:999px;background:#132023;color:#fff;font-weight:500;text-decoration:none;transform:translateY(-200%);transition:transform .15s}' +
    '.dv-skip:focus{transform:none;outline:2px solid #d4ff00;outline-offset:2px}' +
    '.rs7-pause{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;margin-left:4px;padding:0;border:0;border-radius:999px;background:transparent;color:#fff;cursor:pointer}' +
    '.rs7-pause:focus-visible{outline:2px solid #d4ff00;outline-offset:2px}' +
    '.rs7-pause[hidden]{display:none}' +
    '.dv-sr{position:absolute!important;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' +
    ':root:not(#_#_):not(#_#_):not(#_#_) .footer-menu-link{min-height:24px!important;align-items:center!important}' +
    ':root:not(#_#_):not(#_#_):not(#_#_) :is(.footer-legal-link,.drivven-footer-legal-link){display:inline-flex!important;align-items:center!important;min-height:24px!important}' +
    ':root:not(#_#_):not(#_#_):not(#_#_) .dv-check[hidden]{display:none!important}' +
    ':root:not(#_#_):not(#_#_) .dv-quiz-progress-copy{color:#5a676b!important}' +
    ':root:not(#_#_):not(#_#_) .dvsl-more{color:#132023!important}' +
    '@media (prefers-reduced-motion:reduce){.dv-skip{transition:none}}';
  var st = d.createElement('style');
  st.id = 'dv-fix-css';
  st.textContent = css;
  (d.head || d.documentElement).appendChild(st);

  var MUTED = { 'rgb(138, 151, 155)': 1, 'rgb(124, 137, 141)': 1, 'rgb(102, 117, 122)': 1 };
  var INK = '#5a676b';

  function contrast(root) {
    var all = (root || d.body).querySelectorAll('p,span,a,b,strong,small,label,li,div,time,em');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (MUTED[getComputedStyle(e).color]) e.style.setProperty('color', INK, 'important');
    }
  }

  function proxies() {
    var w = d.querySelectorAll('.dv-form-proxy-hidden');
    for (var i = 0; i < w.length; i++) {
      var box = w[i];
      box.setAttribute('aria-hidden', 'true');
      var f = box.querySelectorAll('input,button,select,textarea,a[href],iframe');
      for (var j = 0; j < f.length; j++) f[j].setAttribute('tabindex', '-1');
    }
  }

  function landmarks() {
    var mains = d.querySelectorAll('main,[role=main]');
    if (mains.length > 1) {
      var anc = mains[0].parentElement, ok = true, i;
      while (anc && anc !== d.body) {
        ok = true;
        for (i = 1; i < mains.length; i++) if (!anc.contains(mains[i])) ok = false;
        if (ok) break;
        anc = anc.parentElement;
      }
      var nested = false;
      for (i = 1; i < mains.length; i++) if (mains[0].contains(mains[i])) nested = true;
      if (nested) {
        for (i = 1; i < mains.length; i++) mains[i].setAttribute('role', 'none');
      } else if (anc && anc !== d.body) {
        for (i = 0; i < mains.length; i++) mains[i].setAttribute('role', 'none');
        anc.setAttribute('role', 'main');
        if (!anc.id) anc.id = 'dv-main';
      } else {
        for (i = 1; i < mains.length; i++) mains[i].setAttribute('role', 'none');
      }
    }
    var main = d.querySelector('[role=main]') || d.querySelector('main:not([role=none])');
    var ft = d.querySelector('footer,[role=contentinfo]') ? null : d.querySelector('.drivven-footer');
    if (ft) ft.setAttribute('role', 'contentinfo');
    if (main) {
      if (!main.id) main.id = 'dv-main';
      var sk = d.getElementById('dvSkip') || d.querySelector('.dv-skip');
      if (sk) {
        var tg = d.getElementById((sk.getAttribute('href') || '').slice(1));
        if (!tg || tg.getAttribute('role') === 'none') sk.setAttribute('href', '#' + main.id);
      } else {
        var a = d.createElement('a');
        a.className = 'dv-skip';
        a.href = '#' + main.id;
        a.textContent = 'Aller au contenu principal';
        d.body.insertBefore(a, d.body.firstChild);
      }
    }
  }

  function headings() {
    var hs = d.querySelectorAll('h1,h2,h3,h4,h5,h6'), stack = [];
    for (var i = 0; i < hs.length; i++) {
      var h = hs[i];
      if ((!h.offsetWidth && !h.offsetHeight) || getComputedStyle(h).visibility === 'hidden' || h.closest('[aria-hidden=true],[hidden]')) continue;
      var o = +h.tagName[1];
      while (stack.length && stack[stack.length - 1].o >= o) stack.pop();
      var eff = stack.length ? Math.min(o, stack[stack.length - 1].e + 1) : Math.min(o, 1);
      if (eff !== o) h.setAttribute('aria-level', String(eff));
      else h.removeAttribute('aria-level');
      stack.push({ o: o, e: eff });
    }
  }

  function brand() {
    var b = d.querySelectorAll('a.fn-brand-box');
    for (var i = 0; i < b.length; i++) {
      if (!b[i].textContent.trim() && !b[i].getAttribute('aria-label') && !b[i].querySelector('img[alt]:not([alt=""])')) b[i].setAttribute('aria-label', 'drivven, accueil');
      if (b[i].getAttribute('href') === '#') b[i].setAttribute('href', '/');
    }
  }

  function dupIds() {
    var seen = {}, els = d.querySelectorAll('[id]');
    for (var i = 0; i < els.length; i++) {
      var id = els[i].id;
      if (seen[id] && (els[i].tagName === 'SCRIPT' || els[i].tagName === 'STYLE')) els[i].id = id + '-' + i;
      seen[id] = 1;
    }
  }

  function slider() {
    var root = d.querySelector('.rs7-slider');
    if (!root || root.querySelector('.rs7-pause')) return;
    var dots = root.querySelector('.rs7-dots');
    if (!dots) return;
    var b = d.createElement('button');
    b.type = 'button';
    b.className = 'rs7-pause';
    b.setAttribute('aria-label', 'Arrêter le défilement automatique');
    b.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false"><rect x="2" y="1" width="3.5" height="12" rx="1" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" rx="1" fill="currentColor"/></svg>';
    b.addEventListener('click', function () {
      var cur = root.querySelector('.rs7-dot[aria-current]') || root.querySelector('.rs7-dot');
      if (cur) cur.click();
      var s = root.querySelector('.rs7-status');
      if (s) s.textContent = 'Défilement arrêté';
      b.hidden = true;
      if (cur) cur.focus();
    });
    dots.appendChild(b);
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) b.hidden = true;
    root.querySelectorAll('.rs7-dot').forEach(function (dot) { dot.addEventListener('click', function () { b.hidden = true; }); });
  }

  function run() {
    try { proxies(); } catch (e) {}
    try { landmarks(); } catch (e) {}
    try { dupIds(); } catch (e) {}
    try { brand(); } catch (e) {}
    try { slider(); } catch (e) {}
    try { headings(); } catch (e) {}
    try { contrast(); } catch (e) {}
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', function () {
    try { proxies(); landmarks(); headings(); contrast(); } catch (e) {}
    setTimeout(function () { try { proxies(); contrast(); } catch (e) {} }, 1500);
  });
  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { try { headings(); } catch (e) {} }, 300); });
})();
