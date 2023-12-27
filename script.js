// 'use strict';
// const passTest = true;
// let hasDriversLisence = false;

// if (passTest) hasDriversLisence = true;
// if (hasDriversLisence) console.log(`I can drive`);

// // const interface = `Audio`;
// // const private = 534;
// const ifSo = 34;

// function orang(name, age, hobby) {

//     const person = `My name is ${name}.\n\I am ${age} and my hobby is ${hobby}.`;
//     return person;
// }

// const Navein = orang('Navein', 26, 'Golf');
// console.log(Navein);

// const San = orang('San', 28, 'Futsal');
// console.log(San);

//function declaration
//

// let average;

// const calcAverage = (a, b, c) => {
//     average = (a + b + c) / 3;
//     return average;
// }

// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)
//     }
//     else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgDolhins} vs ${avgKoalas})`)
//     }
//     else {
//         console.log(`No winner at all`)
//     }
// }

// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 37, 27))

// const bills = [125, 555, 44];
// let tips = [];

// const calcTip = () => {

//     if (bills >= 50 && bills <= 300) {
//         if (i < 3) {
//             tips[i] = 0.15 * bills;
//             console.log(tips[i]);
//             return tips;
//         }
//     }
//     else {
//         if (i < 3) {
//             tips[i] = 0.2 * bills;
//             return tips;
//         }
//     }
// }

// console.log(calcTip);

// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1997);
// console.log(age3);

// calculate years to retire, you'll need your name, and birthyear, and return a string that explains in total.

// const yearsToRetire = (fName, birthYear) => {
//     const age = 2023 - birthYear;
//     const retire = 60 - age;
//     return `${fName} retires in ${retire} years`;
// }

// // console.log(yearsToRetire(`Navein`, 1997));
// const cutFruit = (fruit) => {
//     return fruit * 4;
// }

// const fruitProcessor = (apples, oranges) => {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// // fruitProcessor(2, 3)  - to run the Service
// console.log(fruitProcessor(2, 3)); // - to show the Output

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// const yearsToRetire = function (fName, birthYear) {
//     const age = calcAge(birthYear);  //crtl+D more & more to select & modify same variables
//     const retire = 60 - age;
//     if (retire > 0) {
//         console.log(`fatty`) // use alt+up to move this word up
//         return retire;
//     }
//     else {
//         return -1;
//     }

//     return retire;
//     // return `${fName} retires in ${retire} years`;
// }

// console.log(yearsToRetire('Navein', 1997));
// console.log(yearsToRetire('Navein', 1920));

// JavaScript Fundamentals – Part 2
// Coding Challenge #1

// let average;

// const calcAverage = (a, b, c) => {
//     average = (a + b + c) / 3;
//     return average;
// }

// let dolph = calcAverage(44, 23, 71);
// let koals = calcAverage(65, 54, 49);

// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win (Dolhins: ${avgDolhins} vs. Koalas: ${avgKoalas})`)
//     }
//     else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (Dolhins: ${avgDolhins} vs. Koalas: ${avgKoalas})`)
//     }
//     else {
//         console.log(`no team wins!`);
//     }
// }

// let dolph1 = calcAverage(85, 54, 41);
// let koals1 = calcAverage(23, 34, 27);

// checkWinner(dolph, koals);
// checkWinner(dolph1, koals1);
//--------------------------------------------

// const Fruits = ['Mango', 'Durian', 'Apple', 'Orange'];
// console.log(Fruits[1]);
// Fruits[1] = 'Grapes';
// console.log(Fruits);
// console.log(Fruits[Fruits.length - 1])

// const fName = 'Navein';
// const me = [fName, 2023 - 1997, 'Selangor', Fruits[1]];
// console.log(me);
// console.log(me.length);

// //Exercise
// const calcAge = (birthYear) => {
//     return 2023 - birthYear;
// }
// const years = [1990, 1967, 2022, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// //in array, can have anything that produce value.
// const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(age);

// const Fruits = ['Mango', 'Durian', 'Apple', 'Orange'];
// Fruits.push('Grapes'); //add element - need argument - last - array
// console.log(Fruits);

// Fruits.unshift('Kiwi'); //add - first - array
// console.log(Fruits);

// Fruits.shift(); //remove - first - array
// console.log(Fruits);

// //You're executing a service
// Fruits.pop(); //remove - last - array

// //You're not executing, just printing out
// console.log(Fruits);

// console.log(Fruits.indexOf('Apple'));
// //You're not executing, just printing out

// console.log(Fruits.includes('Kiwi'));
// //include - true or false
// console.log(Fruits.includes('Mango'));
// Fruits.push('23');
// console.log(Fruits.includes(23));
// console.log(Fruits.includes('23'));

// if (Fruits.includes('Apple')) {
//     console.log('This code includes Apple');
// }

// JavaScript Fundamentals – Part 2
// Coding Challenge #2

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [];

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
// }

// const total = [];

// for (let i = 0; i < bills.length; i++) {
//     total[i] = tips[i] + bills[i];
//     console.log(`Bill: $${bills[i]} + tip: $${tips[i]} = total: $${total[i]}`);
// }

// const Array = [
//     'fatty',
//     'chotti',
//     23
// ];

// const Object = {
//     name: 'fatty',  //name - key/property, fatty - value
//     lastName: 'chotti',
//     age: 23
// };

// //can use dot or bracket to call object's value
// const nameKey = 'Name';
// console.log(Object['last' + nameKey]);
// console.log(Object['name'] + ' ' + Object['lastName']);

