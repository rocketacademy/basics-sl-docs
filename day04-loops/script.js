// 3.4 LOOPS
// QUESTION 1: Copy and paste `counter` and the loop below into your Chrome Dev Tools console. What does the code below do?
var counter = 0;
while (counter < 10) {
  console.log("hello " + counter);
  counter = counter + 1;
}

// QUESTION 2: Copy and paste `counter2` and the loop below into your Chrome Dev Tools console. How do we change the loop so that `"hello 99"` is the last output we see logged?
var counter2 = 0;
while (counter2 < 10) {
  console.log("hello " + counter2);
  counter2 = counter2 + 1;
}

// QUESTION 3: Copy and paste `counter3` and the loop below into your Chrome Dev Tools console. What if we set the starting value of `counter3` to 2 instead of 0? What happens if the developer types in a value above 2?
var counter3 = 0;
while (counter3 < 10) {
  console.log("hello " + counter3);
  counter3 = counter3 + 1;
}

// QUESTION 4: Copy and paste `counter4` and the loop below into your Chrome Dev Tools console. What if we changed `counter4` to start from 10?
var counter4 = 0;
while (counter4 < 10) {
  console.log("hello " + counter4);
  counter4 = counter4 + 1;
}

// QUESTION 5: Copy and paste `counter5` and the loop below into your Chrome Dev Tools console. What if we swapped the positions of the `console.log` and the `counter5 = counter5 + 1`?
var counter5 = 0;
while (counter5 < 10) {
  console.log("hello " + counter5);
  counter5 = counter5 + 1;
}

// QUESTION 6: Copy and paste `counter6` and the loop below into your Chrome Dev Tools console. What if our loop condition is like so: `while (counter6 <= 10)`? Will there be changes from the original behaviour?
var counter6 = 0;
while (counter6 < 10) {
  console.log("hello " + counter6);
  counter6 = counter6 + 1;
}

// QUESTION 7: Copy and paste `counter7` and the loop below into your Chrome Dev Tools console. What happens if we remove the line that increments `counter7` in the `while` loop?
var counter7 = 0;
while (counter7 < 10) {
  console.log("hello " + counter7);
  counter7 = counter7 + 1;
}

// QUESTION 8: Copy and paste `yesNoMain` below this question into your Chrome Dev Tools console. What does this `yesNoMain` function do?
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

// QUESTION 9: Copy and paste `yesNoMain2` below this question into your Chrome Dev Tools console. What does this `yesNoMain2` function do?
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

// QUESTION 10: Copy `rollDice`, `counter10`, and the loop below this question into your Chrome Dev Tools console. Can we call a function inside a loop?
var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var counter10 = 0;
while (counter10 < 10) {
  console.log("You just rolled a " + rollDice());
  counter10 = counter10 + 1;
}