/* ============================================================
   SMART DESIGN SWITCHER
   Classic (default) ↔ Bauhaus · FAB + Panel + Toast
   ============================================================ */
(function () {
  'use strict';

  var DESIGNS = {
    classic: {
      key: 'classic',
      labelFa: 'کلاسیک',
      labelEn: 'Classic',
      subtitleFa: 'شیشه‌ای · نرم · بنفش',
      subtitleEn: 'Glass · Soft · Violet',
      file: 'style-classic.css',
      preview: ['#5E6AD2', '#b8bfff', '#0a0a0c', '#EDEDEF']
    },
    bauhaus: {
      key: 'bauhaus',
      labelFa: 'باوهاوس',
      labelEn: 'Bauhaus',
      subtitleFa: 'هندسی · سخت · سه‌رنگ',
      subtitleEn: 'Geometric · Hard · Triad',
      file: 'style.css',
      preview: ['#D02020', '#F0C020', '#1040C0', '#121212']
    }
  };

  var STORAGE_KEY = 'site-design';
  var DEFAULT = 'classic';

  // ---------- Core ----------
  function getDesign() {
    try {
      var d = localStorage.getItem(STORAGE_KEY);
      return DESIGNS[d] ? d : DEFAULT;
    } catch (e) { return DEFAULT; }
  }

  function setDesign(name) {
    try { localStorage.setItem(STORAGE_KEY, name); } catch (e) {}
  }

  function applyDesign(name) {
    var design = DESIGNS[name] || DESIGNS[DEFAULT];
    var link = document.getElementById('site-stylesheet');
    if (link && link.getAttribute('href').indexOf(design.file) === -1) {
      link.setAttribute('href', design.file);
    }
    document.documentElement.setAttribute('data-design', name);
  }

  // ---------- IMMEDIATE: Swap stylesheet before paint ----------
  try {
    var stored = getDesign();
    document.documentElement.setAttribute('data-design', stored);
    if (stored !== DEFAULT) {
      var headLink = document.getElementById('site-stylesheet');
      if (headLink) headLink.href = DESIGNS[stored].file;
    }
  } catch (e) {}

  // ============================================================
  // STYLES (self-injected)
  // Base = Classic · Override = Bauhaus
  // ============================================================
  var STYLES = `
    /* ---------- FAB — Classic base ---------- */
    .design-fab {
      position: fixed;
      bottom: 24px;
      inset-inline-end: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 1px solid rgba(94,106,210,.4);
      background: linear-gradient(135deg, #5E6AD2, #6872D9);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 12px 32px rgba(94,106,210,.35);
      transition: transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s ease;
      font-family: 'Outfit', 'Vazirmatn', system-ui, sans-serif;
    }
    .design-fab:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 44px rgba(94,106,210,.5);
    }
    .design-fab:active {
      transform: translateY(0);
      box-shadow: 0 6px 18px rgba(94,106,210,.3);
    }
    .design-fab svg {
      width: 26px;
      height: 26px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Bauhaus override */
    html[data-design="bauhaus"] .design-fab {
      border: 2px solid #121212;
      background: #F0C020;
      color: #121212;
      box-shadow: 4px 4px 0 0 #121212;
      border-radius: 0;
    }
    html[data-design="bauhaus"] .design-fab:hover {
      transform: translate(-3px, -3px);
      box-shadow: 7px 7px 0 0 #121212;
    }
    html[data-design="bauhaus"] .design-fab:active {
      transform: translate(2px, 2px);
      box-shadow: none;
    }

    /* ---------- Panel — Classic base ---------- */
    .design-panel {
      position: fixed;
      bottom: 92px;
      inset-inline-end: 24px;
      width: 300px;
      max-width: calc(100vw - 32px);
      background: rgba(10,10,16,.96);
      color: #EDEDEF;
      border: 1px solid rgba(94,106,210,.3);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,.55), 0 0 40px rgba(94,106,210,.25);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 18px;
      z-index: 9999;
      font-family: 'Vazirmatn', 'Outfit', system-ui, sans-serif;
      opacity: 0;
      transform: translateY(20px) scale(.95);
      pointer-events: none;
      transition: opacity .25s ease, transform .3s cubic-bezier(.34,1.4,.64,1);
    }
    .design-panel.is-open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    /* Bauhaus override */
    html[data-design="bauhaus"] .design-panel {
      background: #0E0E0E;
      color: #F5F5F5;
      border: 2px solid #F5F5F5;
      box-shadow: 8px 8px 0 0 #F0C020;
      border-radius: 0;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      padding: 20px;
    }

    /* ---------- Panel Title ---------- */
    .design-panel-title {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: #b8bfff;
      margin: 0 0 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(94,106,210,.2);
    }
    html[data-design="bauhaus"] .design-panel-title {
      color: #8A8A8A;
      border-bottom-color: rgba(255,255,255,.08);
      letter-spacing: .18em;
      font-size: 11px;
      font-weight: 800;
    }

    /* ---------- Design Cards — Classic base ---------- */
    .design-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px;
      border: 2px solid transparent;
      border-radius: 12px;
      background: transparent;
      color: inherit;
      cursor: pointer;
      text-align: start;
      width: 100%;
      font-family: inherit;
      margin-bottom: 8px;
      transition: all .2s ease;
    }
    .design-card:last-child { margin-bottom: 0; }
    .design-card:hover {
      background: rgba(94,106,210,.1);
      border-color: rgba(94,106,210,.3);
    }
    .design-card.active {
      background: rgba(94,106,210,.15);
      border-color: #5E6AD2;
      box-shadow: 0 0 0 1px rgba(94,106,210,.4), 0 8px 20px rgba(94,106,210,.2);
    }

    /* Bauhaus override */
    html[data-design="bauhaus"] .design-card {
      border-radius: 0;
    }
    html[data-design="bauhaus"] .design-card:hover {
      background: rgba(255,255,255,.05);
      border-color: rgba(255,255,255,.1);
    }
    html[data-design="bauhaus"] .design-card.active {
      background: rgba(240,192,32,.12);
      border-color: #F0C020;
      box-shadow: none;
    }

    /* ---------- Design Card Preview ---------- */
    .design-card-preview {
      width: 48px;
      height: 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      border: 1.5px solid rgba(255,255,255,.15);
      border-radius: 8px;
      flex-shrink: 0;
      overflow: hidden;
    }
    html[data-design="bauhaus"] .design-card-preview {
      border-radius: 0;
      border-color: currentColor;
    }
    .design-card-preview span {
      display: block;
      width: 100%;
      height: 100%;
    }

    /* ---------- Design Card Info ---------- */
    .design-card-info { flex: 1; min-width: 0; }
    .design-card-name {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 3px;
      color: #F5F5F5;
    }
    html[data-design="bauhaus"] .design-card-name {
      font-size: 14px;
      font-weight: 800;
    }
    .design-card-sub {
      font-size: 12px;
      font-weight: 500;
      color: #b8bfff;
      margin: 0;
      letter-spacing: 0;
      line-height: 1.4;
    }
    html[data-design="bauhaus"] .design-card-sub {
      color: #8A8A8A;
      font-size: 11px;
    }

    /* ---------- Design Card Check ---------- */
    .design-card-check {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      opacity: 0;
      color: #6872D9;
      transition: opacity .2s ease;
    }
    html[data-design="bauhaus"] .design-card-check { color: #F0C020; }
    .design-card.active .design-card-check { opacity: 1; }

    /* ---------- Toast — Classic base ---------- */
    .design-toast {
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translate(-50%, 20px);
      background: rgba(10,10,16,.96);
      color: #EDEDEF;
      border: 1px solid rgba(94,106,210,.4);
      border-radius: 999px;
      box-shadow: 0 12px 40px rgba(0,0,0,.5), 0 0 30px rgba(94,106,210,.3);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 12px 28px;
      font-family: 'Vazirmatn', 'Outfit', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0;
      z-index: 10000;
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s ease, transform .3s cubic-bezier(.34,1.4,.64,1);
      max-width: calc(100vw - 40px);
      text-align: center;
    }
    .design-toast.is-visible {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    /* Bauhaus override */
    html[data-design="bauhaus"] .design-toast {
      background: #121212;
      color: #F5F5F5;
      border: 2px solid #F0C020;
      border-radius: 0;
      box-shadow: 5px 5px 0 0 #F0C020;
      padding: 12px 24px;
      font-weight: 700;
      letter-spacing: .02em;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    /* ---------- Mobile ---------- */
    @media (max-width: 768px) {
      .design-fab {
        bottom: 90px;
        inset-inline-end: 16px;
        width: 52px;
        height: 52px;
      }
      .design-panel {
        bottom: 154px;
        inset-inline-end: 16px;
        width: calc(100vw - 32px);
        max-width: 320px;
      }
      .design-toast { bottom: 160px; }
    }
  `;

  // ============================================================
  // UI CREATION
  // ============================================================
  function injectStyles() {
    if (document.getElementById('design-switcher-styles')) return;
    var style = document.createElement('style');
    style.id = 'design-switcher-styles';
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function isFa() {
    return (document.documentElement.lang || 'fa').indexOf('fa') === 0;
  }

  function buildFAB() {
    var fab = document.createElement('button');
    fab.className = 'design-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'تغییر طراحی سایت');
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-haspopup', 'true');
    fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="13.5" r="2.5"/><circle cx="8.5" cy="17.5" r="2.5"/><circle cx="6.5" cy="10.5" r="2.5"/><path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h2a4 4 0 0 0 4-4 10 10 0 0 0-10-10Z"/></svg>';
    return fab;
  }

  function buildPanel() {
    var fa = isFa();
    var panel = document.createElement('div');
    panel.className = 'design-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', fa ? 'انتخاب طراحی' : 'Choose design');

    var html = '<div class="design-panel-title">' + (fa ? 'انتخاب طراحی' : 'Choose design') + '</div>';

    var current = getDesign();
    Object.keys(DESIGNS).forEach(function (key) {
      var d = DESIGNS[key];
      var name = fa ? d.labelFa : d.labelEn;
      var sub = fa ? d.subtitleFa : d.subtitleEn;
      var isActive = key === current;

      html += '<button class="design-card' + (isActive ? ' active' : '') + '" type="button" data-design-choice="' + key + '">' +
        '<div class="design-card-preview" aria-hidden="true">' +
          d.preview.map(function (c) { return '<span style="background:' + c + '"></span>'; }).join('') +
        '</div>' +
        '<div class="design-card-info">' +
          '<p class="design-card-name">' + name + '</p>' +
          '<p class="design-card-sub">' + sub + '</p>' +
        '</div>' +
        '<svg class="design-card-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>' +
      '</button>';
    });

    panel.innerHTML = html;
    return panel;
  }

  function showToast(designKey) {
    var d = DESIGNS[designKey];
    var fa = isFa();
    var msg = fa
      ? 'طراحی ' + d.labelFa + ' فعال شد'
      : d.labelEn + ' design activated';

    var existing = document.querySelector('.design-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'design-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('is-visible');
    });

    setTimeout(function () {
      toast.classList.remove('is-visible');
      setTimeout(function () { toast.remove(); }, 400);
    }, 2200);
  }

  function switchDesign(nextKey) {
    if (!DESIGNS[nextKey]) return;
    var current = getDesign();
    if (current === nextKey) return;

    setDesign(nextKey);
    applyDesign(nextKey);
    showToast(nextKey);

    document.querySelectorAll('.design-card').forEach(function (card) {
      card.classList.toggle('active', card.dataset.designChoice === nextKey);
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    injectStyles();

    var fab = buildFAB();
    var panel = buildPanel();

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var open = false;

    function togglePanel(force) {
      open = typeof force === 'boolean' ? force : !open;
      panel.classList.toggle('is-open', open);
      fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    fab.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      togglePanel();
    });

    panel.addEventListener('click', function (e) {
      e.stopPropagation();
      var choice = e.target.closest('[data-design-choice]');
      if (choice) {
        switchDesign(choice.dataset.designChoice);
        setTimeout(function () { togglePanel(false); }, 200);
      }
    });

    document.addEventListener('click', function (e) {
      if (!open) return;
      if (panel.contains(e.target) || fab.contains(e.target)) return;
      togglePanel(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) {
        togglePanel(false);
        fab.focus();
      }
    });

    document.addEventListener('site:rendered', function () {
      var freshPanel = buildPanel();
      panel.innerHTML = freshPanel.innerHTML;
      panel.classList.toggle('is-open', open);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.SiteDesign = {
    get: getDesign,
    set: function (n) { setDesign(n); applyDesign(n); },
    list: Object.keys(DESIGNS)
  };
})();