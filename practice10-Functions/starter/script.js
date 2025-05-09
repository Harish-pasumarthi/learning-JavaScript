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
