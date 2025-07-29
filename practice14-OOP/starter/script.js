'use strict';

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// const hari = new Person('hari', 32);
// console.log(hari);
// console.dir(Person.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (car, speed) {
//   this.car = car;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`🔺 ${this.car} going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`🔻 ${this.car} going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.brake();
// car1.accelerate();
// car1.brake();
//------------------------------------------------------------------

//Classes:

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   welcome() {
//     console.log(`PERSON DETAILS:`);
//     return this;
//   }

//   fullName() {
//     console.log(`🙏🏻 Welcome ${this.firstName} ${this.lastName}`);
//   }
// }

// const object1 = new Person('Harish', 'Pasumarthi');
// object1.welcome().fullName();
// console.log(object1);