// //prompt get input
// const interestIn = prompt(`what do you want to know about me.
// name, lastName or age?`);
// console.log(Object[interestIn]); //use brackets instead of dot

// Object.location = 'Portufal';
// Object['address'] = 'Malaysia';

// if (Object[interestIn]) {
//     console.log(Object[interestIn]);
// } else {
//     console.log(`Only can input name, lastName or age`);
// }

// Navein has 3 friends and his bestfriend is called Yuki
// const aboutMe = {
//     myName: 'Navein',
//     myFriends: ['Amma', 'Appa', 'Anne'],
//     bestFriend: 'Yuki'
// };

// console.log(`${aboutMe.myName} has ${aboutMe.myFriends.length} friends and his bestfriend is called ${aboutMe.myFriends[0]}.`);

// const aboutMe = {
//     myName: 'Navein',
//     myAgeL: 26,
//     birthYear: 1997,
//     myFriends: ['Amma', 'Appa', 'Anne'],
//     location: 'Kuantan',

//     myQuestion: function () {
//         const soalan = prompt(`Does ${this.myName} stays in ${this.location}? Yes or No:`);
//         if (soalan.toLowerCase() === 'yes') {
//             console.log(`${this.myName} stays in ${this.location}`);
//         } else {
//             console.log(`${this.myName} doesn't stay in ${this.location}`);
//         }
//     }
// };

// aboutMe.myQuestion();

// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     bmi: 0,
//     calcBMI: function (mass, height) {
//         return this.bmi = mass / height ** 2;
//     }
// };

// const john = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     bmi: 0,
//     calcBMI: function (mass, height) {
//         return this.bmi = mass / height ** 2;
//     }
// };

// mark.calcBMI(mark.mass, mark.height);
// john.calcBMI(john.mass, john.height);

// if (mark.bmi > john.bmi) {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
// } else {
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
// }

// JavaScript Fundamentals – Part 2
// Coding Challenge #3

// const mark = {
//     fName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     bmi: 0,
//     BMI: function () {
//         return this.bmi = this.mass / this.height ** 2;
//     }
// };

// const john = {
//     fName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     bmi: 0,
//     BMI: function () {
//         return this.bmi = this.mass / this.height ** 2;
//     }
// };

// mark.BMI();
// john.BMI();
// if (mark.bmi > john.bmi) {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
// } else {
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
// }

// JavaScript Fundamentals – Part 2
// Coding Challenge #4

// 1. Create an array 'bills' containing all 10 test bill values
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// const tips = [];
// const total = [];
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
// }
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

// const aboutMe = [    //this is array tau
//     'Navein',
//     26,
//     1997,
//     ['Amma', 'Appa', 'Anne'],
//     'Kuantan',
// ];

// const types = [];

// for (let i = 0; i < aboutMe.length; i++) {
//     console.log(aboutMe[i], typeof aboutMe[i]);

//     //filling the array
//     // types[i] = typeof aboutMe[i];

//     types.push(typeof aboutMe[i]);
// }

// console.log(types);

// const years = [1991, 1950, 1890, 2000];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     age.push(2037 - years[i]);
//     console.log(age[i]);
// }

//continue & break
// console.log(`--- Other than 1997 ---`);
// for (let i = 0; i < aboutMe.length; i++) {
//     if (aboutMe[i] === 1997) continue;
//     //continue = avoid that value
//     console.log(aboutMe[i]);
// }

// console.log(`--- Other than 1997 ---`);
// for (let i = 0; i < aboutMe.length; i++) {
//     if (aboutMe[i] === 1997) break;
//     //break = dont go proceed on that value
//     console.log(aboutMe[i]);
// }

// const aboutMe = [    //this is array tau
//     'Navein',
//     26,
//     1997,
//     ['Amma', 'Appa', 'Anne'],
//     'Kuantan',
//     'fatty'
// ];

// //Loop backwards
// console.log(`--- Other than 1997 ---`);
// for (let i = aboutMe.length - 1; i >= 0; i--) {
//     console.log(aboutMe[i]);
// }

// for (let day = 1; day < 3; day++) {
//     console.log(`Day ${day}`);

//     for (let exercise = 1; exercise < 5; exercise++) {
//         console.log(`exercise ${exercise} times for day ${day}`);
//     }
// }

// print out day 1 using while loop

// let day = 1;
// while (day < 8) {
//     console.log(`Day ${day}`);
//     day++;
// }

// for (let i = 1; i < 8; i++) {
//     console.log(`Day ${i}`);
// }

//range [0, 6), and by adding 1 to it, you shift the range to [1, 7)

//Dice Roll - byMyself
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice < 7) {

//     if (dice === 6) {
//         console.log(`You rolled a ${dice}`);
//         console.log(`Roll once more!!`);

//         let dice1 = Math.trunc(Math.random() * 6) + 1;
//         console.log(`You rolled a ${dice1}`);
//         console.log(`You rolled a ${dice + dice1} in total`);
//         break;

//     } else {
//         console.log(`You rolled a ${dice} in total`);
//         break;
//     }
// }

//Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     total[i] = tips[i] + bills[i];
//     // console.log(`Bill: $${bills[i]} + tip: $${tips[i]} = total: $${total[i]}`);
//     //correct edy
// }

// //focus here now - Bonus question
// const calcAverage = (arr) => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     //can do return straight
//     // const average = sum / arr.length;
//     // return average;

//     return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 4]));

// const calcAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         // return sum; -  for loop, you dont have to put return.
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([23, 345, 56, 67, 32, 45]));
