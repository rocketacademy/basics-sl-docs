// QUESTION 1: Copy all of the code below this question into your starter code root script.js. By only reading it (without running the code), what does it do?
var main = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);

  // QUESTION 2: Using the same program from Question 1, what is the value of outerCounter and innerCounter when the program draws the top middle fist? Use the debugger to find that value.
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // If current iteration represents a border element, draw ✊ instead.

      // QUESTION 3: Using the same program from Question 1, what is the result of each conditional statement the first time the loop runs? Use the debugger to find the value.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
      } else {
        // Add a 👍 to the current row
        myOutputValue += '👍';
      }

      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};