let addTask = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

addTask.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("delete");

  item.appendChild(del);

  ul.appendChild(item);
  console.log(inp.value);
  inp.value = "";
});

//Event Delegation
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    console.log("Delete");
    event.target.parentNode.remove();
  }
});
