// 1.4: OBJECTS

// QUESTION 1: Copy `namesInPhonebook` and `numbersInPhonebook` into the Chrome Dev Tools console. What is problematic with this approach of using 2 named arrays to store names and numbers in a phonebook?
var namesInPhonebook = ['Chee Kean', 'Susan Chan', 'Kai'];
var numbersInPhonebook = ['+65 9111 1111', '+65 9222 2222', '+65 9333 3333'];

// QUESTION 2: Copy `cardDeck2` into the Chrome Dev Tools console. What will be the pseudocode for getting the numerical sum of the ranks?
var cardDeck2 = ['nine of hearts', 'ten of hearts', 'jack of hearts'];

// QUESTION 3: Copy `cardDeck3` into the Chrome Dev Tools console. Now we have 3 cards (items) in the `cardDeck` array. How do I access the second card? What if I only wanted to access its name?
var cardDeck3 = [
  {
    rank: 9,
    suit: 'hearts',
    name: 'nine'
  },
  {
    rank: 10,
    suit: 'hearts',
    name: 'ten'
  },
  {
    rank: 11,
    suit: 'hearts',
    name: 'jack'
  }
];

// QUESTION 4: Copy `cardDeck4` into the Chrome Dev Tools console. How can the suit of the first card be changed to 'diamonds'?
var cardDeck4 = [
  {
    rank: 9,
    suit: 'hearts',
    name: 'nine'
  },
  {
    rank: 10,
    suit: 'hearts',
    name: 'ten'
  },
  {
    rank: 11,
    suit: 'hearts',
    name: 'jack'
  }
];

// QUESTION 5: Copy `cardDeck5` into the Chrome Dev Tools console. Now that the first card's suit is changed to 'diamonds', I want to add a symbol key to match its suit name, ie. ⬥. How will I do it? 
var cardDeck5 = [
  {
    rank: 9,
    suit: 'diamonds',
    name: 'nine'
  },
  {
    rank: 10,
    suit: 'hearts',
    name: 'ten'
  },
  {
    rank: 11,
    suit: 'hearts',
    name: 'jack'
  }
];

