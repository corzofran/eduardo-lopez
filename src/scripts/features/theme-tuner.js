(function () {
  'use strict';
  var app = (window.Portfolio = window.Portfolio || {});
  app.features = app.features || {};

  var STORAGE_KEY = 'eduardo.theme';

  function init() {
    var root = document.documentElement;
    var form = app.dom.qs('[data-theme-tuner]');
    if (!form) return;

    var readout = app.dom.qs('[data-token-readout]', form);

    function updateReadout() {
      var value = getComputedStyle(root).getPropertyValue('--accent').trim();
      readout.textContent = '--accent: ' + value;
    }

    // Sincroniza los controles con el tema que aplicó theme-init.js.
    form.elements.accent.value = root.dataset.accent;
    form.elements.mode.value = root.dataset.mode;
    updateReadout();

    form.addEventListener('change', function (event) {
      var target = event.target;
      if (target.name !== 'accent' && target.name !== 'mode') return;

      root.dataset[target.name] = target.value;
      app.storage.set(STORAGE_KEY, { accent: root.dataset.accent, mode: root.dataset.mode });
      updateReadout();
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

  app.features.themeTuner = { init: init };
})();
