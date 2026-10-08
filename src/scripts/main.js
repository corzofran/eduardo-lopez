(function () {
  'use strict';
  var app = window.Portfolio;

  document.addEventListener('DOMContentLoaded', function () {
    app.features.themeTuner.init();
    app.features.navMenu.init();

    var year = app.dom.qs('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
