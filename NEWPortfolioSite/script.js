"use strict";

const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".navBar");
const closeButton = document.querySelector(".close-button");

const body = document.querySelector("body");

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const textLine = document.querySelectorAll(".textLine");
const websiteLink = document.querySelectorAll(".websiteLink");

let animate = [...document.querySelectorAll(".animate")];

const speechText = document.querySelector(".speechText");

//Menu Toggle:
toggleButton.addEventListener("click", function () {
  nav.classList.remove("hidden");
  nav.classList.add("navAnimate");
  closeButton.classList.remove("hidden");
  toggleButton.classList.add("hidden");
});

closeButton.addEventListener("click", function () {
  nav.classList.add("hidden");
  toggleButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
});

//Modals:

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
    body.style.overflow = "visible";
  }
};

for (let i = 0; i < modal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
    ``;
    body.style.overflowY = "hidden";

    btnCloseModal[i].addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal[i].classList.contains("hidden")) {
        closeModal();
      }
    });
  });
}

//Animate Headings:

for (let i = 0; i < textLine.length; i++) {
  websiteLink[i].addEventListener("mouseover", function (event) {
    textLine[i].classList.toggle("lineAnimate");
    setTimeout(function () {
      textLine[i].classList.toggle("lineAnimate");
    }, 2000);
  });
}

//Animate speach

window.onload = function () {
  setTimeout(function () {
    speechText.innerHTML =
      "I'm based in Sydney & love to build (and sometimes design) things for the web. I'm currently looking for opportunities with forward thinking companies.";
  }, 5000);
  setTimeout(function () {
    speechText.innerHTML = "Feel free to have a look around!";
  }, 12500);
};
