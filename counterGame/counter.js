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
console.log(counter.increment); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("h1").textContent = counter.reset();
});

document.querySelector(".decrease").addEventListener("click", function () {
  document.querySelector("h1").textContent = counter.decrement();
});

document.querySelector(".increase").addEventListener("click", function () {
  document.querySelector("h1").textContent = counter.increment();
});
