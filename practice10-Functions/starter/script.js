'use strict';

// const bookings = [];
// const createBookings = function (a = 'A1', b = 'hi', c = 'rama') {
//   const booking = {
//     a,
//     b,
//     c,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// console.log(bookings);
// createBookings();

// let obj = { name: 'Harish' };

// function mutate(o) {
//   o.name = 'Updated'; // ✅ mutation: affects original
//   console.log(o);

//   o = { name: 'New' }; // ❌ reassignment: doesn't affect original
//   console.log(o);
// }

// mutate(obj);
// console.log(obj, 'hi'); // ➡️ "Updated"

// const flight = 'LH234';
// const harish = {
//   name: 'Harish pasumarthi',
//   passport: 2424212322,
// };

// const checkIn = function (flightNum, passenger) {};
// checkIn(flight, harish);

// const ran = Math.trunc(Math.random() * 10000);
// console.log(ran);
// let obj = { a: 1 };
// function modify(o) {
//   o.a = 2; // ✅ affects original
//   o = { a: 3 }; // ❌ only local reference changes
//   console.log(o);
// }
// modify(obj);
// console.log(obj.a); // 2

// const a = new Set(['a', 'b', 'c']);
// const b = new Set(['c', 'b', 'a']);
// console.log(a);

// const name = function () {
//   console.log('Nenu Name Function Ni?!');
// };

// function callName(name) {
//   name;
// }

// callName(name());

// function a() {
//   return function b() {
//     console.log('Boww!!!');
//   };
// }
// a()();
// function operate(x, y, operation) {
//   return operation(x, y);
// }
// const add = (a, b) => a + b;
// console.log(operate(5, 3, add)); // Output: 8
// const firstArrow = greet => name => console.log(`${greet} ${name}`);
// firstArrow('Hey')('Harish !?');
// function greet(greeting) {
//   console.log(greeting + ', ' + this.name);
// }

// const person = { name: 'Harish' };

// greet.call(person, 'Hello'); // Hello, Harish
// const greet = function (wish, name) {
//   console.log(wish, name);
// };

// const a = greet.bind(null, undefined, 'apple');
// a('harish');

// const addtax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const valAdd = addtax(0.23);
// console.log(valAdd(200));
// console.log(200 + 200 * 0.23);
// let a = 'hi';
// const fun = () => console.log(a);
// fun();
// a = 'bye';
// fun();

// {
//   // show message
//   let message = 'Hello';
//   alert(message);
// }

// {
//   // show another message
//   let message = 'Goodbye';
//   alert(message);
// }

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// Closures
const secureBooking = function () {
  let passengerCount = 0;
  console.log('hi');
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// const booker = secureBooking();

// booker();
// booker();
// booker();

console.log(secureBooking());
secureBooking();
secureBooking();
