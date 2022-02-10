// Debugging and Control Flow

// 2.4 Debugging

// Compile-time syntax issues
// show this in codesandbox, the students should note the red underlines.
// Even before our code runs, the errors are detected.
var kilometersToMiles = function distanceInKilometers) {
  var distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};

// Run-Time Syntax Errors
// run this
var myOutputValue = 'hello world'();
//

// 3.1 Intro to Control Flow

// Right now, our code in our functions run line-by-line. That's fine, but what if we want to change the output drastically depending on the input given? How would our code recognise that only if given a certain input, a certain block of code runs?
// We use conditional statements to introduce control flow. Now, we can make our code more flexible and decide how inputs dictate what runs.

// 3.2 Conditionals

// Q1: Why do we use '===' instead of '=' in our if statement?
// ANS: We used '=' before to "assign the left hand side to what is on the right hand side", not as the mathematical equals we used in school. In Javascript, we need to use '===' to tell the computer that we wish to evaluate if the left hand side is equal to the right hand side.

// Q2: What would the value of 1 + 2 === 3 be? What about 1 + 1 === 3?
// ANS: We would get true and false respectively. Up till now, we were introduced to 2 data types - numbers and strings. Now, we have a third data type called 'Boolean'. There are only two boolean values - true or false. Booleans are essential to our next concept: Conditionals and control flow.


// Q3: How would we get 'hello friend' to appear as our output?
var main = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input === "palatable papaya") {
    myOutputValue = "hello friend";
  }
  // return myOutputValue as output
  return myOutputValue;
};

// Ignore the code below, apparently input validation is pushed all the way to Day 9? But I think the typecasting is at least something that should be mentioned since the students may face this issue - especially if we now use ES6 syntax.

// // Q4: How would we change it such that if we input '3', we get hello friend?
// var main = function (input) {
//   // Set a default value for myOutputValue
//   var myOutputValue = "hello world";
//   // If input is our secret phrase, change the value of myOutputValue
//   if (input === "3") {
//     myOutputValue = "hello friend";
//   }
//   // return myOutputValue as output
//   return myOutputValue;
// };

// // Note that students may put 3 as opposed to "3". Show them that we still get the wrong input. The computer doesn't automatically recognise that 3 was meant to be a number rather than just a string.

// // Q5: If we input a number here, we get a concatenation, as we have learnt yesterday that a string plus a number gives us a concatenation. How would we fix this such that mathematical operations work here? (We do not have to care about what happens when we input a string for now)
// var main = function (input) {
//   var myOutputValue = `${input} + 1 = ${input + 1}`;
//   return myOutputValue;
// };
// // SAMPLE ANS:
// var main = function (input) {
//   var myOutputValue = `${input} + 1 = ${Number(input) + 1}`;
//   return myOutputValue;
// };





// We learnt last lesson that we can call functions within functions. Introduce the dice game to them.

// Q6: How would we change this such that we get a 20 sided dice instead?
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

// 3.3 Boolean Operators

// JUSTIN - We can stick to what is in the SL Guide for now, I don't have anything to add on atm. I just changed the equality operators to ES6 here just in case.

// Q7: What would be the pseudocode for the following code?
if (
  randomDiceNumber + 1 === input ||
  randomDiceNumber === input ||
  randomDiceNumber - 1 === input
) {
  myOutputValue = "you win";
}
// SAMPLE ANS: If the input is either equal to or one off from the random dice number, the user wins.

// Q8: If I rearranged the order of the checks within my parenthesis, would anything change?
// ANS: No. The order does not matter. Any of the statements can be true in order for the condition block to run.

var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = "you lose";

  // If input matches randomDiceNumber, update output.
  var didUserWin = input === randomDiceNumber;

  console.log("boolean operation result: " + didUserWin);

  if (didUserWin) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};
// Q9: What is the difference between the above code and the original dice game example?

// Q10: How would I add a third dice to the below function?
var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches both random dice numbers, output value is "you win".
  if (randomDiceNumber1 === input && randomDiceNumber2 === input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};
// ANS
var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var randomDiceNumber3 = rollDice();
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches all 3 dice numbers, output value is "you win".
  if (randomDiceNumber1 === input && randomDiceNumber2 === input && randomDiceNumber3 === input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// Q11: Given the code above, how would I make it so that I win if I didn't guess correctly?

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

