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
