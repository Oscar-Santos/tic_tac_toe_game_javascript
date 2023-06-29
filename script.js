const lines = document.querySelectorAll(".line");
const player_x = "X";
const player_o = "O";
// tracking the turn of the player
let turn = player_x;

// array of 9 items
const boardState = Array(lines.length);
boardState.fill(null);

// elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playagain = document.getElementById("play-again");

// adding sounds to the game:
const clickSound = new Audio("sounds/click.wav)")
const gameOverSound = new Audio("sounds/game_over.wav")

lines.forEach((line) => line.addEventListener("click", lineClick));

function lineClick(event) {
    if (gameOverArea.classList.contains("visible")) {
      return;
    }
  
    const line = event.target;
    const lineNumber = line.dataset.index;
    if (line.innerText != "") {
      return;
    }
  
    if (turn === player_x) {
      line.innerText = player_x;
      boardState[lineNumber - 1] = player_x;
      turn = player_o;
    } else {
      line.innerText = player_o;
      boardState[lineNumber - 1] = player_o;
      turn = player_x;
    }
  
  }



