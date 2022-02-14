// 2.3.2: FUNCTIONS II
// We can have more than 1 parameter in a function.
var add = function(a,b){
    console.log(`this is a: ${a}`)
    console.log(`this is b: ${b}`)
    return a + b;
};
// We can also store the result (return value) of a function execution
// in a variable.
var result = add(1,2);
// QUESTION: What will `console.log` results be for the following 2 lines?
var result2 = add(1,2);
var result3 = add(2,1);

// Functions do not always require parameters or arguments
// to have an output or return value.
var blah = function () {
  console.log ('papaya');
  return 1 + 2;
}

// QUESTION: What will `addMultiple` return? Why?
var addMultiple = function(input){
    var myOutputValue = add(1,add(2,3));
    return myOutputValue;
};

// 2.4 ERRORS
// QUESTION: What is the difference between a compile-time error and a run-time error?
// Compile-time Error
var kilometersToMiles = function distanceInKilometers) {
  var distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};
// Run-Time Syntax Errors
var myOutputValue = 'hello world'();

// 3.2 CONDITIONALS
// QUESTION: How would we get `"hello friend"` to be printed?
var main = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "hello friend";
  }
  // return myOutputValue as output
  return myOutputValue;
};

// QUESTION: What is the string printed by this function? Should I get `"you entered the number 3."` or `"you may or may not have entered the number 3."`?
var main = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";

  if (input === 3) {
    myOutputValue = "you entered the number 3.";
  }

  if (input == 3) {
    myOutputValue = "you may or may not have entered the number 3.";
  }

  // return myOutputValue as output
  return myOutputValue;
};

// 3.1 INTRO TO LOGIC AND CONTROL FLOW (CONTINUED) 
// QUESTION: How would we change this such that we get a 20 sided dice instead?
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
// ANS: Change the multiplication in randomDecimal to be * 20 instead.
var randomDecimal = Math.random() * 20;

// 3.3 BOOLEAN OPERATORS
// QUESTION: If I want to turn the random dice roll app into a dice game, I will change the the logic in the `main` function to incorporate winning conditions. What is the winning condition here?
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  var myOutputValue = 'You just rolled a ' + randomDiceNumber + ', and your guess is ' + input + '. You lost!';

  if (
    randomDiceNumber + 1 == input ||
    randomDiceNumber == input ||
    randomDiceNumber - 1 == input
  ) {
    myOutputValue = 'You just rolled a ' + randomDiceNumber + ', and your guess is ' + input + '. You win!';
  }

  // Return and print output.
  return myOutputValue;
};

// QUESTION: The following program allows the user to win only if the input matches both random dice numbers. How would I add a third dice to the below function and ensure that the user wins if the input matches all 3 dice numbers?
var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches both random dice numbers, output value is "you win".
  if (randomDiceNumber1 == input && randomDiceNumber2 == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// QUESTION: How will I flip the conditions of the code before (or below), such that the user wins if the input does not match the 3 dice numbers?
var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var randomDiceNumber3 = rollDice();
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches all 3 random dice numbers, output value is "you win".
  if (randomDiceNumber1 == input && randomDiceNumber2 == input && randomDiceNumber3 == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// ANS:
var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var randomDiceNumber3 = rollDice();
  var myOutputValue = "you lose";
  // change === to !==
  if (randomDiceNumber1 !== input && randomDiceNumber2 !== input && randomDiceNumber3 !== input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// Q12: How do we always get snake eyes here? There are two ways, one that modifies the main function and the other that modifies the rollDice function.

// MAIN ANS: This works... but what if we still want to use our rollDice function and not touch our main?
var main = function (input) {
  var randomDiceNumber1 = 1;
  var randomDiceNumber2 = 1;
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches both random dice numbers, output value is "you win".
  if (
    randomDiceNumber1 == input &&
    randomDiceNumber2 == input &&
    !(randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// ROLLDICE ANS:
var rollDice = function () {
  return 1;
  // Note how everything below is ignored after a return statement, now we just need to take out the above line and everything is back to normal with minimal effort!
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

