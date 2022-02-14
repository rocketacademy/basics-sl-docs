// Loops

// 3.4 Loops

// QUESTION: What does the code below do?
var counter = 0;
while (counter < 10) {
  console.log("hello " + counter);
  counter = counter + 1;
}

// QUESTION: For the same program, how do we change the loop so that `"hello 99"` is the last output we see logged?

// QUESTION: For the original program (with `while (counter < 10)`), what if we set the starting value of `counter` to 2 instead of 0? What happens if the user types in a value above 2?

// QUESTION: For the original program (with `while (counter < 10)`), what if we changed counter to start from 10?

// QUESTION: For the original program (with `while (counter < 10)`), what if we swapped the positions of the console.log and the counter = counter + 1?

// QUESTION: What if our loop condition is like so: `while (counter <= 10)`? Will there be changes from the original behaviour?

// QUESTION: What happens if we remove the line that increments `counter` in the `while` loop?

// QUESTION: What does this `yesNoMain` function do?
var yesNoMain = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    if (counter < 5) {
      myOutputValue = myOutputValue + "yes";
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }
  return myOutputValue;
};

// QUESTION: What does this `yesNoMain2` function do?
var yesNoMain2 = function (input) {
  var myOutputValue = "";

  var counter = 0;
  while (counter < input) {
    if (counter % 2 === 0) {
      myOutputValue = myOutputValue + "yes";
      // Otherwise, add "no" to output
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }

  return myOutputValue;
};

// QUESTION: Can we call a function inside a loop?
var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var counter = 0;
while (counter < 10) {
  console.log("You just rolled a " + rollDice);
  counter = counter + 1;
}