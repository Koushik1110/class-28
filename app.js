"use strict";

// //intersection observer

// const targetEl = document.querySelector(".target");

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.2,
// };

// const callback = (entries) => {
//   const entry = entries[0];

//   if (entry.isIntersecting) {
//     console.log("Intersecting");
//   } else {
//     console.log("Not Intersecting");
//   }
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(targetEl);

//Carosole

const slides = document.querySelector(".slides");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let currIndex = 0;

const showSlide = (index) => {
  slides.Style.transform = `translateX(-$(index* 100)%)`;
};

const nextSlide = () => {
  if (currIndex < slides.children.length - 1) {
    currIndex++;
    swowSlide(currIndex);
  } else {
    currIndex = 0;
    showSlide(currIndex);
  }
};

const prevSlide = () => {
  if (currIndex > 0) {
    currIndex--;
    swowSlide(currIndex);
  } else {
    currIndex = slides.children.length - 1;
    showSlide(currIndex);
  }
};

const nextSlide = () => {};

const prevSlide = () => {};
