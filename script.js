// JavaScript Fundamentals – Part 1
//Coding Challenge #1

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// Calculate both their BMIs using the formula

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

console.log(bmiMark, bmiJohn);

// Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
//---------------------------------------------


const personName = "Navein";
const birthYear = 1997;
const thisYear = 2023;
const myAge = thisYear - birthYear;

const navein = `I'm ${personName}
I'm ${myAge}
born in ${birthYear}
also ${thisYear}`;
console.log(navein);


const myAge = 15;
const isOldEnough = myAge >= 18;
if (isOldEnough) {
    console.log('Sarah loves sex 🤤');
} else {
    const yearsLeft = 18 - myAge;
    console.log(`You have ${yearsLeft} years more to be old enough`);
}

//Coding Challenge #2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI is (${bmiJohn}) higher than Mark's (${bmiMark})!`);
}
//----------------------------------------------------

let yearBorn = 23;
console.log(Number(yearBorn) + 18);

console.log(String(yearBorn), 19);
console.log('23' + '2');
console.log('23' - '2');
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
let money = 0;

if (money) {
    console.log(`don't spend it all`);
} else {
    console.log(`spend it all`);
}

let height = 0;
if (height) {
    console.log(`height is defined`);
}
else {
    console.log(`height is undefined`);
}


// == with coercient, will convert '18' string to num
// === without coercient
let age = '18';

if (age == 18) {
    console.log(`==`);
}

//store input in a variable
//Number at prompt also can, so when input you're taking in a number form
const fav = Number(prompt(`Fav number?`));
console.log(fav);
console.log(typeof fav);

if (fav === 12) {
    console.log(`Cool! Same`);
} else if (fav === 1) {
    console.log(`Fatty`);
} else {
    console.log(`number is not 1 or 12`);
}
if (fav !== 23) {
    console.log(`why not 23`);
}



// - got driving lisence - can see - is not tired

const gotLisence = true;
const canSee = true;
const isTired = true;

if (gotLisence && canSee && !isTired) {
    console.log('Can drive');
} else {
    console.log(`can't drive`);
}
*/

//Coding Challenge #3

// let Dolphins = (96 + 108 + 89) / 3;
// let Koalas = (88 + 91 + 110) / 3;

// console.log(Dolphins, Koalas);

// if (Dolphins > Koalas) {
//     console.log(`Dolphins wins!`);
// }
// else if (Dolphins < Koalas) {
//     console.log(`Koalas wins!`);
// }
// else {
//     console.log(`Draw!`);
// }

// let Dolphins = (97 + 112 + 101) / 3;
// // let Koalas = (109 + 95 + 123) / 3;
// let Koalas = (109 + 95 + 106) / 3;
// let oDolphins = Dolphins >= 100;
// let oKoalas = Koalas >= 100;

// console.log(Dolphins, Koalas);

// if (oDolphins && (Dolphins > Koalas)) {
//     console.log(`Dolphins wins!`);
// }
// else if (oKoalas && (Dolphins < Koalas)) {
//     console.log(`Koalas wins!`);
// }
// else if (oKoalas && oDolphins && (oKoalas === oDolphins)) {
//     console.log(`Draw!`);
// }
// else {
//     console.log(`no one wins😫`);
// }
//-------------------------------------------------

// A challenge : Create a day for a
//switch case where friday, sat, and sun you do what. And weekends you do the same thing.

// const day = 'sat';

// if (day === 'friday') {
//     console.log('Yippie Fridayyyy');
// }
// else if (day === ('sat' || 'sun')) {
//     console.log('Enjoy the weekend');

// }
// else {
//     console.log(`there's none to party`);
// }

// const age = 13;
// let drink2;
// const drink = age >= 18 ? 'buy wine' : 'buy water';
// console.log(drink);

// if (age >= 18) {
//     drink2 = 'wine';
// }
// else {
//     drink2 = 'water';
// }

// console.log(drink2);

// console.log(`i like to drink water ${age >= 18 ? 'buy wine' : 'buy water'}`);

//Coding Challenge #4

// const bill = 430;
// let tip;

// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//---------------------------------------
