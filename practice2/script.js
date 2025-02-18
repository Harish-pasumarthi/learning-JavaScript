("use strict");

/*
function sayHello() {
  console.log("Hello!");
}
sayHello(); 

function add(a, b) {
  return a + b;
}
let result = add(2, 3);
console.log(result); // result = 5

console.log(fruitProcessor(5, 0));
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

function calcAge(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge(2002);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2002);
console.log(age2);

function calcAge(birthYear) {
  return 2037 - birthYear;
}

//ARROW
const calcAge1 = (birthYear) => 2037 - birthYear;
console.log(`Hi ${calcAge1(2002)}`);

console.log(this); // In a browser, this logs the `window` object

function mixIngredients() {
  console.log("Mixing flour, sugar, and eggs...");
}

function bakeCake() {
  console.log("Baking the cake at 350°F...");
}

function makeCake() {
  mixIngredients(); // Call the first function
  bakeCake(); // Call the second function
  console.log("Cake is ready! 🎂");
}

makeCake();

// ARRAYS
const friends = ["ram", "steven", "peter"];
console.log(friends);

// const years = new Array(1991, 2002, 2000, 2025);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

//EXERCISE

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
const years = [1990, 1967, 2002, 2000, 2025];
// const age1 = calcAge(years[2]);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const array1 = [1, 2, 3, 4, 5];
console.log(array1);

console.log(array1.pop());
console.log(array1);

console.log(array1.push(6));
console.log(array1);

//OBJECTS
const harish = ["harish", "pasumarhti", 22, "BIET"];


// console.log(hari);
// console.log(hari.firstName);
// console.log(hari["lastName"]);

// const peru = "Name";
// console.log(hari["first" + peru]);

// const interestedIn = prompt(
//   `what do you want to know about hari? choose b/w firstName, lastName, age and job`
// );

// if (hari[interestedIn]) {
//   console.log(hari[interestedIn]);
// } else {
//   console.warn(`choose b/w firstName, lastName, age and job`);
// }


hari.location = "India";
hari["instagram"] = "@harish_pasumarthi";

console.log(hari.friends);

//Challenge
console.log(
  `${hari.firstName} has ${hari.friends.length} friends, and his best friend is ${hari.friends[0]}`
);


const hari = {
  firstName: "Harish",
  lastName: "Pasumarthi",
  birthYear: 2002,
  job: "dev",
  friends: ["rama", "venu", "gopi"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(hari.getSummary());

for (let rep = 1; rep <= 5; rep++) {
  console.log(`hi ${rep} time 🔥`);
}



const types = [];

// console.log(`-------------------------`);

// for (arr of jonasArray) {
//   console.log(arr);
// }

// console.log(`-------------------------`);

for (let i = 0; i < 5; i++) {
  //READING FORM JONAS ARRAY
  // console.log(jonasArray[i], typeof jonasArray[i]);

  //FILLING TYPES ARRAY
  types[i] = typeof jonasArray[i];
  console.log(types[i]);
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);


//continue and break
const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
];

console.log(`------strings only-------`);
for (let i = 0; i < 5; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(`this is not effected by continue: ${i}`);
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Nested loop to iterate through a 2D array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[j]); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9
  }
}

for (let rep = 1; rep <= 3; rep++) {
  console.log(`lifting weights repetition ${rep} 🎽`);
}

let rep = 1;
while (rep <= 3) {
  console.log(`lifting weights repetition ${rep} 🎽`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
}

function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

let dice = rollDice(); // Initial roll

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = rollDice(); // Re-roll
}

console.log("You rolled a 6!");
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length;
};

console.log(calcAverage(tips));
