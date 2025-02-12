console.log("Hello World");
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum is :", sum);

let pencilPrice = 10;
let eraserPrice = 5;
console.log("Total price is: ", pencilPrice + eraserPrice, " Rupees");
console.log(`Total price is: ${pencilPrice + eraserPrice} Rupees `);

//Arithmatic Operators
let c = 20;
let d = 10;
console.log("Addition: ", c + d);
console.log("Subtraction: ", c - d);
console.log("Multiplication: ", c * d);
console.log("Division: ", c / d);
console.log("Modulo: ", c % d);
console.log("Power: ", c ** d);

//Unary Operators
console.log(c++);
console.log(c);
console.log(--d);
console.log(d);

//Assignment

d = c;
console.log(d);

//Comparison Operators
console.log(c > d);
console.log(c < d);
console.log(c == d);

// let age = 19;
// let age = 16;
// console.log(age > 18);
// console.log(age != 17);

let number = 5;
let str = "5";
console.log(number == str);
//Values get compared not typeOf

//Use === operator to compare both values and type
console.log(number === str);

//Comparison for non-numbers
console.log("Hello" === "Hello");

//Unicode numbers below
//'a' = 61, 'b' = 62
//'A' = 41, "B" = 42
console.log("P" < "U");

//Conditional Statements
// if (condition) {//Code to be executed if its true}
// if (condition) { code to be executed if condition is true }
// else { code to be executed if condition is false }

let age = 17;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

//Traffic lights
let color = "yellow";
if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Go Slow");
} else if (color === "Green") {
  console.log("Go");
} else {
  console.log("Invalid color");
}

let size = "S";
if (size === "XL") {
  console.log("price is Rs 250");
} else if (size === "L") {
  console.log("price is Rs 200");
} else if (size === "M") {
  console.log("price is Rs 100");
} else if (size === "S") {
  console.log("price is Rs 50");
} else {
  console.log("Invalid size");
}

//Nested if-else
let marks = 89;

if (marks >= 33) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade : Outstanding");
  }
} else {
  console.log("Better luck next time");
}

//Logical operators
let mark = 80;

if (mark >= 33 && mark >= 80) {
  console.log("You are Passed");
  console.log("Grade : Outstanding");
} else {
  console.log("Better luck next time");
}

if (!(mark < 33)) {
  console.log("You are Passed");
}
console.log(!false); //true
console.log(!true); //false

let string = "apple";
if (string[0] === "a" && string.length > 3) {
  console.log("Good String");
} else {
  console.log("Bad String");
}

let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("unsafe");
}

let colors = "red";

switch (colors) {
  case "red":
    console.log("Stop! red light");
    break;
  case "yellow":
    console.log("Go Slow! yellow light");
    break;
  case "green":
    console.log("Go!! green light");
    break;
  default:
    console.log("Light is broken");
}

let day = 7;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

console.log("This is console log message");
console.error("This is console error message");
console.warn("This is console warning message");
// alert("This is alert message");
// let firstName = prompt("Enter your name : ");
// alert(firstName);

// let firstName = prompt("Enter your name : ");
// let lastName = prompt("Enter you last name");
// let fullName = "Welcome " + firstName + " " + lastName + " !";
// alert(fullName);

let no = 20;

