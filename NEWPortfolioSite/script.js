"use strict";

const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".navBar");
const closeButton = document.querySelector(".close-button");

const textLine = document.querySelectorAll(".textLine");
const websiteLink = document.querySelectorAll(".websiteLink");

const speechText = document.querySelector(".speechText");

const portfolioImg = document.querySelectorAll(".portfolio-img");
const altImg = document.querySelectorAll(".alt-img");
const projectWrapper = document.querySelectorAll(".projectWrapper");

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

//Animate Line:

for (let i = 0; i < textLine.length; i++) {
  websiteLink[i].addEventListener("mouseover", function () {
    textLine[i].classList.remove("lineAnimateExit");

    textLine[i].classList.add("lineAnimate");
  });

  websiteLink[i].addEventListener("mouseleave", function () {
    setTimeout(function () {
      textLine[i].classList.remove("lineAnimate");
      textLine[i].classList.add("lineAnimateExit");
    }, 1000);
  });
}

//Animate speach

const textArray = [
  "Hello and thanks for stopping by!",
  "I'm based in Sydney & love to build (and sometimes design) things for the web.",
  "I'm currently looking for opportunities with forward thinking companies. Take a look around, and if you want to work together, get in touch!",
];
const typeDelay = 75;
const eraseDelay = 10;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < textArray[textArrayIndex].length) {
    speechText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typeDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    speechText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, eraseDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(typeWriter, typeDelay + 1000);
  }
}

window.onload = setTimeout(typeWriter, 1000);

//Animate portfolio Imgs

for (let i = 0; i < projectWrapper.length; i++) {
  projectWrapper[i].addEventListener("mouseenter", function () {
    altImg[i].classList.remove("alt-img-animation-exit");
    altImg[i].classList.add("alt-img-animation");
  });

  projectWrapper[i].addEventListener("mouseleave", function () {
    setTimeout(function () {
      altImg[i].classList.remove("alt-img-animation");
      altImg[i].classList.add("alt-img-animation-exit");
    }, 1000);
  });
}
