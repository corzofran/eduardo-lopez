(function () {
  'use strict';
  var app = (window.Portfolio = window.Portfolio || {});
  app.features = app.features || {};

  function init() {
    var toggle = app.dom.qs('[data-nav-toggle]');
    var nav = app.dom.qs('[data-nav]');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.dataset.open = String(open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Cerrar' : 'Menú';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  app.features.navMenu = { init: init };
})();
