/* drivven site bundle: dvft1-1.0.5 dvft2-1.0.2 dvft3-1.0.0 dvft4-1.0.0 + dv-fix */
/* dvft1-1.0.5 */
try{(function(){var s=document.createElement('style');s.textContent="#G{overflow-x:hidden;}#G .drivven-footer:has(.dvft-base){padding:0;background:transparent;}#G .drivven-footer:has(.dvft-base) .drivven-footer-wrapper{width:100%;box-sizing:border-box;border-radius:32px;}#G .drivven-footer .fn-brand-box{margin-left:auto;}#G .dv-footer-intro{max-width:none;}#G .dvft-base{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 24px;padding-top:24px;border-top:1px solid rgba(19,32,35,.2);}#G .dvft-base .drivven-legal-links-wrapper{justify-content:flex-start;gap:8px;width:auto;margin:0;padding:0;border:0;background:none;}#G .dvft-base .drivven-legal-links-wrapper{gap:8px 24px;}#G .dvft-base .drivven-legal-links-wrapper>*{padding:0;border:0;background:none;color:#132023;font-size:13px;text-decoration:none;}#G .dvcta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;width:calc(100% - 60px);max-width:1440px;margin:24px auto;padding:32px 40px;box-sizing:border-box;border:0;border-radius:32px;background:url(https://cdn.prod.website-files.com/6a5a6ffe44cec98545c404f0/6a5a6ffe44cec98545c406f9_Frame%2046.png) 50% 50%/cover no-repeat,radial-gradient(at 100% 100%,#7a9b76,#132023 85%);}#G .dvcta p{margin:0;color:#fff;font-size:16px;}#G .dvcta .dv-footer-actions-title{margin:0 0 8px;font-size:30px;font-weight:500;line-height:1.15;}#G .dvcta .dv-footer-action-primary{background:#d4ff00;color:#132023;}@media(min-width:992px){#G .drivven-footer:has(.dvft-base) .dvf-cols{grid-template-columns:repeat(5,minmax(0,1fr));}}@media(max-width:767px){#G .dvcta{width:calc(100% - 32px);padding:24px;border-radius:24px;}#G .dvcta .dv-footer-actions-title{font-size:26px;}}#G .cash-price-cont .text-10{padding:0;background:transparent;}#G .cash-price-cont .text-10 *{color:#132023;}".replace(/#G/g,':root:not(#_#_):not(#_#_)').replace(/;/g,'!important;');document.head.appendChild(s)})();
}catch(e){console.warn("dv dvft1-1.0.5",e)}
/* dvft2-1.0.2 */
try{!function(){var e,r=document;function t(){var e=r.querySelector(".drivven-footer:has(.drivven-footer-wrapper)"),t=e&&e.querySelector(".drivven-footer-wrapper"),a=t&&t.querySelector(".dvf-cols");if(a&&!t.dataset.dvft){t.dataset.dvft=1;var n,d=t.querySelector(".dv-footer-actions"),o=r.createElement("div"),i=e.querySelector(".drivven-legal-links-wrapper"),l=t.querySelector(".fn-social-share-wrapper-second");d&&(d.classList.add("dvcta"),e.parentNode.insertBefore(d,e)),o.className="dvft-base",i&&o.appendChild(i),l&&(n=l.closest(".dvf-group"),o.appendChild(l),n&&n.remove()),a.parentNode.insertBefore(o,a.nextSibling)}}function a(){for(var e,t=r.createTreeWalker(r.body,4),a=/[\s  ]+\?/g;e=t.nextNode();)!/^(SCRIPT|STYLE|TEXTAREA)$/.test(e.parentNode.nodeName)&&a.test(e.nodeValue)&&(a.lastIndex=0,e.nodeValue=e.nodeValue.replace(a,"?"))}function n(){clearTimeout(e),e=setTimeout(a,150)}function d(){a(),new MutationObserver(n).observe(r.body,{childList:!0,subtree:!0,characterData:!0})}var o=r.createElement("style");o.textContent="#B{width:calc(100% - 60px);max-width:1440px;margin:0 auto;border-radius:0 0 16px 16px;overflow:hidden;box-sizing:border-box;}#B .dv-referral-banner__inner{width:100%;max-width:none;margin:0;padding-left:56px;padding-right:56px;box-sizing:border-box;}@media(max-width:767px){#B{width:calc(100% - 32px);}#B .dv-referral-banner__inner{padding-left:16px;}}".replace(/#B/g,":root:not(#_#_):not(#_#_) #dv-referral-banner").replace(/;/g,"!important;"),r.head.appendChild(o),"loading"===r.readyState?r.addEventListener("DOMContentLoaded",d):d(),"loading"===r.readyState?r.addEventListener("DOMContentLoaded",t):t(),addEventListener("load",t),setTimeout(t,800),setTimeout(t,2500)}();
}catch(e){console.warn("dv dvft2-1.0.2",e)}
/* dvft3-1.0.0 */
try{!function(){var t=document,e=":root:not(#_#_):not(#_#_) .dvcta .dv-footer-actions-buttons",a=t.createElement("style");function n(){var e=t.querySelector('.dvcta a[href^="tel:"]');e&&!e.dataset.dvi&&(e.dataset.dvi=1,e.setAttribute("aria-label","Appeler le 819 300-0777"),e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.910a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>')}a.textContent=e+"{display:flex!important;flex-wrap:wrap!important;gap:10px!important}"+e+">a{margin:0!important}"+e+">.dv-footer-action-primary{flex:1 1 100%!important}"+e+'>a[href^="/voitures"]{flex:1 1 0!important;min-width:0!important}'+e+'>a[href^="tel:"]{flex:0 0 48px!important;width:48px!important;height:48px!important;min-height:48px!important;padding:0!important;border-radius:999px!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:0!important;line-height:0!important}'+e+'>a[href^="tel:"] svg{width:20px;height:20px;flex:none}',t.head.appendChild(a),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",n):n(),addEventListener("load",n),setTimeout(n,800),setTimeout(n,2500)}();
}catch(e){console.warn("dv dvft3-1.0.0",e)}
/* dvft4-1.0.0 */
try{!function(){var s=document.createElement('style');s.textContent=":root:not(#_#_):not(#_#_) .dv-quiz legend{font-size:clamp(22px,1.9vw,26px)!important;font-weight:500!important;line-height:1.2!important;letter-spacing:-.015em!important;margin:0 0 18px!important;text-wrap:balance!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-options{display:grid!important;grid-template-columns:1fr!important;gap:8px!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;width:100%!important;min-height:52px!important;margin:0!important;padding:12px 16px 12px 18px!important;border:1px solid #dde3e2!important;border-radius:14px!important;background:#fff!important;color:#132023!important;font-size:15px!important;font-weight:500!important;line-height:1.3!important;text-align:left!important;box-shadow:none!important;transition:border-color .15s,background-color .15s!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option::after{content:\"\"!important;flex:none!important;width:18px!important;height:18px!important;box-sizing:border-box!important;border:1.5px solid #b7c4c2!important;border-radius:50%!important;background:#fff!important;transition:border .15s!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option:hover{border-color:#7a9b76!important;background:#f7f9f8!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option[aria-pressed=true]{border-color:#132023!important;background:#f3f5f6!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option[aria-pressed=true]::after{border:5px solid #132023!important}:root:not(#_#_):not(#_#_) .dv-quiz .dv-quiz-option:focus-visible{outline:2px solid #7a9b76!important;outline-offset:2px!important}";(document.head||document.documentElement).appendChild(s)}();
}catch(e){console.warn("dv dvft4-1.0.0",e)}
/* dv-fix */
try{/* drivven a11y + adapt fixes (impeccable audit 2026-11-27) */
(function () {
  var d = document;
  var css =
    '.dv-skip{position:fixed;left:16px;top:16px;z-index:10000;padding:12px 18px;border-radius:999px;background:#132023;color:#fff;font-weight:500;text-decoration:none;transform:translateY(-200%);transition:transform .15s}' +
    '.dv-skip:focus{transform:none;outline:2px solid #d4ff00;outline-offset:2px}' +
    '.rs7-pause{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;margin-left:4px;padding:0;border:0;border-radius:999px;background:transparent;color:#fff;cursor:pointer}' +
    '.rs7-pause:focus-visible{outline:2px solid #d4ff00;outline-offset:2px}' +
    '.rs7-pause[hidden]{display:none}' +
    '.dv-sr{position:absolute!important;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' +
    'html .drivven-footer .footer-menu-link{min-height:24px!important;align-items:center}' +
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
      if (!h.offsetWidth && !h.offsetHeight) continue;
      var o = +h.tagName[1];
      while (stack.length && stack[stack.length - 1].o >= o) stack.pop();
      var eff = stack.length ? Math.min(o, stack[stack.length - 1].e + 1) : Math.min(o, 1);
      if (eff !== o) h.setAttribute('aria-level', String(eff));
      else h.removeAttribute('aria-level');
      stack.push({ o: o, e: eff });
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

}catch(e){console.warn("dv dv-fix",e)}
