document.addEventListener('DOMContentLoaded', ()=> {

  // Card Options
  const cardArray = [
    {
      name: 'fries',
      img: 'assets/images/fries.png',
    },
    {
      name: 'fries',
      img: 'assets/images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'assets/images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'assets/images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'assets/images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'assets/images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'assets/images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'assets/images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'assets/images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'assets/images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'assets/images/pizza.png',
    },
    {
      name: 'pizza',
      img: 'assets/images/pizza.png',
    }
  ];

  // Randomize our cards array
  cardArray.sort( () => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const textInfo = document.querySelector('.textInfo');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // Create your board
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'assets/images/blank.png');
      card.setAttribute('class', 'card');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // Check for matches
  function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]) {
      textInfo.textContent = 'You found a match!';
      textInfo.setAttribute('class', 'textInfo correct');
      cards[optionOneId].setAttribute('src', 'assets/images/white.png');
      cards[optionTwoId].setAttribute('src', 'assets/images/white.png');
      cards[optionOneId].setAttribute('class', 'card found');
      cards[optionTwoId].setAttribute('class', 'card found');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'assets/images/blank.png');
      cards[optionTwoId].setAttribute('src', 'assets/images/blank.png');
      textInfo.textContent = 'Sorry, try again';
      textInfo.setAttribute('class', 'textInfo wrong');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      textInfo.textContent = 'Congratulation! You found them all!';
      textInfo.setAttribute('class', 'textInfo correct')
    }
  }

  // Flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosenId.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
})