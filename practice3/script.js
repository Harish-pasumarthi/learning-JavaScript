// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    console.log("*");
  }
}

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");


// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
console.log(`--------------------------------`);

//PROBLEM TWO
const calcTempAmplitude2 = function (t1,t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude2 = calcTempAmplitude2([1,2,3], [4,5,6]);
console.log(amplitude2);

//challenge
const printForecast = function(arr){
  for(let i=0; i< arr.length; i++){
    if(i===0){
      console.log(`...${arr[i]}c in ${i+1} day`)
    }
    else{
      console.log(`...${arr[i]}c in ${i+1} days`)
    }
  
  }
}
const test = printForecast([10,23,34]);

//challenge solution
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);

console.log(`----------Video Length calculator----------`);
const videoLen = function(){
  const vid = prompt(`Enter Video Lenght:`);
  const speed = prompt(`Enter Playback Speed(eg:1,1.5,2..):`);
  const newVideoLength = vid/speed;
  console.table("Your New Video Length is: "+newVideoLength+" minutes");
}
videoLen();

const arr =[];
for(let i=1;i<100;i++){
  arr.push(i);
}
console.log(arr);
*/

function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

const myCounter = createCounter();
console.log(myCounter.increment()); // Output: 1
console.log(myCounter.increment()); // Output: 2
console.log(myCounter.decrement()); // Output: 1
console.log(myCounter.getValue());   // Output: 1