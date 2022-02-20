# Day 7: Objects

## Overview

In general, objects represent any tabular data - rows in a spreadsheet, names in an address book - most data in the real world that computer programs deal with has this tabular structure.

## [1.4 Objects](https://codingbasics.rocketacademy.co/modules/1-data-types-structures-and-manipulations/1.4-objects)

### Overview

With objects we get to abstract and create our own definitions of what one value / variable / piece of data can be. In the case of our card example, we can choose to have integers **and** strings make up the definition of one card. We're creating an abstraction of what a card is, and also including data in our card that we'll need to calculate and display things. The exercise of defining object keys and data types is fundamentally an exercise in abstraction and encapsulation.

Students will sometimes be confused about the idea of "holding" different types of data in a single variable value, that is, they won't be sure when to use an array or object. Considering that the previous data structure taught was arrays, it will be fair to start the class doing a comparison of both data structures.

Sometimes assignment into a given key can look confusing: `card.rank = newRank;` or assigning a new key: `card.newKey = 99;` It may not be totally clear to students that square brackets in objects are different from square brackets for arrays.

### Code Examples and Discussion Questions

**Question 1:** Copy `namesInPhonebook` and `numbersInPhonebook` into the Chrome Dev Tools console. What is problematic with this approach of using 2 named arrays to store names and numbers in a phonebook?

**Answer 1:** This is where we can start the class beginning to compare arrays and objects for storing sets of data. The problems are as follows:

* The indices and information for both arrays have to be aligned to retrieve an accurate set of data. To get a set of information, we have to get the data from 2 identical indices from 2 different arrays.
* Since alignment is important, there is less room for human error for adding and removing from the arrays. We have to add to both arrays and remove from both so that the data is consistent.
* What if we only want to remove a name but keep the number, or vice versa? It will be simpler using objects to continue keeping a set of data with 1 array (ie. an array of objects), while removing just a key-value pair in said set of data.

**Question 2:** Copy `cardDeck2` into the Chrome Dev Tools console. What will be the pseudocode for getting the numerical sum of the ranks?

**Answer 2:** The actual code example may require string splitting using the `.split` method (see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)), which the students may not be fully comfortable with. It is okay to stick to asking for a layman pseudocode logic for how they will achieve this.

```
// loop over the array
  // break apart the string to get the first word
  // evaluate the first word of string (eg. 'nine')
  // if it's "ace" add the number 1, 
  // if it's "two" add the number 2 etc, until 13 for 'king'
```

It will be useful to point out that this process can be tedious for arrays, and the alternative (if sticking to arrays) is to use numbers. However, when storing numbers (eg. `var cardDeck2 = [9, 10, 11];`), we start to lose context of the suits for each card.

Sets in the form of JavaScript objects will be more applicable for storing a set (deck) of cards, because we can easily store multiple data types with different key-value pairs - strings for suits, numbers for ranks.

As SLs, we can then demonstrate the way to set up a deck, starting with just 1 card:

```
var card = {
  rank: 9,
  suit: 'hearts',
  name: 'nine'
};
```

When we begin to store a list of sets, like a preliminary deck or hand of cards, we can combine what we know about arrays and objects. We will set up an array of objects:

```
var cardDeck2 = [
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
```

**Question 3:** Copy `cardDeck3` into the Chrome Dev Tools console. Now we have 3 cards (items) in the `cardDeck` array. How do I access the second card? What if I only wanted to access its name?

**Answer 3:** For the first question we are still revising item retrieval from an array: we can retrieve the second card (assuming we are not looking at any specific key-value pairs) by typing in `cardDeck3[1];` in the browser console. Students may forget that array indices count from 0, and may attempt to answer `cardDeck3[2];` to retrieve the second card.

We progress to testing the understanding of key-value retrieval in objects by asking for a specific value. In this case, if we are retrieving the name of the second card, we can use any of the following:

```
cardDeck3[1].name;
cardDeck3[1]['name'];
```
As SLs doing the demonstration of using the square bracket notation for value retrieval, do note that we have to wrap the key as a string. `cardDeck[1][name]` is going to work differently from `cardDeck[1]['name']`. You can refer to the differences below:

```
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

// set up name variable for wrong use example
var name = 'suit';

// prints 'hearts' instead, because
// name is a variable containing the string
// 'suit'. by using name not wrapped as a
// string, JavaScript thinks you are accessing
// the variable instead of object key.
console.log(cardDeck3[1][name]);

// correct use of square bracket notation,
// prints 'ten' correctly
console.log(cardDeck3[1]['name']);
```

**Question 4:** Copy `cardDeck4` into the Chrome Dev Tools console. How can the suit of the first card be changed to 'diamonds'?

**Answer 4:** `cardDeck4[0].suit = 'diamonds';`

**Question 5:** Copy `cardDeck5` into the Chrome Dev Tools console. Now that the first card's suit is changed to 'diamonds', I want to add a symbol key to match its suit name, ie. ⬥. How will I do it? 

**Answer 5:** `cardDeck5[0].symbol = '⬥';`

**Question 6:** Copy all of the code below this question into the starter code home page script.js. This is a game that draws 1 card each for the player and the computer, and the highest card wins. What would need to change so that the highest card ***loses*** instead?

**Answer 6:** Reverse the comparison operators. Specifically:

