// data base
const computerBoard = [];
let playerBoard = [];
let roundCounter = 0;
win = false;
// flow
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
          playerBoard[roundCounter] = "0"; r
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
  if (playerBoard.toString() === computerBoard.toString()) {
    win = true;
    alert("You win!");
  }
  if (roundCounter === 4) {
    roundCounter = 0;
    addElement();
  }
}
function addElement() {
  const newRow = document.createElement("div");
  newRow.id = "row";
  newRow.innerHTML = `
    <div id="left">
      <input class="window" value="${playerBoard[0] || ""}" />
      <input class="window" value="${playerBoard[1] || ""}" />
      <input class="window" value="${playerBoard[2] || ""}" />
      <input class="window" value="${playerBoard[3] || ""}" />
    </div>
    <div class="right">
      <button onclick="checkBoard()">Go</button>
    </div>
  `;
  document.getElementById("rows").appendChild(newRow);
}

generateComputerBoard();
