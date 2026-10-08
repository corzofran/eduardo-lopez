(function () {
  'use strict';
  var app = (window.Portfolio = window.Portfolio || {});

  /** Envoltorio seguro de localStorage: nunca lanza errores. */
  app.storage = {
    get: function (key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (error) {
        return null;
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        /* Almacenamiento no disponible: se ignora. */
      }
    }
  };
})();
