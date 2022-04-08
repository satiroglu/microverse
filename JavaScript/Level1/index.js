// 2 -Introduction
console.log("Hello World!");

// 3 - Exercise 1
/* 
  1. create an account on repl.it
  2. create an empty node.js project
*/

// 4 - Why are variables useful?
let userName = "Ahmet";
console.log("Hello", userName, "how are you?");

let totalApples = 20;
let totalUsers = 5;
let applesPerUser = totalApples / totalUsers;
console.log("You have", applesPerUser, "apples");

// 5 - Declarin and displaying variables
let country = "Turkey";
console.log(country);

// 6
let myNameIs = "Ahmet Erturk";
console.log(myNameIs);

// 7 - Data types
let myCountry = "Turkey";
let year = 2022;
let nightTime = false;
console.log(myCountry, year, nightTime);

// 8 - Learn more about Undefined and Null in Javascript
// Article: https://flexiple.com/undefined-vs-null-javascript/

// 8 - Undefined and Null Exercise
let n;
console.log(n);

let m = null;
let array = []; // I added this
m = array.slice(0,2);
console.log(m);

console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(undefined + 1); // NaN = Not a Number
console.log(null + 1); // 1

let p = 10000, // principal amount
    r = 14,
    t;
function simpleInterest() {
  let si = (p * r * t) / 100;
  return si;
};
console.log(simpleInterest()); // NaN

console.log(!!undefined);
console.log(!!null);

let a, b = null;
if (a) {
  console.log("a is defined");
} else if (b) {
  console.log("b is defined");
} else {
  console.log("both of them are not defined");
}; // both of them are not defined

console.log(undefined == null); // true
console.log(undefined === null); // false

// 9 - Exercise 4
let greeting = "Hello my name is",
    myName   = "Ahmet",
    str      = "And I have",
    apples   = 11,
    end      = "apples";
console.log(greeting, myName, str, apples, end);

// 10 - Modifying variables
let yourName = "David";
let lastName = "Mayor"
yourName = "Oscar"; // 1. way for strings
yourName += " Johson";  // 2. way same: yourName = yourName + " Johson"; for strings
console.log("Your name is", yourName);

let fullName = yourName + " " + lastName; // 3. way for strings
console.log(fullName)

let appleNums = 20;
appleNums += 7; // 4. way for numbers
console.log(appleNums);

// 11 - Exercise 6

let greeting1 = "Hello my name is",
    myName1   = "Ahmet",
    lastName1 = "Erturk",
    str1      = "And I have",
    apples1   = 11 * 2,
    end1      = "apples";
console.log(greeting1, myName1, lastName1, str1, apples1, end1);

// 12 - Final assessment
