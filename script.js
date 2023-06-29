
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
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

// adding sounds to the game:
const clickSound = new Audio("sounds/click1.wav")
const gameOverSound = new Audio("sounds/win_2.wav")
const claps = new Audio("sounds/claps.wav")

lines.forEach((line) => line.addEventListener("click", lineClick));

function setHoverText() {
    //remove all hover text
    lines.forEach((line) => {
      line.classList.remove("x-hover");
      line.classList.remove("o-hover");
    });
  
    const hoverClass = `${turn.toLowerCase()}-hover`;
  
    lines.forEach((line) => {
      if (line.innerText == "") {
        line.classList.add(hoverClass);
      }
    });
  }
  
  setHoverText();

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

    clickSound.play();
    setHoverText();
    checkWinner();
  }

  function checkWinner() {
    //Check for a winner
    for (const winningCombination of winningCombinations) {
      //Object Destructuring
      const { combo, strikeClass } = winningCombination;
      const lineValue1 = boardState[combo[0] - 1];
      const lineValue2 = boardState[combo[1] - 1];
      const lineValue3 = boardState[combo[2] - 1];
  
      if (
        lineValue1 != null &&
        lineValue1 === lineValue2 &&
        lineValue1 === lineValue3
      ) {
        strike.classList.add(strikeClass);
        gameOverScreen(lineValue1);
        return;
      }
    }
  
    //Check for a draw
    const allLineFilledIn = boardState.every((line) => line !== null);
    if (allLineFilledIn) {
      gameOverScreen(null);
    }
  }

  function gameOverScreen(winnerText) {
    let text = "It is a Draw!";
    if (winnerText != null) {
      text = `Winner is Player ${winnerText}!`;
    }
    gameOverArea.className = "visible";
    gameOverText.innerText = text;
    gameOverSound.play();
    claps.play();
  }

  function startNewGame() {
    strike.className = "strike";
    gameOverArea.className = "hidden";
    boardState.fill(null);
    lines.forEach((line) => (line.innerText = ""));
    turn = player_x;
    setHoverText();
  }
// now creating the possible winning combinations:

const winningCombinations = [
    //rows
    { combo: [1, 2, 3], strikeClass: "strike-row-1" },
    { combo: [4, 5, 6], strikeClass: "strike-row-2" },
    { combo: [7, 8, 9], strikeClass: "strike-row-3" },
    //columns
    { combo: [1, 4, 7], strikeClass: "strike-column-1" },
    { combo: [2, 5, 8], strikeClass: "strike-column-2" },
    { combo: [3, 6, 9], strikeClass: "strike-column-3" },
    //diagonals
    { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
    { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
  ];

