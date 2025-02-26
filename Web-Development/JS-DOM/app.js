console.log(document.getElementById("description"));
console.log(document.getElementsByClassName("oldImg")[0]);
console.log(document.getElementsByClassName("oldImg")[1]);
console.log(document.getElementsByClassName("oldImg")[2]);

// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png";
//   console.log(`value of image no. ${i} is changes`);
// }

// document.getElementsByTagName("p")[1].innerText = "abc";

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("p"));

let para = document.querySelector("p");

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

let img = document.querySelector("img");

img.getAttribute("id");
console.log(img.getAttribute("id"));
// img.setAttribute("id", "spiderman");
// console.log(img.getAttribute("id"));

//Manipulate Styles using classList
let h1 = document.querySelector("h1");
console.log(h1.classList.add("newClass"));
console.log(h1.classList);
h1.classList.remove("newClass");
console.log(h1.classList);
h1.classList.toggle("newClass");
console.log(h1.classList);
h1.classList.contains("newClass");
console.log(h1.classList);
h1.classList.replace("newClass", "newClass2");
console.log(h1.classList);

//add to add new class
//remove to remove class
//toggle to add or remove class, i class exists it will remove , if class doesnot exist it will aadd
//contains to check if class exist
//replace to replace class with new class

//Navigation
//parentElement
//children
//previousElementSibling/nextElementSibling
//firstElementChild/lastElementChild
let h4 = document.querySelector("h4");

console.log(h4.parentElement);

let box = document.querySelector(".box");
console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

//Adding Elements

let newP = document.createElement("p");
newP.innerText = "Hi, i am new para";
let body = document.querySelector("body");
body.appendChild(newP);
//We can append elements anywhere through parent child elements
newP.append(" this is new append");
//newP.append(btn);

//prepend
//it will insert at the first or insertBefore
//box.prepend(newP);

//insertAdjacentElement
// Retrieve elements using different methods
console.log(document.getElementById("description"));
console.log(document.getElementsByClassName("oldImg")[0]);
console.log(document.getElementsByClassName("oldImg")[1]);
console.log(document.getElementsByClassName("oldImg")[2]);

// Update image sources using a loop
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "assets/spiderman_img.png";
  console.log(`Image source updated for image no. ${i}`);
}

// Update paragraph text
document.getElementsByTagName("p")[1].innerText = "abc";

// Retrieve elements using querySelector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

// Retrieve all paragraph elements
console.dir(document.querySelectorAll("p"));

// Retrieve a paragraph element
let parag = document.querySelector("p");

// Log paragraph text content
console.log(parag.innerText);
console.log(parag.innerHTML);
console.log(parag.textContent);

// Retrieve an image element
let img1 = document.querySelector("img");

// Get and set image attributes
console.log(img1.getAttribute("id"));
img1.setAttribute("id", "spiderman");
console.log(img1.getAttribute("id"));

// Manipulate styles using classList
let h1s = document.querySelector("h1");
h1s.classList.add("newClass");
console.log(h1s.classList);
h1s.classList.remove("newClass");
console.log(h1s.classList);
h1s.classList.toggle("newClass");
console.log(h1s.classList);
console.log(h1.classList.contains("newClass"));
h1s.classList.replace("newClass", "newClass2");
console.log(h1s.classList);

// Navigate the DOM
let h41 = document.querySelector("h4");
console.log(h41.parentElement);

let boxs = document.querySelector(".box");
console.log(boxs.children);

let ul1 = document.querySelector("ul");
console.log(ul1.children);
console.log(ul1.children[2].previousElementSibling);
console.log(ul1.children[1].nextElementSibling);

// Add new elements
// let newP = document.createElement("p");
// newP.innerText = "Hi, I am a new paragraph";
// let bodys = document.querySelector("body");
// body.appendChild(newP);
// newP.append(" This is a new append");

// Prepend an element
// box.prepend(newP);

// Insert an element adjacent to another
// box.insertAdjacentElement("beforebegin", newP);

//Removing Elements
// let newP = document.querySelector("p");
// newP.remove();
// let newP = document.querySelector("p");
// newP.parentNode.removeChild(newP);
// let newP = document.querySelector("p");
// newP.outerHTML = "";
// let newP = document.querySelector("p");
// newP.innerHTML = "";
// let newP = document.querySelector("p");
// newP.textContent = "";

//Practice question

let red = document.createElement("p");
red.innerText = "Hi, I'm red!";
red.style.color = "red";
document.querySelector("body").append(red);

let hwad = document.createElement("h3");
hwad.innerText = "Hello, World!";
hwad.style.color = "blue";
document.querySelector("body").append(hwad);

let div = document.createElement("div");

let h1e = document.createElement("h1");

let para2 = document.createElement("p");

h1.innerText = " I m in a div";
para2.innerText = "Me too";

div.append(h1e);
div.append(para2);

document.querySelector("body").appendChild(div);
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

// Create a new input and button element on the page using JavaScript only.
// The input should be a text input and the button should say "Click me!".

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = " Click me!";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

document.setAttribute("placeholder", "username");
document.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
button.style.backgroundColor = "white";

let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice!</u>";
heading.style.color = "purple";
