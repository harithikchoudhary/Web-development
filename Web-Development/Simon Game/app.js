let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = localStorage.getItem("simonHighScore") || 0; // Retrieve high score

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

// Start game on keypress
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    console.log("Game Started");
    levelUp();
  }
});

// Flash effect for game sequence buttons
function btnFlash(btn) {
  if (!btn) return;
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

// Flash effect for user clicks
function userFlash(btn) {
  if (!btn) return;
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

// Level up by adding a new random color to the sequence
function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `Level ${level} <br> Highest Score: ${highScore}`;

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

// Check user's answer
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      if (level > highScore) {
        highScore = level;
        localStorage.setItem("simonHighScore", highScore);
      }
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${
      level - 1
    }</b> <br>Highest Score: ${highScore} <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

// Handle button press
function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// Reset the game
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
