'use strict';

/** LOADER **/

function pageLoaded() {
  let loaderSection = document.querySelector('.loader-section');
  if (loaderSection) loaderSection.classList.add('loaded');
}
document.onload = pageLoaded();

/** EFECTO DE LUZ DEL CURSOR **/

document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});

/** AÑO DINÁMICO **/

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});