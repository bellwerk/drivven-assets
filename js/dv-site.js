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

}catch(e){console.warn("dv dv-fix",e)}
/* dv-b2 */
try{/* drivven batch 2 (2026-11-28): promo banner, menu drawer, compact footer, car page top, home feature cards */
(function () {
  var d = document, H = d.documentElement;
  var P = 'html:not(.zz_):not(#_#_):not(#_#_):not(#_#_):not(#_#_) ';
  var page = H.getAttribute('data-wf-page') || '';
  var HOME = '6a5a6ffe44cec98545c404ca', CAR = '6a5a6ffe44cec98545c404d4';
  var css = [
    /* promo banner: full width, one line, orange */
    '~#dv-referral-banner{width:100vw!;max-width:none!;margin:0 0 0 calc(50% - 50vw)!;padding:0!;border-radius:0!;background:#ff8a1f!;background-color:#ff8a1f!;position:relative!;box-shadow:none!}',
    '~#dv-referral-banner .dv-referral-banner__inner{display:flex!;align-items:center!;justify-content:center!;width:100%!;max-width:none!;min-height:40px!;margin:0!;padding:0 48px!;box-sizing:border-box!}',
    '~#dv-referral-banner .dv-referral-banner__link{display:block!;max-width:100%!;min-height:0!;padding:10px 0!;color:#132023!;font-size:15px!;line-height:20px!;font-weight:500!;white-space:nowrap!;overflow:hidden!;text-overflow:ellipsis!;text-decoration:none!;text-align:center!}',
    '~#dv-referral-banner .dv-referral-banner__link:hover{text-decoration:underline!;text-underline-offset:3px!}',
    '~#dv-referral-banner .dv-referral-banner__dismiss{position:absolute!;right:6px!;top:50%!;transform:translateY(-50%)!;display:flex!;align-items:center!;justify-content:center!;width:36px!;height:36px!;margin:0!;padding:0!;border-radius:50%!;color:#132023!;font-size:18px!;line-height:1!;cursor:pointer!;list-style:none!;z-index:2!}',
    '~#dv-referral-banner .dv-referral-banner__dismiss::-webkit-details-marker{display:none!}',
    '~#dv-referral-banner .dv-referral-banner__dismiss:focus-visible{outline:2px solid #132023!;outline-offset:-2px!}',
    '~#dv-referral-banner .dvb-short{display:none!}',
    '@media(max-width:560px){~#dv-referral-banner .dvb-long{display:none!}~#dv-referral-banner .dvb-short{display:inline!}~#dv-referral-banner .dv-referral-banner__link{font-size:14px!}~#dv-referral-banner .dv-referral-banner__inner{padding:0 44px 0 16px!}}',

    /* menu drawer */
    '~.drivven-site-header .drivven-menu-panel{position:fixed!;left:0!;top:0!;bottom:0!;right:auto!;width:min(88vw,400px)!;max-width:none!;height:100vh!;height:100dvh!;margin:0!;padding:20px 20px 28px!;border-radius:0 28px 28px 0!;background:#fff!;box-shadow:24px 0 60px rgba(19,32,35,.22)!;overflow-y:auto!;overscroll-behavior:contain!;z-index:10002!;animation:dvbIn .28s cubic-bezier(.2,.8,.2,1)!;box-sizing:border-box!;font-family:var(--dv-font-family,Altone,Arial,sans-serif)!}',
    '@keyframes dvbIn{from{transform:translateX(-100%)}to{transform:none}}',
    '~.dvb-backdrop{position:fixed!;inset:0!;z-index:10001!;background:rgba(19,32,35,.45)!;animation:dvbFade .2s ease-out!}',
    '~.dvb-backdrop[hidden]{display:none!}',
    '@keyframes dvbFade{from{opacity:0}to{opacity:1}}',
    'html.dvb-open,html.dvb-open body{overflow:hidden!}',
    'html.dvb-open .dv-mobile-sticky-cta{visibility:hidden!}',
    '~.drivven-menu-panel .dvb-top{display:flex!;align-items:center!;justify-content:space-between!;gap:12px!;margin:0 0 20px!}',
    '~.drivven-menu-panel .dvb-logo{display:inline-flex!;align-items:center!;min-height:44px!;padding:0!;background:none!}',
    '~.drivven-menu-panel .dvb-logo img{display:block!;height:30px!;width:auto!;filter:brightness(0)!}',
    '~.drivven-menu-panel .dvb-close{display:flex!;align-items:center!;justify-content:center!;width:44px!;height:44px!;margin:0!;padding:0!;border:0!;border-radius:50%!;background:#f2f5f6!;color:#132023!;cursor:pointer!}',
    '~.drivven-menu-panel .dvb-nav{display:block!;margin:0!;padding:0!}',
    '~.drivven-menu-panel .dvb-item,~.drivven-menu-panel .dvb-group>summary{display:flex!;align-items:center!;justify-content:space-between!;gap:12px!;width:100%!;min-height:56px!;margin:0!;padding:0 4px!;border:0!;border-radius:0!;background:none!;color:#132023!;font-size:22px!;line-height:1.2!;font-weight:500!;letter-spacing:-.01em!;text-decoration:none!;cursor:pointer!;list-style:none!;box-sizing:border-box!}',
    '~.drivven-menu-panel .dvb-group>summary::-webkit-details-marker{display:none!}',
    '~.drivven-menu-panel .dvb-group>summary svg{flex:none!;transition:transform .2s ease!}',
    '~.drivven-menu-panel .dvb-group[open]>summary svg{transform:rotate(180deg)!}',
    '~.drivven-menu-panel .dvb-sub{display:grid!;gap:2px!;padding:0 0 10px 4px!}',
    '~.drivven-menu-panel .dvb-sub a{display:flex!;align-items:center!;min-height:44px!;padding:0 12px!;border-radius:14px!;background:none!;color:#132023!;font-size:17px!;font-weight:400!;text-decoration:none!}',
    '~.drivven-menu-panel .dvb-sub a:hover,~.drivven-menu-panel .dvb-item:hover{background:#f2f5f6!}',
    '~.drivven-menu-panel :is(.dvb-item,.dvb-sub a,.dvb-group>summary,.dvb-close,.dvb-city-link,.dvb-contact a):focus-visible{outline:2px solid #132023!;outline-offset:2px!}',
    '~.drivven-menu-panel .dvb-item[aria-current=page],~.drivven-menu-panel .dvb-sub a[aria-current=page]{font-weight:600!}',
    '~.drivven-menu-panel .dvb-rule{height:1px!;margin:16px 0 20px!;border:0!;background:#e3e8ea!}',
    '~.drivven-menu-panel .dvb-city{display:grid!;grid-template-columns:28px 1fr!;gap:4px 12px!;align-items:start!;margin:0 0 24px!}',
    '~.drivven-menu-panel .dvb-city>svg{margin-top:3px!}',
    '~.drivven-menu-panel .dvb-city-title{margin:0!;color:#132023!;font-size:20px!;line-height:1.25!;font-weight:500!}',
    '~.drivven-menu-panel .dvb-city-note{margin:4px 0 0!;color:#5a676b!;font-size:15px!;line-height:1.45!;text-transform:none!;letter-spacing:0!}',
    '~.drivven-menu-panel .dvb-city-link{display:inline-flex!;align-items:center!;min-height:40px!;margin-top:4px!;padding:0!;color:#132023!;font-size:15px!;font-weight:500!;text-decoration:underline!;text-underline-offset:3px!;background:none!;border:0!;cursor:pointer!}',
    '~.drivven-menu-panel .dvb-contact{display:grid!;grid-template-columns:1fr 1fr!;gap:8px!}',
    '~.drivven-menu-panel .dvb-contact a{display:flex!;align-items:center!;justify-content:center!;gap:8px!;min-height:52px!;padding:0 12px!;border-radius:999px!;background:#f2f5f6!;color:#132023!;font-size:16px!;font-weight:500!;text-decoration:none!}',
    '~.drivven-menu-panel .dvb-contact a:first-child{background:#132023!;color:#fff!}',
    '@media(prefers-reduced-motion:reduce){~.drivven-site-header .drivven-menu-panel,~.dvb-backdrop{animation:none!}~.drivven-menu-panel .dvb-group>summary svg{transition:none!}}',

    /* footer: compact, full wordmark */
    '~.drivven-footer-wrapper::after{margin:24px 0 0!}',
    '~.drivven-footer:has(.drivven-footer-wrapper) .drivven-footer-wrapper{padding-bottom:clamp(16px,2.4vw,32px)!}',
    '@media(max-width:767px){',
    '~.drivven-footer:has(.drivven-footer-wrapper){padding:12px 12px 0!}',
    '~.drivven-footer:has(.drivven-footer-wrapper) .drivven-footer-wrapper{width:100%!;padding:20px 18px 16px!;border-radius:24px!}',
    '~.drivven-footer .dv-footer-intro{margin:0 0 12px!;font-size:20px!;line-height:1.2!}',
    '~.drivven-footer .dvf-cols{gap:20px 16px!;padding-bottom:0!}',
    '~.drivven-footer .dvf-group{gap:4px!}',
    '~.drivven-footer .dvf-head{margin:0 0 2px!;font-size:13px!}',
    '~.drivven-footer .dvf-group .footer-menu-link{display:flex!;align-items:center!;min-height:32px!;font-size:15px!;line-height:1.25!}',
    '~.drivven-footer .dvft-base{padding-top:16px!;gap:10px 16px!}',
    '~.drivven-footer .dvf-social .dv-footer-social-live{width:36px!;height:36px!;min-width:36px!;flex:0 0 36px!}',
    '~.drivven-footer-wrapper::after{margin:18px 0 0!}',
    '~.dvcta{padding:20px!;gap:16px!}',
    '~.dvcta .dv-footer-actions-title{font-size:22px!}',
    '}',

    /* car page: details after the photos on phones */
    '@media(max-width:860px){',
    '~.dvb-car .dv-vsb-card{margin:0 12px!;padding:20px 16px 14px!;border-radius:24px 24px 0 0!}',
    '~.dvb-car .car-info_wrapper{margin:0 12px!;padding:0 8px 8px!;border-radius:0 0 24px 24px!}',
    '~.dvb-car .car-info{padding-top:12px!}',
    '~.dvb-car .dvc-head{flex-wrap:nowrap!;justify-content:space-between!;align-items:baseline!;gap:12px!;margin:0 0 6px!}',
    '~.dvb-car .dvc-head h1{font-size:24px!;line-height:1.15!;font-weight:500!}',
    '~.dvb-car .dvc-km{flex:none!;font-size:15px!;color:#5a676b!;white-space:nowrap!}',
    '~.dvb-car .dv-vsb-card :is(.dvc-sub,.dv-vsb-status,.dv-vsb-meta){display:none!}',
    '~.dvb-car .dv-vsb-main{gap:8px!}',
    '~.dvb-car .dv-vsb-card .dv-inventory-tax-note{display:none!}',
    '~.dvb-car .dv-vsb-actions{display:grid!;grid-template-columns:1fr auto!;align-items:center!;gap:8px 12px!;justify-content:stretch!}',
    '~.dvb-car .dv-vsb-actions a[href^="tel:"]{display:none!}',
    '~.dvb-car .dv-vsb-price-pill{grid-column:1!;grid-row:1!;display:flex!;flex-direction:column!;align-items:flex-start!;gap:0!;padding:0!;background:none!;border-radius:0!}',
    '~.dvb-car .dv-vsb-price-pill>*{color:#132023!}',
    '~.dvb-car .dv-vsb-price-pill>:first-child{font-size:13px!;font-weight:400!;color:#5a676b!}',
    '~.dvb-car .dv-vsb-price-pill>:last-child{font-size:32px!;line-height:1.1!;font-weight:600!;letter-spacing:-.02em!}',
    '~.dvb-car .dv-vsb-actions>:not(.dv-vsb-price-pill):not(.dv-vsb-payment-pill):not([href^="tel:"]){grid-column:2!;grid-row:1!}',
    '~.dvb-car .dv-vsb-payment-pill{grid-column:1/-1!;grid-row:2!;justify-self:start!;flex-direction:row!;align-items:baseline!;gap:6px!;padding:8px 14px!;border-radius:999px!;min-height:0!}',
    '~.dvb-car .dv-vsb-payment-pill *{font-size:14px!;line-height:1.2!;font-weight:500!}',
    '~.dvb-car .dvb-calc{display:flex!;align-items:center!;gap:14px!;min-height:64px!;margin:14px 0 0!;padding:10px 14px 10px 10px!;border-radius:20px!;background:#f2f5f6!;color:#132023!;font-size:17px!;font-weight:500!;text-decoration:none!}',
    '~.dvb-car .dvb-calc>span:first-child{display:flex!;align-items:center!;justify-content:center!;flex:none!;width:44px!;height:44px!;border-radius:14px!;background:#132023!;color:#d4ff00!}',
    '~.dvb-car .dvb-calc>span:nth-child(2){flex:1 1 auto!}',
    '~.dvb-car .dvb-calc:focus-visible{outline:2px solid #132023!;outline-offset:2px!}',
    '~.dvb-car .dvb-more{margin:12px 12px 0!;padding:20px 16px!;border-radius:24px!;background:#fff!}',
    '~.dvb-car .dvb-more .dvc-sub{margin:0 0 12px!;font-size:16px!;line-height:1.5!;color:#132023!}',
    '~.dvb-car .dvb-more .dvb-chips{display:flex!;flex-wrap:wrap!;gap:8px!}',
    '~.dvb-car .dvb-more .dv-vsb-status{display:inline-flex!}',
    '~.dvb-car .dvb-more .dv-inventory-tax-note{margin:12px 0 0!;text-align:left!;font-size:13px!}',
    '}',
    '~.dvb-calc{display:none}',
    '@media(max-width:860px){~.dvb-car .dvb-calc{display:flex!}}',

    /* home feature cards: full width on phones */
    '@media(max-width:767px){',
    '~.section-5 .section-4{display:flex!;flex-direction:column!;gap:12px!;padding:0!;background:transparent!;box-shadow:none!}',
    '~.section-5 .card-why.light{display:flex!;flex-direction:column!;width:100%!;min-height:0!;margin:0!;padding:0 0 28px!;border-radius:28px!;background:#fff!;overflow:hidden!;text-align:center!}',
    '~.section-5 .card-why.light>img{display:block!;width:100%!;max-width:none!;height:auto!;aspect-ratio:1/1!;margin:0!;padding:28px 20px 8px!;object-fit:contain!;background:#eef2f3!;border-radius:0!;box-sizing:border-box!}',
    '~.section-5 .card-why.light>div{padding:22px 22px 0!}',
    '~.section-5 .card-why.light h2{margin:0 0 8px!;font-size:24px!;line-height:1.2!;text-align:center!}',
    '~.section-5 .card-why.light h2::before{content:none!}',
    '~.section-5 .card-why.light p{margin:0 auto!;max-width:34ch!;font-size:16px!;line-height:1.5!;text-align:center!}',
    '}'
  ].join('').split('~').join(P).split('!').join('!important');
  var st = d.createElement('style');
  st.id = 'dv-b2-css';
  st.textContent = css;
  (d.head || H).appendChild(st);

  var SVG = {
    chev: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    pin: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#132023" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 11 21 3l-8 18-2-8-8-2Z"/></svg>',
    calc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/></svg>',
    arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>'
  };

  function banner() {
    var a = d.querySelector('#dv-referral-banner .dv-referral-banner__link');
    if (!a || a.querySelector('.dvb-long')) return;
    var t = a.textContent.replace(/\s+/g, ' ').trim();
    if (!t) return;
    a.setAttribute('aria-label', t);
    a.innerHTML = '';
    var l = d.createElement('span'); l.className = 'dvb-long'; l.textContent = t;
    var s = d.createElement('span'); s.className = 'dvb-short'; s.setAttribute('aria-hidden', 'true');
    s.textContent = /jusqu/i.test(t) ? 'Recommandez drivven : jusqu’à 250 $' : t;
    a.appendChild(l); a.appendChild(s);
  }

  var GROUPS = [
    ['Acheter', [['/voitures-occasion', 'Toutes les autos'], ['/voitures-moins-de-2000', 'Moins de 2000 $']]],
    ['Location-achat', [['/location-achat', 'Comment ça marche'], ['/location-achat-nouveaux-arrivants', 'Nouveaux arrivants'], ['/auto-permis-international-quebec', 'Permis international'], ['/auto-etudiant-international-sherbrooke', 'Étudiants internationaux'], ['/auto-travailleur-etranger-temporaire-quebec', 'Travailleurs temporaires'], ['/location-achat-credit-difficile', 'Crédit difficile']]],
    ['/vendre-ou-echanger-voiture', 'Vendre ou échanger'],
    ['/location-voiture-sherbrooke', 'Louer une auto'],
    ['/guides', 'Guides'],
    ['Entreprise', [['/a-propos', 'À propos'], ['/parrainage', 'Parrainage'], ['/succursales', 'Nos succursales'], ['/contact', 'Contact']]]
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function drawer() {
    var panel = d.getElementById('drivven-menu-panel');
    var btn = d.querySelector('.drivven-menu-button');
    if (!panel || !btn || panel.dataset.dvb) return;
    if (/^\/en(\/|$)/.test(location.pathname)) return;
    panel.dataset.dvb = '1';
    var here = location.pathname.replace(/\/+$/, '') || '/';
    var logo = d.querySelector('.drivven-logo-img');
    var cur = function (h) { return h === here ? ' aria-current="page"' : ''; };
    var html = '<div class="dvb-top"><a class="dvb-logo" href="/" aria-label="Accueil drivven">' + (logo ? '<img src="' + esc(logo.src) + '" alt="">' : 'drivven') + '</a>' +
      '<button class="dvb-close" type="button" aria-label="Fermer le menu">' + SVG.close + '</button></div><nav class="dvb-nav" aria-label="Navigation complète">';
    GROUPS.forEach(function (g) {
      if (typeof g[1] === 'string') { html += '<a class="dvb-item" href="' + g[0] + '"' + cur(g[0]) + '>' + esc(g[1]) + '</a>'; return; }
      var open = g[1].some(function (x) { return x[0] === here; });
      html += '<details class="dvb-group"' + (open ? ' open' : '') + '><summary>' + esc(g[0]) + SVG.chev + '</summary><div class="dvb-sub">' +
        g[1].map(function (x) { return '<a href="' + x[0] + '"' + cur(x[0]) + '>' + esc(x[1]) + '</a>'; }).join('') + '</div></details>';
    });
    html += '</nav><hr class="dvb-rule">' +
      '<div class="dvb-city" data-dv-city="sherbrooke">' + SVG.pin + '<div><p class="dvb-city-title">Votre ville : <span data-dv-city-name>Sherbrooke</span></p>' +
      '<p class="dvb-city-note">Choisissez la succursale la plus proche de chez vous.</p>' +
      '<a class="dvb-city-link" href="/succursales" data-dv-city-trigger>Changer de ville</a><div class="dvb-city-list" data-dv-city-list hidden></div></div></div>' +
      '<div class="dvb-contact"><a href="tel:+18193000777">Appeler</a><a href="https://wa.me/18193000777" target="_blank" rel="noopener noreferrer">WhatsApp</a></div>';
    panel.innerHTML = html;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Menu');
    var back = d.createElement('div');
    back.className = 'dvb-backdrop';
    back.hidden = true;
    panel.parentNode.insertBefore(back, panel);
    function close() { if (!panel.hidden) btn.click(); }
    back.addEventListener('click', close);
    panel.querySelector('.dvb-close').addEventListener('click', close);
    panel.addEventListener('click', function (e) { var a = e.target.closest('a[href]'); if (a && !a.hasAttribute('data-dv-city-trigger-open')) { setTimeout(close, 0); } });
    function sync() {
      var open = !panel.hidden;
      back.hidden = !open;
      H.classList.toggle('dvb-open', open);
      if (open) { var c = panel.querySelector('.dvb-close'); if (c) c.focus(); }
    }
    new MutationObserver(sync).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
    panel.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var f = [].slice.call(panel.querySelectorAll('a[href],button,summary')).filter(function (x) { return x.offsetParent; });
      if (!f.length) return;
      if (e.shiftKey && d.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && d.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    window.dvCities = window.dvCities || {
      set: function (slug, name) {
        var b = panel.querySelector('[data-dv-city]'); if (b) b.setAttribute('data-dv-city', slug);
        var n = panel.querySelector('[data-dv-city-name]'); if (n) n.textContent = name;
      }
    };
  }

  function car() {
    if (page !== CAR || H.classList.contains('dvb-car')) return;
    if (!window.matchMedia('(max-width:860px)').matches) return;
    var card = d.querySelector('.dv-vsb-card'), gal = d.querySelector('.car-info_wrapper');
    var head = d.querySelector('.dvc-head');
    if (!card || !gal || !head) return;
    H.classList.add('dvb-car');
    var acts = d.querySelector('.dv-vsb-actions');
    var host = acts ? acts.parentNode : card;
    var cl = d.createElement('a');
    cl.className = 'dvb-calc';
    cl.href = '#payment-estimate';
    cl.innerHTML = '<span>' + SVG.calc + '</span><span>Calculer mon paiement</span>' + SVG.arrow;
    host.parentNode.insertBefore(cl, host.nextSibling);
    var more = d.createElement('section');
    more.className = 'dvb-more';
    more.setAttribute('aria-label', 'Détails du véhicule');
    var sub = d.querySelector('.dv-vsb-card .dvc-sub');
    if (sub) more.appendChild(sub.cloneNode(true));
    var chips = d.createElement('div');
    chips.className = 'dvb-chips';
    [].slice.call(d.querySelectorAll('.dv-vsb-card .dv-vsb-status,.dv-vsb-card .dv-vsb-meta')).forEach(function (c) { chips.appendChild(c.cloneNode(true)); });
    if (chips.children.length) more.appendChild(chips);
    var note = d.querySelector('.dv-vsb-card .dv-inventory-tax-note');
    if (note) more.appendChild(note.cloneNode(true));
    if (more.children.length) gal.parentNode.insertBefore(more, gal.nextSibling);
  }

  function run() {
    try { banner(); } catch (e) {}
    try { drawer(); } catch (e) {}
    try { car(); } catch (e) {}
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', function () { try { banner(); drawer(); car(); } catch (e) {} });
})();

}catch(e){console.warn("dv dv-b2",e)}
