// Debugging
// Run a script with the card game and create breakpoints in the sources tab, show them the call stack and advantages of using it
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
};

// // Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

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



// Input Validation
// Q1: What is the diff between these two lines?
'444';
444
// Q2: What can we do with the first string that we cannot do with the second and vice versa?

// Q3: What is the output of below?
Number.isNaN('hi')
// A: We will get a boolean value of false. Number.isNaN returns a boolean value.

// Q4: What are the results of these two lines in console?
444 * 'papaya';
444 * 2;

// Q5: Why do we get these values?
// A: We wrote code for a math operation that does not result in a number. The other is a number value so multiplication works fine.

var main = function (input) {
  var miles = Number(input);

  console.log('is NaN: ' + Number.isNaN(miles));

  if (Number.isNaN(Number(input))) {
    return 'sorry please enter a number.';
  }

  var kilometers = miles * 1.6;
  var myOutputValue = 'Your input in kilometers is: ' + kilometers;
  return myOutputValue;
};

// Q6: What does the above code do?
// A: Checks what the user typed to make sure they typed a number. If they didn't, let them know.

// Q7: Why do we prefer to return in our if statement rather than do else?
// A: Having a return statement there makes it easier for our logical flow - we know that only valid inputs will be considered after that line. We don't have to indent with another else and put our code inside which can make it easier to read.

// ALT ANSWER FROM CURRENT SL GUIDE: A: This "early return" code might be easier to read because the logical flow of the program doesn't progress below the condition if it's true.
// In the version with the else you have to indent the main part of the program. In general it's easier to read code that is refactored to be less indented (for instance in an extreme example you might have to nest 10 times. one condition inside another, inside another, etc.)