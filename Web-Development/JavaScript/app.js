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

let firstName = prompt("Enter your name : ");
let lastName = prompt("Enter you last name");
let fullName = "Welcome " + firstName + " " + lastName + " !";
alert(fullName);
