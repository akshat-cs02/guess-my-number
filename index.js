
'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// let highscore = 0;
let highscore = Number(localStorage.getItem("highscore")) || 0;
let playing = true;

document.querySelector(".highscore").textContent = highscore;

const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", () => {
  if (!playing) return;

  let guessNumber = Number(document.querySelector(".guess").value);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 20) {
    message.textContent = "Only numbers between 1 and 20 are allowed";
  }

  else if (guessNumber === number) {
    message.textContent = " Congratulations You Win!";
    document.querySelector(".number").textContent = number;
    document.body.style.backgroundColor = "magenta";
    playing = false;

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  else {
    if (score > 1) {
      message.textContent = guessNumber > number ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = " Game Over";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = number;
      playing = false;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  playing = true;

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
});
