// data base
const computerBoard = [];
let playerBoard = [];
let roundCounter = 0;
let win = false;
const results = [];
let currentPlayer = {
  name: "",
  attempts: 0,
};

// flow
function askPlayerName() {
  currentPlayer.name = prompt("Put your name:");
  currentPlayer.attempts = 0;
}

function generateComputerBoard() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    computerBoard.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }
}

function appendToDisplay(value) {
  switch (roundCounter) {
    case 0:
      playerBoard[0] = value;
      if (playerBoard[roundCounter] === 0) {
        playerBoard[roundCounter] = "0";
      }
      document.getElementById("display1").value = value;
      roundCounter++;
      break;
    case 1:
      if (playerBoard.includes(value)) {
        alert("You have already entered this number");
        roundCounter--;
      } else {
        playerBoard[1] = value;
        if (playerBoard[roundCounter] === 0) {
          playerBoard[roundCounter] = "0";
        }
        document.getElementById("display2").value = value;
      }
      roundCounter++;
      break;
    case 2:
      if (playerBoard.includes(value)) {
        alert("You have already entered this number");
        roundCounter--;
      } else {
        playerBoard[2] = value;
        if (playerBoard[roundCounter] === 0) {
          playerBoard[roundCounter] = "0";
        }
        document.getElementById("display3").value = value;
      }
      roundCounter++;
      break;
    case 3:
      if (playerBoard.includes(value)) {
        alert("You have already entered this number");
        roundCounter--;
      } else {
        playerBoard[3] = value;
        if (playerBoard[roundCounter] === 0) {
          playerBoard[roundCounter] = "0";
        }
        document.getElementById("display4").value = value;
      }
      roundCounter++;
      break;
  }
}

function bullCheck() {
  let counter = 0;
  for (let i = 0; i < 4; i++) {
    if (computerBoard[i] === playerBoard[i]) {
      counter++;
    }
  }
  document.querySelector(".bull").innerText = "Bulls: " + counter;
}

function cowCheck() {
  let counter = 0;
  for (let i = 0; i < 4; i++) {
    if (
      playerBoard.includes(computerBoard[i]) &&
      computerBoard[i] != playerBoard[i]
    ) {
      counter++;
    }
  }
  document.querySelector(".cow").innerText = "Cows: " + counter;
}

function checkBoard() {
  bullCheck();
  cowCheck();
  currentPlayer.attempts++;

  if (playerBoard.toString() == computerBoard.toString()) {
    win = true;
    alert("You win with " + currentPlayer.attempts + " attempts!");

    results.push({
      name: currentPlayer.name,
      attempts: currentPlayer.attempts,
    });
    console.table(results);

    resetGame();
  }

  if (roundCounter === 4) {
    roundCounter = 0;
    addElement();
    playerBoard = [];
  }
}

function addElement() {
  const newRow = document.createElement("div");
  newRow.id = "row";
  newRow.innerHTML = `
    <div id="left">
      <input class="window" value="${playerBoard[0]}" />
      <input class="window" value="${playerBoard[1]}" />
      <input class="window" value="${playerBoard[2]}" />
      <input class="window" value="${playerBoard[3]}" />
    </div>
    <div class="right">
      <button class="go" onclick="checkBoard()">Go</button>
    </div>
  `;
  document.getElementById("rows").appendChild(newRow);
}

function resetGame() {
  computerBoard.length = 0;
  playerBoard = [];
  roundCounter = 0;
  win = false;

  generateComputerBoard();

  document.getElementById("display1").value = "";
  document.getElementById("display2").value = "";
  document.getElementById("display3").value = "";
  document.getElementById("display4").value = "";

  document.querySelector(".bull").innerText = "Bulls:";
  document.querySelector(".cow").innerText = "Cows:";

  const rowsElement = document.getElementById("rows");
  while (rowsElement.children.length > 2) {
    rowsElement.removeChild(rowsElement.lastChild);
  }

  askPlayerName();
}

function endGame() {
  if (currentPlayer.name) {
    results.push({
      name: currentPlayer.name,
      attempts: currentPlayer.attempts,
    });
  }
  alert("You ended the game!");
  console.table(results);
  window.close();
}

generateComputerBoard();
askPlayerName();
