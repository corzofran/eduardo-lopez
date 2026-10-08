/**
 * Se ejecuta de forma síncrona en <head> para aplicar el tema guardado
 * antes del primer pintado y evitar el parpadeo de color.
 */
(function () {
  'use strict';
  var root = document.documentElement;
  var mode = 'light';
  var accent = 'cobalt';

  try {
    var saved = JSON.parse(localStorage.getItem('eduardo.theme') || 'null');
    if (saved && saved.mode) mode = saved.mode;
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) mode = 'dark';
    if (saved && saved.accent) accent = saved.accent;
  } catch (error) {
    /* Sin acceso a localStorage: se usan los valores por defecto. */
  }

  root.dataset.mode = mode;
  root.dataset.accent = accent;
})();
