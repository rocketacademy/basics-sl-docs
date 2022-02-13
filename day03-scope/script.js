// Scope

// 4.2 Program Lifecycle and Scope
// So far, our code only really exists when we run the main function. After that, whatever we had has essentially just been erased. 
// If we input 1 over and over again here, we will just get 2. What if I want the previous number to be saved after I run the main function? I.E. our output value we get is saved and then added to our input again.
var main = function (input) {
  var number = 1;
  var myOutputValue = input + number;
  return myOutputValue;
};

//This is where the idea of global variables comes in. Our code above reinitialises number as 1 every time the button is clicked - both that and our myOutputValue variable are what we call 'local variables'. They are born and exist only inside of our main function, and their lifecycle ends after the main function is finished running. We can't get myOutputValue in our console after running our main function.

// Q1: Ask a student how this function works.
var papayaCount = 0;
var main = function (input) {
  papayaCount = papayaCount + 1;
  var myOutputValue = 'You have ' + papayaCount + ' papayas';
  return myOutputValue;
};
// BONUS: papayaCount = papayaCount + 1 may look confusing to the student at first. If you wish to explain in detail - you can break down how assignment works: We assign the left to be the right, but before we can do that - we will need to sort out any operations on the right hand side. Therefore, the papayaCount on the right is the current value that we have, then we add 1 to it. Then we reassign the papayaCount(which is on the left) to be equal to this new value that we have.

// Q2: What if we want our papayaCount to increase by the amount we enter as an input?
// ANS:
var main = function (input) {
  papayaCount = papayaCount + Number(input);
  var myOutputValue = 'You have ' + papayaCount + ' papayas';
  return myOutputValue;
};


// Q3: Currently, our bankroll doesn't decrease when we lose, how would you change this without touching any other lines of code?  I.E we can only add to what we have.
var bankRoll = 10;

var main = function (input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber === input) {
    bankRoll = bankRoll + 1;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};

// ANS:
var main = function (input) {
  var randomDiceNumber = rollDice();

  if (randomDiceNumber !== input) {
    bankRoll = bankRoll - 1;
  }

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  // we cannot put this here, our bankRoll will lag behind by one
  // if (randomDiceNumber !== input) {
  //   bankRoll = bankRoll - 1;
  // }
  if (randomDiceNumber === input) {
    bankRoll = bankRoll + 1;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};
// As we see here, we don't need to put the default myOutputValue of losing inside the bankroll - having the default set to loss is fine. But we do need to put the evaluation of losing before the default lose statement, since if we put it afterwards, our bankRoll will lag behind by 1. (show this to the students) This is because our output value gets a snapshot of the value of bankRoll at the time the output was defined - it does not change if bankRoll changes after that.

// 4.3 Program State for Game Modes
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

// JUSTIN - I think the qns given in the gitbook for the game modes currently are fine, nothing really to add here.