strictMode = true;
const createCouter = function () {
  let count = 0;
  return {
    reset: function () {
      count = 0;
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
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
