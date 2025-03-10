async function greet() {
  return "hello"; //THis is equivalent to returning Promise.resolve("hello").
}
//async functions make sure that functions return promise

greet()
  .then((result) => {
    console.log("Promise was resolved");
    console.log(result);
  })
  .catch((err) => {
    console.log("Promise was rejected");
    console.log(err);
  });

//function functionName(parametere){
//return vale;
//}

//const functionName = function(parameter){
//return value;
//};

//const functionName = (parameter) => expression;
// const functionName = (parameters) => {
//     // Function body
//     return value;
// };
//async function functionName() {return value;};
// Function Type	Syntax Example
// Function Declaration	function sum(a, b) { return a + b; }
// Function Expression	const sum = function(a, b) { return a + b; };
// Arrow Function	const sum = (a, b) => a + b;
// IIFE	(function() { console.log("Hello"); })();
// Generator Function	function* gen() { yield 1; yield 2; }
// Callback Function	function greet(callback) { callback(); }
// Higher-Order Function	function operate(fn, a, b) { return fn(a, b); }
// Async Function	async function fetchData() { return "Hello"; }
// Constructor Function	function Person(name) { this.name = name; }
// Default Parameters	function greet(name = "Guest") { return "Hello, " + name; }
// Rest Parameters	function sum(...nums) { return nums.reduce((a, b) => a + b); }

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      console.log(num);
      resolve();
      // return num;
    }, 1000);
  });
}

//await can be used  only inside async function
async function demo() {
  await getNum();
  await getNum();
  await getNum();
}

//Handling Rejections with await
async function demo() {
  try {
    await getNum();
    await getNum();
    await getNum();
  } catch (error) {
    console.log(error);
  }
}
