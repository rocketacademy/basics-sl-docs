// 4.2 PROGRAM LIFECYCLE AND SCOPE
// QUESTION: In the following function, it adds our input to `someNumber`. However, if we input `1` over and over again, we will keep getting `2` as the output. How do we change or move the code around such that the output increments everytime we input `1`? 
var main = function (input) {
  var someNumber = 1;
  // cast input into a number, otherwise it will
  // be a string and this becomes a string concat operation
  var myOutputValue = Number(input) + number;
  return myOutputValue;
};

// QUESTION: What does the `main` function below do?
var papayaCount = 0;
var main = function (input) {
  papayaCount = papayaCount + 1;
  var myOutputValue = 'You have ' + papayaCount + ' papayas';
  return myOutputValue;
};

// QUESTION: The code below is a dice game with a betting element. Our `bankRoll` increases when we win. How will you change the logic such that our `bankRoll` decreases when we lose?
var bankRoll = 10;

var main = function (input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};

// 4.3 PROGRAM STATE FOR GAME MODES
// QUESTION: When we run the program below and only click Submit (don't type anything), what appears in the grey box? Which part of the code runs?
var mode = 'green';

var main = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

// QUESTION: For the same program, if `bluemode` is typed in (and Submit clicked), what gets displayed in the grey box? Which lines of code run?

// QUESTION: For the same program, what happens if 'blue' is typed in and submitted?