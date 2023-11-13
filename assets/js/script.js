'use strict';

/* element toggle function */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/** add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/** NAVBAR TOGGLE FOR MOBILE */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/** HEADER **/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/** CONTACT **/ 

const inputs = document.querySelectorAll(".contact__input");

inputs.forEach(ipt => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        if(ipt.value == ""){
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    })
})

/** LOADER **/ 

function pageLoaded() {
  let loaderSection = document.querySelector('.loader-section');
  loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();