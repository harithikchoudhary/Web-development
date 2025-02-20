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

//this keyword in java
//this keyword is used to refer to the current object of the class.
//it is used to access the properties and methods of the current class.
//it is used to call the constructor of the current class.
const student = {
  name: "Hrithik",
  age: 24,
  physics: 97,
  math: 93,
  english: 95,
  getAvg() {
    let avg = (this.physics + this.english + this.math) / 3;
    console.log(avg);
  },
};

console.log(student.getAvg());

//try and catch block
try {
  console.log(a);
} catch {
  console.log("a is not defined");
}

//Arrow Functions
const sumi = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {
  return n * n * n;
};

const pow = (a, b) => {
  return a ** b;
};

//Arrow Fucntions Implicit Return
const multiply = (a, b) => a * b;

//setTimeout
// console.log("Welcome");
// setTimeout(() => {
//   console.log("Hrithik Choudhary");
// }, 4000);
// console.log("Hi");

//setInterval

// let id = setInterval(() => {
//   console.log("SetInterval");
// }, 2000);
// console.log(id);

// clearInterval(2);

//Arrow function with this keyword

const students = {
  name: "Hrithik",
  age: 20,
  prop: this, //global scope
  getName: function () {
    console.log(this);
    return this.name;
  },

  getAge: () => {
    console.log(this);
    return this.age; //global scope
  },
};

//Arrow function return square of a number n
const square = (n) => n * n;

console.log(square(4));

//Arrow Function named isEven()
let isEven = (n) => {
  if (n % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd";
  }
};

//Arrow function named arrayAverage that accepts array of numbers and return averga of those numbers
let arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

//Array methods
//forEach() method
let arrays = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};
arrays.forEach(print);
//or
arrays.forEach(function (el) {
  console.log(el);
});

//or with arrow

arrays.forEach((el) => console.log(el));

let ar = [
  {
    name: "Hrithik",
    marks: 95,
  },
  {
    name: "Pooja",
    marks: 99,
  },
  { name: "Mohan", marks: 91 },
];

ar.forEach((student) => {
  console.log(student.name);
});

//map

let no = [1, 2, 3, 4];

let double = no.map((el) => {
  return el * el;
});
console.log(double);

let studen = [
  {
    name: "Hrithik",
    marks: 95,
  },
  {
    name: "Pooja",
    marks: 99,
  },
  { name: "Mohan", marks: 91 },
];

let gpa = studen.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

//Filter()
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let evenNo = num.filter((num) => {
  return num % 2 == 0;
});

console.log(evenNo);

//Every()

let oddNumbers = [1, 3, 5, 7];

let everyNo = oddNumbers.every((num) => {
  return num % 2 != 0;
});

console.log(everyNo);

//Reduce

let reducedArray = [1, 2, 3, 4];
let reduceNo = reducedArray.reduce((res, el) => res * el);

console.log(reduceNo);

//Maximum value through reduce

let maxArray = [1, 2, 6, 4, 7, 8, 9, 3];

let max = maxArray.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(max);

//Find Minimum value
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}

let nums = [1, 2, 4, 7, 0, 10];
console.log(getMin(nums));

//Default parameter
function sum(a, b = 2) {
  return a + b;
}
console.log(sum(10));

//try to use default parameter at the end

//Spread
let myName = "Hrithik";
console.log(...nums);
console.log(Math.min(...nums));
console.log(...myName);

let oddNo = [1, 3, 5, 7, 9];
let evenNos = [2, 4, 6, 8, 10];

let oddEven = [...evenNos, ...oddNo];
console.log(oddEven);

//Spread with Object Literals
const data = {
  email: "hrithik@gmail.con",
  password: "abcd",
};

const dataCopy = { ...data, id: 123, country: "India" };
console.log(dataCopy);

//storing array in object through spread
let arrayNo = [9, 4, 5, 2, 4];
const obj1 = { ...arrayNo };
console.log(obj1);
const obj2 = { ..."hello" };
console.log(obj2);

//Rest

function addOn(...sum) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(args[i]);
  }
}

function minimum() {
  console.log(arguments);
}

console.log(minimum(1, 2, 3, 4));

//Destructuring
//Stroing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...others] = names;
console.log(winner);

//Object Destrcuturing
const obj3 = {
  name: "Hrithik",
  age: 24,
  company: "UST",
  username: "hrithik@123",
  password: "abcd",
};

let { username, password } = obj3;
let { company: currentCompany } = obj3;
console.log(currentCompany);

console.log(username, password);
