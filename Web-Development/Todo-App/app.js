let todo = [];
let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("--------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("Task added");
  } else if (req == "delete") {
    let index = prompt("Please enter the index of the task you want to delete");
    todo.splice(index, 1);
    console.log("Task deleted");
  } else {
    console.log("Invalid request");
  }
  req = prompt("Please enter your new request");
}
