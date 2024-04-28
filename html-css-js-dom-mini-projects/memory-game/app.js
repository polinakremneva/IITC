const gameBoard = document.querySelector(".game-board");
const restartButton = document.getElementById("restart");

const attemptsDisplay = document.createElement("div"); 
attemptsDisplay.id = "attempts"; 
document.body.insertBefore(attemptsDisplay, gameBoard);




const icons = [
  {
    name: "0",
    img: "images/0.jpg",
  },
  {
    name: "1",
    img: "images/1.jpg",
  },
  {
    name: "2",
    img: "images/2.jpg",
  },
  {
    name: "3",
    img: "images/3.jpg",
  },
  {
    name: "4",
    img: "images/4.jpg",
  },
  {
    name: "5",
    img: "images/5.jpg",
  },
  {
    name: "6",
    img: "images/6.jpg",
  },
  {
    name: "7",
    img: "images/7.jpg",
  },
  {
    name: "8",
    img: "images/8.jpg",
  },
  {
    name: "9",
    img: "images/9.jpg",
  },
  {
    name: "0",
    img: "images/0.jpg",
  },
  {
    name: "1",
    img: "images/1.jpg",
  },
  {
    name: "2",
    img: "images/2.jpg",
  },
  {
    name: "3",
    img: "images/3.jpg",
  },
  {
    name: "4",
    img: "images/4.jpg",
  },
  {
    name: "5",
    img: "images/5.jpg",
  },
  {
    name: "6",
    img: "images/6.jpg",
  },
  {
    name: "7",
    img: "images/7.jpg",
  },
  {
    name: "8",
    img: "images/8.jpg",
  },
  {
    name: "9",
    img: "images/9.jpg",
  },
];

function shuffle(icons) {
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  return icons;
}

shuffle(icons);

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let attempts = 0;
function updateAttemptsDisplay() {
    attemptsDisplay.textContent = `Attempts: ${attempts}`; 
  }

function createBoard() {
  gameBoard.innerHTML = "";
  for (let i = 0; i < icons.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/backgr.jpeg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  }
  attempts = 0; 
  updateAttemptsDisplay(); 
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(icons[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", icons[cardId].img);
  if (cardsChosen.length === 2) {
    attempts++; 
    updateAttemptsDisplay(); 
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const [firstCard, secondCard] = cardsChosen;
  const [firstCardId, secondCardId] = cardsChosenId;

  if (firstCard === secondCard && firstCardId !== secondCardId) {
    cardsWon.push(firstCardId, secondCardId);
    //if win so no click
    document
      .querySelector('img[data-id="' + firstCardId + '"]')
      .removeEventListener("click", flipCard);
    document
      .querySelector('img[data-id="' + secondCardId + '"]')
      .removeEventListener("click", flipCard);
  } else {
    // if not even the flip back
    document
      .querySelector('img[data-id="' + firstCardId + '"]')
      .setAttribute("src", "images/backgr.jpeg");
    document
      .querySelector('img[data-id="' + secondCardId + '"]')
      .setAttribute("src", "images/backgr.jpeg");
  }

  cardsChosen = []; // clean chosen cards
  cardsChosenId = [];

  if (cardsWon.length === icons.length) {
    alert("You win!");
  }
}

// button to start
restartButton.addEventListener("click", () => {
  cardsWon = [];
  shuffle(icons);
  createBoard();
});

createBoard();
