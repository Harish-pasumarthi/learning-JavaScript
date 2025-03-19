"use strict"; // Enable strict mode

const createCouter = function () {
  let count = 0;
  return {
    reset: function () {
      count = 0;
      return count; // Return the updated count
    },
    increment: function () {
      count++;
      return count; // Return the updated count
    },
    decrement: function () {
      count--;
      return count; // Return the updated count
    },
  };
};

const counter = createCouter();

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("#h1").textContent = counter.reset();
});

document.querySelector(".decrease").addEventListener("click", function () {
  document.querySelector("#h1").textContent = counter.decrement();
});

document.querySelector(".increase").addEventListener("click", function () {
  document.querySelector("#h1").textContent = counter.increment();
});
