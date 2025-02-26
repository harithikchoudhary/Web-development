// let btn = document.querySelector("button");

// btn.onclick = function () {
//   console.log("Button was clicked");
// };

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for (let btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//       console.log("Mouse Hovered");
//     };

//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function(){
//    console.log("DOuble clicked");  })

// function sayHello() {
//   alert("Button Clicked");
// }

// function sayName() {
//   alert("Myself Button");
// }

// Random Color Selector
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = getRandomColor();

//   console.log("Color Updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

//this in Event Listeners

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// function changeColor() {
//   console.log(this.innerText);
//   this.style.backgroundColor = "grey";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

//Keyboard Events
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   console.log(event);
//   console.log("Key was pressed");
// });

// inp.addEventListener("keyup", function () {
//   console.log("Key was pressed");
// });

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Registered Successfully");
});

let p = document.querySelector("p");

let inp = document.querySelector("#text");

inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
