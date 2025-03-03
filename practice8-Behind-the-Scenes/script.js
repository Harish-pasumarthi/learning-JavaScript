'use strict';

function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

const add5 = outerFunction(5); // add5 now holds innerFunction
console.log(add5(3)); // Output: 8 (5 + 3)
console.log(add5(10)); // output: 15 (5 + 10)
