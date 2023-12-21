"use strict";

//intersection observer

const targetEl = document.querySelector(".target");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const callback = (entries) => {
  const entry = entries[0];

  if (entry.isIntersecting) {
    console.log("Intersecting");
  } else {
    console.log("Not Intersecting");
  }
};

const observer = new IntersectionObserver(callback, options);

observer.observe(targetEl);