```
// Compare computer and player cards by rank attribute
// If computer card rank is LESS than player card rank, computer wins
if (computerCard.rank < playerCard.rank) {
  // Add conditional-dependent text to the output string
  myOutputValue = myOutputValue + 'Computer wins.';
  // Else if computer card rank is GREATER than player card rank, player wins
} else if (computerCard.rank > playerCard.rank) {
  myOutputValue = myOutputValue + 'Player wins!';
  // Otherwise (i.e. ranks are equal), it's a tie
} else {
  myOutputValue = myOutputValue + "It's a tie.";
}
```

## [3.7 Creating Objects with Loops](https://codingbasics.rocketacademy.co/modules/3-logic-and-control-flow/3.7-creating-objects-with-loops)

### Overview

This module ties together everything we've learned to create a data structure that should feel intuitive to the students - a deck of cards. The main concept is the connection of the idea of the deck pattern and the syntax choices that have to be made in order to get the code to run.

The `makeDeck` function takes the specific patterns in a deck of cards- 4 repeating suits, 15 ranked numbers, and the special exception of face card names instead of numbers- and turns them into loops, conditionals and arrays of objects.

This idea of connecting together a pattern and data representation (a deck of cards) and JavaScript data structures and syntax (arrays, object, conditionals and loops) is at the heart of coding and writing algorithms. In this example code we've created a card deck creation algorithm. Certainly there are many more possible card deck creation algorithms that will give us the same result.

Remind the students that in order to move forward with the Blackjack project, it's not strictly necessary to implement the `makeDeck` function or write it from scratch. Making a deck is just a demonstration of how to put together all the syntaxes we've seen so far.

### Code Examples and Discussion Questions

**Question 7:** Copy `deck7` into your Chrome Dev Tools console. Have a look at this original example of setting up an entire deck of cards (array of objects). What could be problematic with this approach?

**Answer 7:** This approach isn't logically wrong, but it can be tedious. As SLs, we may have noticed copying and pasting this code into the Chrome Dev Tools console already require so much scrolling!

Card generation can be a lot simpler when we know there are patterns to what constitutes a card in our program. In its most basic, a card has to have a name, a suit, and a rank. 

We know that the rank can essentially be a counter starting from 1 and ending possibly at 13 (13 cards for each of the 4 suits), thus a loop will be useful for automating a deck's creation. The name is just a string version of the rank, and we can extrapolate this with a few conditions for matching a numbered rank to a face card (eg. Jack) for instance. 

Lastly, we know there are only 4 suits each card. Thus, some loop nesting (a loop that runs 4 times) will exist to create the 4 suits for each card.

**Question 8:** Copy all of the code below this question into your starter code home page script.js. The comments have been stripped from the `makeDeck` function. Have students run through the logic of `makeDeck` line by line.

**Answer 8:** An alternative approach to demonstrating this `makeDeck` function is re-creating this `makeDeck` function from scratch with your students. This depends on the time you have before starting the in-class exercises.

The key learning points from this discussion question:

* We firstly identify what constitutes a card: a name, a rank, and a suit.
* Then we define a deck: 4 suits of cards, with 13 cards per suit. This makes a deck a set of 52 cards.
* When we want to create this with a loop, we may nest loops. The parent loop can start with suits, and the 13 cards being the child loop, or vice versa.
* Card suits can be stored as arrays, so we need only start from index 0, and count to the length of the array. This approach is useful should we want to add more suits.
* Card ranks can be visualised as a loop counter, given that they go from 1 (for Aces) to 13 (for Kings). Do note that we will want the counter to start from `1` in this case, instead of their usual `0`.
* Card names should largely be string versions of their ranks. There are exceptions, such as Aces, Jacks, Queens and Kings. If-else conditions can be set up for these instances, to match their ranks to their names.

**Question 9:** Copy all of the code below this question into your starter code home page script.js. The `printDeck` function has been edited to show the symbol of the suit, instead of its textual name. How will we add the symbol of the suit in the `makeDeck` function, assuming its key is `symbol`? Template symbols for copying and pasting: ♥️, ♦️, ♣️, ♠️

**Answer 9:** A sample solution with modifications to `makeDeck`:

```
var makeDeck = function () {
  var cardDeck = [];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  // just like suits, we can set up symbols as an array
  var symbols = ['♥️', '♦️', '♣️', '♠️'];

  var suitIndex = 0;
  while (suitIndex < suits.length) {
    var currentSuit = suits[suitIndex];
    // since symbols is ordered (index number) like suits, 
    // we can continue using suitIndex to access the correct symbol
    var currentSymbol = symbols[suitIndex]

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
        // remember to initialise the symbol key in card
        symbol: currentSymbol
      };

      cardDeck.push(card);

      rankCounter += 1;
    }

    suitIndex += 1;
  }

  return cardDeck;
};
```

## In-Class Material

### Link to Exercises

[Pick one of: Moar Cards, or Chat Bot (first 30 minutes)](https://codingbasics.rocketacademy.co/coursework/in-class-exercises/day-7-moar-cards)

[Redux: Beat That! (last 30 minutes)](https://codingbasics.rocketacademy.co/coursework/projects/project-2-beat-that)

## Wrap-Up / Look Ahead

The Document Object Model (DOM) and manipulating it are intended to connect back together JavaScript code that would usually be written outside the context of the starter code. It ties together the students' fundamental understanding of HTML and CSS, together with the logic written in JavaScript.

It also details how the starter code works.
