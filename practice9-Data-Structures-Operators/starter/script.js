'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    // console.log(this);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant.order(1, 2));
// console.log(restaurant.openingHours.thu.open);

//Destructuring OBJECTS
// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurenName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurenName, hours, tags);
// const { fri } = hours;
// console.log(fri);
//-------------------------------------------------------------------
// Calling the order
// const [start, main] = restaurant.order(1, 0);
// console.log(start, main);

//-----------------------------------------------------------------
// Normal and not efficient way to access the values of array
// const array = [1, 2, 3];
// const a = array[0];
// const b = array[1];
// const c = array[2];
// console.log(a, b, c);

//Modern and efficient way to access array elements
// const newArray = [1, 2, 3];
// const [x, y, z] = newArray;
// console.log(x, y, z);

//------------------------------------------------------------------

// Working wiht the nested array using destructuring
// const nestedArray = ['out', 'out', ['in', 'in']];
// const [a, b, [c, d]] = nestedArray;
// console.log(a, b, c, d);

//------------------------------------------------------------------

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// console.log(`The Lenght of the Books is : ${books.length}`);

//Destructure the first book object from the books array into variables called title, author and ISBN.
// const [book1] = books;
// const { title, author, ISBN } = book1;
// console.log(title, author, ISBN);

//Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// const { keywords: tags } = books[0];

// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);
//----------------------------------------------------------------

//Destructure the books array into two variables called firstBook and secondBook.
// const [firstbook, secondBook] = books;

//Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;

//Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arrMain = [...arr1, ...arr2];
// console.log(arrMain);
// for (const i of arrMain) {
//   console.log(i);
// }
// console.log('' && false);

// const guest = {
//   name: 'hari',
//   owner: 'ramu',
// };
// guest.owner &&= 'amu';
// console.log(guest);
// console.log(guest.owner);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1
// const [players1, players2] = game.players;
// console.log(players1, players2);
//2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
//3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
//5
// const [team1, draw, team2] = game.odds;
// console.log(game.odds);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('hari');
// 7.
// players1 < players2 && console.log('Team 1 is more likely to win');
// players1 > players2 && console.log('Team 2 is more likely to win');
// const key = 'score';

// const student = {
//   name: 'John',
//   [key]: 95, // Computed property → becomes "score": 95
// };

// console.log(student.score); // Output: 95

// const user = {};
// console.log(user);

// user.name = 'hari';
// console.log(user);

// delete user.name;
// console.log(user);

// Challenge:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//1
// let goalNumber = 0;
// for (const player of game.scored) {
//   goalNumber++;
//   console.log(`Goal ${goalNumber}: ${player}`);
// }

//1 OPTIMIZED
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//2
// let sum = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   sum += odd;
// }
// const average = sum / odds.length;
// console.log(`Average odd: ${average}`);

//3
// for (const odd in game.odds) {
//   if (odd === 'x') {
//     console.log(`Odd of draw: ${game.odds.x}`);
//   } else if (odd === `team1`) {
//     console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
//   } else {
//     console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
//   }
// }
//3 Clean and Optimal
// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`odd of ${teamStr}: ${value}`);
// }

//BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }
// console.log(scorers);

// const myset = new Set([1, 2, 2, 3]);
// console.log(myset);
// myset.add(4);
// console.log(myset);
// myset.add(4);
// console.log(myset);

// const nums = [1, 2, 2, 3];
// const set = new Set(nums); // Set {1, 2, 3}
// console.log(set.size);
// console.log(nums.length);

// const num = [1, 2, 3, 4, 5];

// const uniNum = new Set(num);
// console.log(uniNum);

// const uniNum2 = [new Set(num)];
// console.log(uniNum2);

// const uniNum3 = [...new Set(num)];
// console.log(uniNum3);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const A = new set([1, 2, 3]);
// const B = new set([3, 4, 5]);
// const differ = A.difference(B);
// console.log(differ);

// TOPIC- MAPS FUNDAMENTALS
// const users = new Map();
// users.set(101, 'Alice');
// users.set(102, 'Bob');

// // 1. Get user 102
// console.log(users.get(102));
// // 2. Check if 103 exists
// console.log(users.has(103));
// // 3. Loop and print all users
// for (const user of users) {
//   console.log(user);
// }
// for (const [id, name] of users) {
//   console.log(`ID: ${id}, Name: ${name}`);
// }
// const rest = new Map();
// console.log(rest);
// rest.set([1, 2], 'hi');
// console.log(rest.get(1));
// const question = new Map([
//   ['question', 'what is the best programming laguage in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct🏆'],
//   [false, 'Try again!!??'],
// ]);
// console.log(question);
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set([...gameEvents.values()]);
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents.has(64));

// console.log(gameEvents.size);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const event of events) {
//   if (events.keys() > 45) {
//     console.log(`[FIRST HALF] : ${event}`);
//   } else {
//     console.log(`[SECOND HALF]: ${event}`);
//   }
// }

//CORRECT ANSWER FOR THE 4 QUESTION
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

const airline = 'Air India';
const plane = '21AP';

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf());
// console.log(airline.lastIndexOf(' '));
// console.log(airline.slice(airline.lastIndexOf(' ')));
// console.log(airline.slice(-1));

// const checkMiddleSeat = function (s) {
//   const seat = s.slice(-1);
//   if (seat === 'B' || seat === 'E') {
//     console.log(`Seat Number: ${s}, You got a middle seat 😂`);
//   } else console.log(`Seat Number: ${s}, You got Lucky 🫱🏻‍🫲🏻`);
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11A');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const emailValidator = function (enterEmail) {
//   const validEmail = enterEmail.toLowerCase().trim();
//   console.log(`Here is your corrected Email ✅: ${validEmail}`);
// };
// emailValidator('  Hello@Gmail.Com \n');

// const a = 'hi hello hi and hi';
// console.log(a.replaceAll('hi', 'bye'));

// const a = 'hi hello hi and hi';
// console.log(a.replace(/hi/g, 'bye'));
// const name = 'Harish';
// console.log(name.includes('Hari'));
// console.log(name.startsWith('Hari'));
// console.log(name.endsWith('sh'));

// const [firstName, lastName] = 'harish Pasumarthi';
// const newName = ['Mr.', firstName, lastName].join(' ');
// console.log(firstName);
// console.log(lastName);
// console.log(newName);

// const arr = ['a', 'b', 'c'];
// console.log(arr.split(' '));

// const str = 'harish is good'.split(' ');
// console.log(str);
// const updatedStr = [];

// for (const i of str) {
//   updatedStr.push(i[0].toUpperCase() + i.slice(1));
// }
// console.log(updatedStr);
// console.log(typeof updatedStr);

// console.log(typeof updatedStr.join(' '));
