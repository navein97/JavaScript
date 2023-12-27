// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

// PROBLEM:
// We work for a company building a smart home
// thermometer. Our most recent task is this: "Given an
// array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes
// there might be a sensor error."

// 1) Understanding the problem
// what is temp amplitude: Answer: temp max - min
// how to compute max and min
// what's a sensor error, and what to do

// 2) Breaking up into sub-problems
// how to ignore errors
// find max in array
// find min in array
// return max - min;

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality
// twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmp = (temps, array3) => {
//   let max = temps[0];
//   let min = temps[0];
//   let aaa = [23, 45, 11];
//   let bbb = [12, 22, 33];

//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//   }

//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }

//   console.log(`Max:${max} - Min:${min} = ${max - min}`);

//   array3 = aaa.concat(bbb);
//   console.log(array3);
// };

// calcTempAmp(temperatures);

//--------------- long way ----------------------------------

// Coding Challenge #1

// PROBLEM 1:
// We work for a company building a smart home
// thermometer. Our most recent task is this: "Given an
// array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes
// there might be a sensor error."

// 1) Understanding the problem
// array of temp
// temp amplitude
// sensor error needed or not
// 2) Breaking up into sub-problems
// i think got at above
// max - min
// no need, cuz we finding the temp amp only

// const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const onlyNumbers = temp.filter((element) => typeof element === 'number');

// let max = Math.max(...onlyNumbers);
// let min = Math.min(...onlyNumbers);

// let amp = max - min;

// console.log(amp);
//------------------------------------------------------

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// two arrays needed of numbers
// 2) Breaking up into sub-problems
// const arr1 = [];
// const arr2 = [];

// const arr1 = [8, -5, -10, -2, 'error', 18, 22, 26, 24, 21, 12, 7];
// const arr2 = [9, -3, -8, -1, 'error', 15, 19, 23, 21, 20, 11, 8];

// const onlyNumbers1 = arr1.filter((element) => typeof element === 'number');
// const onlyNumbers2 = arr2.filter((element) => typeof element === 'number');

// const arr3 = onlyNumbers1.concat(onlyNumbers2);
// console.log(arr3);

// -----------------------------------------------------------

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //C. Fix
//     value: Number(prompt(`Celcius to Kelvin, key in a number`)),
//   };

//   //   console.log(measurement);
//   //   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return console.log(`${kelvin} K`);
// };

// // A. To identify the bug
// console.log(measureKelvin());

// ---- 10 -> 05 Developer Skills & Editor Setup

/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures.

Example: [17, 21, 23] will print " ... 17ºC in 1 days .
.. 21ºC in 2 days ... 23ºC in 3 days ... "

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the
console.



Use the problem-solving framework: Understand the
problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const arr = [17, 21, 23];
// const arr = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC  in ${i + 1} days.`);
  }
};

printForecast(arr);
