function printName() {
  console.log("Hi!  I am Hrithik Choudhary");
}

printName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

function isAdult() {
  let age = 19;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not an Adult");
  }
}

isAdult();

function printPoem() {
  console.log("Twinkle Twinkle little star");
  console.log("How i wonder what you are");
}

printPoem();

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}

rollDice();

//Functions with Arguments/Parameters
// let name = prompt("Enter your name!");

let name = "Hrithik";
let age = 24;

function printUser(name, age) {
  console.log(` ${name} age is ${age} `);
}
printUser(name, age);
//Functions should be called based on order of arguments

function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

//Average of three number

function avergaeOf3(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

avergaeOf3(10, 20, 30);

//Multiplication of a number

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num * i}`);
  }
}

table(5);

//Return Keyword in JS

//Function ot return sum of number from 1 to n.

function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfN(10));

//Functionn for concatenation of all strings in an array
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i];
  }
  return result;
}

console.log(concat(str));

//Scope
//Function Scope - variable inside function accessible inside function only
function scope() {
  let x = 10;
  console.log(x);
}
scope();
//Global Scope - variable accessible from anywhere in the code
let y = 20;
console.log(y);
//Block Scope - variable accessible only inside the block where it is declared
function blockScope() {
  if (true) {
    let z = 30;
  }
}

//Lexical Scope
//Inner function can access variables of outer function
function outer() {
  let x = 1;
  let y = 2;
  function inner() {
    console.log(x);
    console.log(y);
  }
  inner();
}

outer();

let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreen() {
    console.log(green);
  }
}
console.log(greet);
changeGreet();

//Function Expressions
//Function expression is a function that is assigned to a variable

let add = function (a, b) {
  return a + b;
};
let result1 = add(2, 4);

let sub = function (a, b) {
  return a - b;
};
let result2 = sub(4, 2);

let mul = function (add, sub) {
  return add * sub;
};

console.log(mul(result1, result2));

//Higher Order Functions
//A function that takes another function as an argument is called a higher order function
//A function that returns another function is also a higher order function
let greeting = function () {
  console.log("hello");
};

function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}

multipleGreet(greeting, 10);

let odd = function (n) {
  console.log(!(n % 2 == 0));
};
odd(5);

let even = function (n) {
  console.log(n % 2 == 0);
};
even(6);

function oddOrEvenFactory(request) {
  if (request == "odd") {
    let odd = function (n) {
      console.log(!(n % 2 == 0));
    };
    return odd;
  } else if (request == "even") {
    let even = function (n) {
      console.log(n % 2 == 0);
    };
    return even;
  } else {
    console.log("wrong answer");
  }
}

let request = "even";

//Methods
//Methods are functions that belong to an object
//They are used to perform operations on the object

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

//Accessing methods
//Methods are accessed using the dot notation
console.log(calculator.add(5, 10));
//or
const addition = calculator.add;
console.log(add(5, 10));

//Methods shorthand
//Methods can be defined using the shorthand syntax
//The shorthand syntax is a shorter way of defining methods
const calculatorShorthand = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

let arr = [1, 16, 18, 20, 24, 30, 2, 5, 9];
let n = 16;
//Function to return an larger than a number
function largerNumber(arr, n) {
  let larger = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      // larger[i] = arr[i];
      larger.push(arr[i]);
    }
  }
  return larger;
}
console.log(largerNumber(arr, n));

//or
//Function to return an larger than a number
function getElements(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      console.log(arr[i]);
    }
  }
}
console.log(getElements(arr, n));

//Function to return a unique string
let stringq = "ababcddefghhij";
function getUnique(stringq) {
  let uniqueString = "";
  for (let i = 0; i < stringq.length - 1; i++) {
    let currentChar = stringq[i];
    if (uniqueString.indexOf(currentChar) == -1) {
      uniqueString += currentChar;
    }
  }
  return uniqueString;
}
console.log(getUnique(stringq));

//Function that accepts a list of country
// names as input and returns the longest country name as output

let country = ["India", "USA", "China", "Japan", "France"];
function longestCountry(country) {
  let largestIndex = 0;
  for (let i = 1; i < country.length; i++) {
    if (country[i].length > country[largestIndex].length) {
      largestIndex = i;
    }
  }
  return country[largestIndex];
}
console.log(longestCountry(country));

//Function to count vowels in a string;

let stringw = "Aeiouuuuuu";

function countVowels(stringw) {
  //let vowels = ["a","e","i","o","u"];
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < stringw.length; i++) {
    //if(vowels.includes(stringw[i].toLowerCase())) - O(n)
    if (vowels.has(stringw[i].toLowerCase())) {
      //O(1)
      count++;
    }
  }
  return count;
}
console.log(countVowels(stringw));

//Generate a random no within a range
let start = 100;
let end = 150;
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));
