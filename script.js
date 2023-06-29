const lines = document.querySelectorAll(".line");
const player_x = "X";
const player_y = "Y";
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





