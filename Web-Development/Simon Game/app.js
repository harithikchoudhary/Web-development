let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Game Started");
    levelUp();
  }
});

function btnFlash(btn) {
  if (!btn) return;
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  if (!btn) return;
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  console.log(userSeq);
  console.log(gameSeq);
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  if (randbtn) {
    btnFlash(randbtn);
  } else {
    console.error("Button Not found");
  }
}

function checkAns(idx) {
  if (userSeq.length === gameSeq.length) {
    setTimeout(levelUp, 1000);
  } else {
    h2.innerHTML = `Game Over! Your Score was  <b> ${level}</></b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.legth - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