if (no % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

// let names = prompt("Enter your name: ");
// let ages = prompt("Enter your age: ");
// alert(`${names} is ${ages} years old`);

let quarter = 1;

switch (quarter) {
  case 1:
    console.log("January, Febrauary, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, Auagust, September");
    break;
  case 4:
    console.log("October, November, December");
    break;

  default:
    console.log("Invalid input");
}

let strings = "Hrithik";

if ((strings[0] == "A" || strings[0] == "a") && strings.length > 5) {
  console.log("Good string");
}

//String Methods

let msg = "    hello  ";
let newStr = msg.trim();
console.log(msg);
console.log(newStr);

let upper = msg.toUpperCase();
console.log(upper);

let low = "STRING";
let lower = low.toLowerCase();
console.log(lower);

let index = "ilovecoding";
let firstOccurance = index.indexOf("love");
console.log(firstOccurance);

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let s = index.slice(5);
let p = index.slice(0, 5);
console.log(s);
console.log(p);
let j = index.slice(-3);
console.log(j);

//Replace()
let strs = "I love coding";
let newStrs = strs.replace("coding", "javascript");
console.log(newStrs);
console.log(strs);
console.log(newStrs);

//Repeat
let st = "Hello";
let newSt = st.repeat(3);
console.log(newSt);

//Practice qs
let message = "help!";
let newMessage = message.trim().toUpperCase();
console.log(newMessage);

let name = "ApnaCollege";
let newName = name.slice(4, 9);
console.log(newName);
let nName = name.indexOf("na");
console.log(nName);
let rep = name.replace("Apna", "Our");
console.log(rep);
let repl = name.slice(4).replace("l", "t").replace("l", "t");
console.log(repl);

//<--------------------------------Arrays in JavaScript------------------------------------------>
let student = ["Hrithtik", "Pooja", "Nidhi"];
console.log(student[0]);
console.log(student.length);

//Mixed Array
let infor = ["Hrithik", "25", "6.7"];
console.log(infor[2]);

//Empty Array
let newArr = [];

for (let i = 0; i < infor.length; i++) {
  console.log(infor[i]);
}

//Arrays are Mutable in JavaScript
let fruits = ["mango", "apple", "orange"];
fruits.push("grapes");

fruits[0] = "kiwi";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

//Arrya Methods
//Push - Pop - Unshift - Shift
let cars = ["maruti", "toyota", "hyundai"];
cars.push("ford", "audi");
console.log(cars);
//pop
cars.pop();
console.log(cars);
//shift
cars.shift();
console.log(cars);
//unshift
cars.unshift("bmw");
console.log(cars);

let blocked = cars.pop();
console.log(blocked);
let notAvaiable = cars.shift();
console.log(notAvaiable);
console.log(cars);

// let month = ["january", "july", "march", "august"];
// console.log(month);
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

//indexOf-includes
let fruitss = ["mango", "apple", "orange"];
console.log(fruitss.indexOf("apple")); //1
console.log(fruitss.indexOf("Apple")); //true
console.log(fruitss.includes("apple")); //true
//includes  and indexOf both are case sensitive
console.log(fruitss.includes("Apple")); //false

//concat
let primary = ["red", "green", "orange"];
let secondary = ["blue", "yellow", "black"];
console.log(primary.concat(secondary));

//reverse
let colorss = ["red", "green", "blue"];
console.log(colorss.reverse());

//slice
let slices = ["red", "green", "blue", "yellow", "black"];
console.log(slices.slice(1, 3)); //green, blue
console.log(slices.slice(1)); //green, blue, yellow, black
console.log(slices.slice(-2));
//splice
let splices = ["red", "green", "blue", "yellow", "black"];
console.log(splices.splice(1, 2)); //green, blue
//splice returns an array of the deleted elements
console.log(splices); //red, yellow, black

//sort

let sortss = ["red", "green", "blue"];
console.log(sortss.sort());
//sort is case sensitive
let nos = [4, 3, 7, 9, 100];
console.log(nos.sort());

//Practice Question
let month = ["january", "july", "march", "august"];
// console.log(month.splice(0, 1));
// console.log(month);
// console.log(month.splice(1, 0, "june"));
// console.log(month);
console.log(month.splice(0, 2, "july", "june"));
console.log(month);

let languages = [
  "c",
  "c++",
  "html",
  "javascript",
  "python",
  "java",
  "c#",
  "sql",
];
console.log(languages.reverse().indexOf("javascript"));
console.log(languages);

//Array References
let arr = ["a", "b"];
let arrCopy = arr;
arrCopy.push("c");
console.log(arrCopy);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arrCopy);

const arry = [1, 2, 3];
console.log(arry);
arry.push(4);
arry.pop();
arry.pop();
arry.pop();
arry.pop();
arry.push(10);
arry.push(11);
arry.push(12);

console.log(arry);

//Nested Array
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
console.log(nestedArray);

let tic = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(tic);

//First n positive no
let array = [-2, 9, 0, 1];
let n = 3;

let ans = array.splice(arr.length - n);
console.log(ans);

// let strr = prompt("Please enter a string:");

// if (strr.length == 0) {
//   console.log("String is empty");
// } else {
//   console.log("String is not empty");
// }

// let strrr = "ApnACollege";
// let idx = 3;

// if (str[idx] == str[idx].toLowerCase()) {
//   console.log("character is lowercase");
// } else {
//   console.log("character is not lowercase");
// }

//for loop
//for(initialisation; condition; updation){
//do something
//}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}

// let nn = prompt("Wrie a number");
// nn = parseInt(nn);
// for (let i = nn; i <= nn * 10; i = i + nn) {
//   console.log(i);
// }

for (let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`inner loop ${j}`);
  }
}

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

let i = 0;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}

let k = 1;
while (k <= 20) {
  console.log(k);
  k = k + 2;
}

let favourite = "Avatar";
let guess = prompt("Enter my favourite movie: ");
while (guess != favourite && guess != "quit") {
  guess = prompt("wrong guess!! Please try again:");
}

if (guess == favourite) {
  console.log("Congratulation!! you guessed it right");
} else {
  console.log("You Quit");
}

//Loops with arrays

let freshFruits = ["mango", "banana", "litchi", "apple", "kiwi"];
for (let i = 0; i < freshFruits.length; i++) {
  console.log(i, freshFruits[i]);
}

for (let i = freshFruits.length - 1; i >= 0; i--) {
  console.log(i, freshFruits[i]);
}

//Nested Loops with Nested Arrays
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];

for (let i = 0; i < heroes.length; i++) {
  console.log(`List ${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}

let sums = 0;
for (let char of "18") {
  console.log(`Character: ${char}`);
  sums += Number(char);
}
console.log(`Sum of digits: ${sums}`);

//Todo App Using JavaScript