// QUESTION 6: Copy all of the code below this question into the starter code home page script.js. This is a game that draws 1 card each for the player and the computer, and the highest card wins. What would need to change so that the highest card loses instead?
var deck = [
  {
    name: 'ace',
    suit: 'hearts',
    rank: 1,
  },
  {
    name: '2',
    suit: 'hearts',
    rank: 2,
  },
  {
    name: '3',
    suit: 'hearts',
    rank: 3,
  },
  {
    name: '4',
    suit: 'hearts',
    rank: 4,
  },
  {
    name: '5',
    suit: 'hearts',
    rank: 5,
  },
  {
    name: '6',
    suit: 'hearts',
    rank: 6,
  },
  {
    name: '7',
    suit: 'hearts',
    rank: 7,
  },
  {
    name: '8',
    suit: 'hearts',
    rank: 8,
  },
  {
    name: '9',
    suit: 'hearts',
    rank: 9,
  },
  {
    name: '10',
    suit: 'hearts',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'hearts',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'hearts',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'hearts',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'diamonds',
    rank: 1,
  },
  {
    name: '2',
    suit: 'diamonds',
    rank: 2,
  },
  {
    name: '3',
    suit: 'diamonds',
    rank: 3,
  },
  {
    name: '4',
    suit: 'diamonds',
    rank: 4,
  },
  {
    name: '5',
    suit: 'diamonds',
    rank: 5,
  },
  {
    name: '6',
    suit: 'diamonds',
    rank: 6,
  },
  {
    name: '7',
    suit: 'diamonds',
    rank: 7,
  },
  {
    name: '8',
    suit: 'diamonds',
    rank: 8,
  },
  {
    name: '9',
    suit: 'diamonds',
    rank: 9,
  },
  {
    name: '10',
    suit: 'diamonds',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'diamonds',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'diamonds',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'diamonds',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'clubs',
    rank: 1,
  },
  {
    name: '2',
    suit: 'clubs',
    rank: 2,
  },
  {
    name: '3',
    suit: 'clubs',
    rank: 3,
  },
  {
    name: '4',
    suit: 'clubs',
    rank: 4,
  },
  {
    name: '5',
    suit: 'clubs',
    rank: 5,
  },
  {
    name: '6',
    suit: 'clubs',
    rank: 6,
  },
  {
    name: '7',
    suit: 'clubs',
    rank: 7,
  },
  {
    name: '8',
    suit: 'clubs',
    rank: 8,
  },
  {
    name: '9',
    suit: 'clubs',
    rank: 9,
  },
  {
    name: '10',
    suit: 'clubs',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'clubs',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'clubs',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'clubs',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'spades',
    rank: 1,
  },
  {
    name: '2',
    suit: 'spades',
    rank: 2,
  },
  {
    name: '3',
    suit: 'spades',
    rank: 3,
  },
  {
    name: '4',
    suit: 'spades',
    rank: 4,
  },
  {
    name: '5',
    suit: 'spades',
    rank: 5,
  },
  {
    name: '6',
    suit: 'spades',
    rank: 6,
  },
  {
    name: '7',
    suit: 'spades',
    rank: 7,
  },
  {
    name: '8',
    suit: 'spades',
    rank: 8,
  },
  {
    name: '9',
    suit: 'spades',
    rank: 9,
  },
  {
    name: '10',
    suit: 'spades',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'spades',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'spades',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'spades',
    rank: 13,
  },
];

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var main = function (input) {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    'Computer had ' +
    computerCard.name +
    ' of ' +
    computerCard.suit +
    '. Player had ' +
    playerCard.name +
    ' of ' +
    playerCard.suit +
    '. ';

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + 'Computer wins.';
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + 'Player wins!';
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

// 3.7 CREATING OBJECTS WITH LOOPS

// QUESTION 7: Copy `deck7` into your Chrome Dev Tools console. Have a look at this original example of setting up an entire deck of cards (array of objects). What could be problematic with this approach?
var deck7 = [
  {
    name: 'ace',
    suit: 'hearts',
    rank: 1,
  },
  {
    name: '2',
    suit: 'hearts',
    rank: 2,
  },
  {
    name: '3',
    suit: 'hearts',
    rank: 3,
  },
  {
    name: '4',
    suit: 'hearts',
    rank: 4,
  },
  {
    name: '5',
    suit: 'hearts',
    rank: 5,
  },
  {
    name: '6',
    suit: 'hearts',
    rank: 6,
  },
  {
    name: '7',
    suit: 'hearts',
    rank: 7,
  },
  {
    name: '8',
    suit: 'hearts',
    rank: 8,
  },
  {
    name: '9',
    suit: 'hearts',
    rank: 9,
  },
  {
    name: '10',
    suit: 'hearts',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'hearts',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'hearts',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'hearts',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'diamonds',
    rank: 1,
  },
  {
    name: '2',
    suit: 'diamonds',
    rank: 2,
  },
  {
    name: '3',
    suit: 'diamonds',
    rank: 3,
  },
  {
    name: '4',
    suit: 'diamonds',
    rank: 4,
  },
  {
    name: '5',
    suit: 'diamonds',
    rank: 5,
  },
  {
    name: '6',
    suit: 'diamonds',
    rank: 6,
  },
  {
    name: '7',
    suit: 'diamonds',
    rank: 7,
  },
  {
    name: '8',
    suit: 'diamonds',
    rank: 8,
  },
  {
    name: '9',
    suit: 'diamonds',
    rank: 9,
  },
  {
    name: '10',
    suit: 'diamonds',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'diamonds',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'diamonds',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'diamonds',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'clubs',
    rank: 1,
  },
  {
    name: '2',
    suit: 'clubs',
    rank: 2,
  },
  {
    name: '3',
    suit: 'clubs',
    rank: 3,
  },
  {
    name: '4',
    suit: 'clubs',
    rank: 4,
  },
  {
    name: '5',
    suit: 'clubs',
    rank: 5,
  },
  {
    name: '6',
    suit: 'clubs',
    rank: 6,
  },
  {
    name: '7',
    suit: 'clubs',
    rank: 7,
  },
  {
    name: '8',
    suit: 'clubs',
    rank: 8,
  },
  {
    name: '9',
    suit: 'clubs',
    rank: 9,
  },
  {
    name: '10',
    suit: 'clubs',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'clubs',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'clubs',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'clubs',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'spades',
    rank: 1,
  },
  {
    name: '2',
    suit: 'spades',
    rank: 2,
  },
  {
    name: '3',
    suit: 'spades',
    rank: 3,
  },
  {
    name: '4',
    suit: 'spades',
    rank: 4,
  },
  {
    name: '5',
    suit: 'spades',
    rank: 5,
  },
  {
    name: '6',
    suit: 'spades',
    rank: 6,
  },
  {
    name: '7',
    suit: 'spades',
    rank: 7,
  },
  {
    name: '8',
    suit: 'spades',
    rank: 8,
  },
  {
    name: '9',
    suit: 'spades',
    rank: 9,
  },
  {
    name: '10',
    suit: 'spades',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'spades',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'spades',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'spades',
    rank: 13,
  },
];

// QUESTION 8: Copy all of the code below this question into your starter code home page script.js. The comments have been stripped from the `makeDeck` function. Have students run through the logic of `makeDeck` line by line.

var makeDeck = function () {
  var cardDeck = [];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var suitIndex = 0;
  while (suitIndex < suits.length) {
    var currentSuit = suits[suitIndex];

    var rankCounter = 1;
    while (rankCounter <= 13) {
      var cardName = rankCounter;

      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      cardDeck.push(card);

      rankCounter += 1;
    }

    suitIndex += 1;
  }

  return cardDeck;
};

var printDeck = function (deck) {
  var printedDeck = [];
  for (var i = 0; i < deck.length; i += 1) {
    var cardString = `${deck[i].name} of ${deck[i].suit}`
    printedDeck.push(cardString);
  }
  return printedDeck;
}

var main = function (input) {
  var deck = makeDeck();
  var myOutputValue = `
    <strong>This deck of cards includes:</strong>
    <br/>
    ${printDeck(deck).join(',<br/>')}
  `;
  return myOutputValue;
};

// QUESTION 9: Copy all of the code below this question into your starter code home page script.js. The `printDeck` function has been edited to show the symbol of the suit, instead of its textual name. How will we add the symbol of the suit in the `makeDeck` function, assuming its key is `symbol`? Template symbols for copying and pasting: ♥️, ♦️, ♣️, ♠️

var makeDeck = function () {
  var cardDeck = [];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var suitIndex = 0;
  while (suitIndex < suits.length) {
    var currentSuit = suits[suitIndex];

    var rankCounter = 1;
    while (rankCounter <= 13) {
      var cardName = rankCounter;

      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      cardDeck.push(card);

      rankCounter += 1;
    }

    suitIndex += 1;
  }

  return cardDeck;
};

var printDeck = function (deck) {
  var printedDeck = [];
  for (var i = 0; i < deck.length; i += 1) {
    var cardString = `${deck[i].name} of ${deck[i].symbol}`
    printedDeck.push(cardString);
  }
  return printedDeck;
}

var main = function (input) {
  var deck = makeDeck();
  var myOutputValue = `
    <strong>This deck of cards includes:</strong>
    <br/>
    ${printDeck(deck).join(',<br/>')}
  `;
  return myOutputValue;
};