let student = {
  name: "Hrithik",
  age: 23,
  place: "Jammu",
  marks: 90,
};
//Generally objects are created using const

const delhi = {
  latitude: "28.7041",
  longitude: "12.3241",
};

const item = {
  price: 101.99,
  discount: 50,
  colors: ["red", "green"],
};

//Thread/Twitter Post
const post = {
  username: "Hrithik Choudhary",
  content: "This is my First Post",
  like: 200,
  reposts: 5,
  tags: ["@hrithik", "@mohan"],
};

//Get Values

let students = {
  name: "Hrithik",
  age: 23,
};

console.log(students[name]);

const obj = {
  1: "a",
  2: "b",
  null: "c",
  undefined: "d",
};

//Add/update value
let stu = {
  name: "Hrithik",
  age: 23,
  place: "Jammu",
  marks: 90,
};

console.log((stu.gender = "Male"));
console.log((stu.place = "Bangalore"));
console.log(stu);

//Nesting object literals
const classInfo = {
  hrithik: {
    marks: 90,
    age: 23,
    nationality: "indian",
  },
  pooja: {
    marks: 85,
    age: 22,
    nationality: "indian",
  },
  mohan: {
    marks: 95,
    age: 25,
    nationality: "indian",
  },
};

//Array of Objects
const classInformation = [
  {
    name: "Hrithik",
    marks: 90,
    age: 23,
    nationality: "indian",
  },
  {
    name: "Pooja",
    marks: 85,
    age: 22,
    nationality: "indian",
  },
  {
    name: "mohan",
    marks: 95,
    age: 25,
    nationality: "indian",
  },
];

console.log(classInformation);

//Math Object

console.log(Math.PI);
console.log(Math.E);
console.log(Math.max(1, 2));
console.log(Math.min(1, 2));
console.log(Math.abs(-89));
console.log(Math.pow(2, 2));
console.log(Math.floor(5.5)); //round of smllest number
console.log(Math.floor(5.999999));
console.log(Math.floor(-5.5));
console.log(Math.floor(5.11111));
//round of largest no ceil

console.log(Math.ceil(5.5));

//Random numbers
console.log(Math.random());

//Random Integers
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num);

let nums = Math.random();
nums = nums * 100;
nums = Math.floor(nums);
nums = nums + 1;
console.log(nums);

let no = Math.floor(Math.random() * 5) + 1;
console.log(no);

//20 to 24
let number = Math.floor(Math.random() * 5) + 20;
console.log(number);

//Guessing Game
// const max = prompt("Enter a max no: ");

// const randomNo = Math.floor(Math.random() * max) + 1;
// console.log(randomNo);

// let guess = prompt("Guess the number");

// while (true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }
//   if (guess == randomNo) {
//     alert("You won");
//     break;
//   } else if (guess < randomNo) {
//     guess = prompt("Hint:Your guess was too small! please try again");
//   } else if (guess > randomNo) {
//     guess = prompt("Hint: Your no is too large!please try again");
//   } else {
//     guess = prompt("Invalid input");
//   }
// }

//Dice roll Game
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

const car = {
  name: "BMW",
  model: "X5",
  year: 2020,
  color: "Black",
};

//Create
// an
// objectPersonwiththeirname,ageandcity.Edittheircity’soriginalvaluetochangeitto“NewYork”.AddanewpropertycountryandsetittotheUnitedStates.harithikchoudhary6@gmail.com

const Person = {
  name: "Rahul",
  age: 25,
  city: "Delhi",
  country: "India",
};

console.log(Person);
Person.country = "USA";
Person.city = "New York";
console.log(Person);
