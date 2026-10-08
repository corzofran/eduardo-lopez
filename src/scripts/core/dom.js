(function () {
  'use strict';
  var app = (window.Portfolio = window.Portfolio || {});
  app.features = app.features || {};

  app.dom = {
    qs: function (selector, scope) {
      return (scope || document).querySelector(selector);
    },
    qsa: function (selector, scope) {
      return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
    }
  };
})();
