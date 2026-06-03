(function () {
  var STORAGE_KEY = 'peachteq-hub-theme';

  var THEMES = [
    { id: 'peach-light', layout: 'centered', label: 'Peach Light', themeColor: '#e8784a' },
    { id: 'peach-dark', layout: 'stacked', label: 'Peach Dark', themeColor: '#0e0e0e' },
    { id: 'field-green', layout: 'split-right', label: 'Field Green', themeColor: '#2d6a2e' },
    { id: 'heritage', layout: 'showcase', label: 'Heritage', themeColor: '#173b2f' },
    { id: 'coastal', layout: 'feature-band', label: 'Coastal Sage', themeColor: '#95b46a' }
  ];

  var LAYOUTS_WITH_ASIDE = { 'split-right': true };

  function findTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return THEMES[0];
  }

  function nextThemeId(currentId) {
    var idx = 0;
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === currentId) {
        idx = i;
        break;
      }
    }
    return THEMES[(idx + 1) % THEMES.length];
  }

  function applyTheme(id) {
    var theme = findTheme(id);
    var root = document.documentElement;
    root.dataset.theme = theme.id;
    root.dataset.layout = theme.layout;

    var aside = document.querySelector('.hero-aside');
    if (aside) {
      aside.setAttribute('aria-hidden', LAYOUTS_WITH_ASIDE[theme.layout] ? 'false' : 'true');
    }
    var metrics = document.querySelector('.hero-metrics');
    if (metrics) {
      metrics.setAttribute('aria-hidden', theme.layout === 'stacked' ? 'false' : 'true');
    }
    var cards = document.querySelector('.hero-cards');
    if (cards) {
      cards.setAttribute('aria-hidden', theme.layout === 'feature-band' ? 'false' : 'true');
    }
    var showcase = document.querySelector('.hero-showcase');
    if (showcase) {
      showcase.setAttribute('aria-hidden', theme.layout === 'showcase' ? 'false' : 'true');
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch (e) { /* ignore */ }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.themeColor);

    var btn = document.getElementById('themeSwitch');
    if (btn) {
      var next = nextThemeId(theme.id);
      btn.setAttribute('aria-label', 'Switch theme (next: ' + next.label + ')');
      btn.setAttribute('title', 'Next: ' + next.label);
    }
  }

  function cycleTheme() {
    var current = document.documentElement.dataset.theme || THEMES[0].id;
    var next = nextThemeId(current);
    applyTheme(next.id);
  }

  function init() {
    var saved = THEMES[0].id;
    try {
      saved = localStorage.getItem(STORAGE_KEY) || saved;
    } catch (e) { /* ignore */ }
    applyTheme(saved);

    var btn = document.getElementById('themeSwitch');
    if (btn) {
      btn.addEventListener('click', function () {
        cycleTheme();
        var links = document.getElementById('navLinks');
        var toggle = document.getElementById('navToggle');
        if (links && links.classList.contains('open')) {
          links.classList.remove('open');
          if (toggle) {
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
