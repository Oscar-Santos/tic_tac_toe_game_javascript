const lines = document.querySelectorAll(".line");
const player_x = "X";
const player_y = "Y";
// tracking the turn of the player
let turn = player_x;

// array of 9 items
const boardState = Array(lines.length);
boardState.fill(null);

