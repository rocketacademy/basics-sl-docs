// 1.3: Arrays

// So we can store a piece of data (e.g. a string or number) inside a variable. What if we have a lot of data we wish to store inside variables?
// Example, temperature over a day
var temp1 = 37.1;
var temp2 = 36.3;
var temp3 = 37.3;
var temp4 = 36.7;
var temp5 = 36.9;
var temp6 = 36.8;
var temp7 = 37.0;
// and so on...
// We start to see how inefficient this is.

// We can use a single variable to store an array of data
var temperatures = [37.1, 36.3, 37.3, 36.7, 36.9, 36.8, 37.0]

// BONUS TRIVIA
// The maximum size of an array (how many pieces of seperate data it can store) is around 2^32-1 = 4.29 billion elements. Obviously, we won't ever want to get to that number since it will lag out our computer. https://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript

// What should we store inside an array?
var letters = ['a', 'b', 'c'];
// Q1: Can I only store 1 data type at a time?
// Q2: How do I change array to be ['a', 'b', 'c', 'd']?

// Q3: How we would change an element given its index?
// Example: change the below array to be correct. 'e' should be 'd'
var letters = ['a', 'b', 'c', 'e']
// ANS: letters[3] = 'd' or letters[letters.length - 1] = 'd'


var daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
var letters = ['a', 'b', 'c'];
// The students should note how the data is consistent and the name is clear as to what it means. There is no room for ambiguity.

// Types of arrays

// Static Length with Static Data
// They will most likely never change. We only read from them and will most likely edit in any way
// Example: Our daysOfTheWeek array most likely will never have a day added or removed from it
var daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Static Length with Dynamic Data
// Arrays that will stay the same length, but the data inside may change
// Example: daily Average of temperatures a week will always give 7 elements of data in an array, but the data may be different across different weeks
var dailyAverageTemperatureInPastWeek = [30, 32, 29, 34, 36, 38, 32];

// Dynamic Length with Dynamic Data
// Arrays that will change length as elements are added or removed from it;
// Example: A running record of dice rolls or guesses.
var winningDiceGuesses = [3, 4, 2, 1, 4];

// Array Properties
// Position
// We access a single element inside an array using its position - which we call an index. The syntax is arrayName[index]. We 
// REMEMBER TO STRESS THAT ARRAYS ARE ZERO-INDEXED. The first element's index is not 1 but 0.
  0    1    2
['a', 'b', 'c']

var daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
daysOfTheWeek[0]; // gives us Monday.
daysOfTheWeek[1]; // gives us Tuesday.

// We can get the length of an array through arrayName.length - this is a method which all arrays have access to.
daysOfTheWeek.length // gives us 7

// Q4: Given what we know above, ask a student how we can always access the last element of an array no matter what the size is?
// ANS: arrayName[arrayName.length - 1], you can use daysOfTheWeek as an example and show it in console.

// Q5: What happens if we try to access an index that doesn't exist?
// ANS: undefined. Show it in console.

// Q6: Ask why we would normally use letters[letters.length - 1] over letters[3] to access the last index??
// ANS: We may not always be able to know the length of letters or any array with dynamic length at the time we execute the code. The length of the array minus 1 is the most consistent way. What if the letters array was longer or shorter?

// Adding and removing elements
// We can append or remove elements from an array using methods known as pop or push. We access those methods similar to how we access length.
// Demonstrate using letters array, popping and pushing. Show the students how we only are affecting the rightmost side of the array and not the leftmost side.

// Q7: What does the below function do?
var guesses = [];
var main = function (input) {
  guesses.push(input);
  var randomDiceNumber = rollDice();
  var myOutputValue = 'You lose. Your guesses: ' + guesses;
  if (randomDiceNumber == input) {
    myOutputValue = 'You win. Your guesses: ' + guesses;
  }
  return myOutputValue;
};

// ANS: Pseudo coded code below
var guesses = [];
var main = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);
  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = 'You lose. Your guesses: ' + guesses;
  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = 'You win. Your guesses: ' + guesses;
  }
  // Return output value.
  return myOutputValue;
};

// Q8: What does this function do? What kind of shape do we expect with a certain input (e.g 4)?
var main = function (input) {
  var myOutputValue = '';
  var rowCounter = 0;
  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + 'x';
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }
  return myOutputValue;
};

// ANS: Pseudo coded code below
var main = function (input) {
  var myOutputValue = '';
  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + 'x';
      columnCounter = columnCounter + 1;
    }
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};


// Using the length of an array, we can simply loop over the elements of an array.
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];

var main = function (input) {
  var myOutputValue = '';
  var counter = 0;

  while (counter < letters.length) {
    console.log(letters[counter]);
    myOutputValue = myOutputValue + 'yes';
    counter = counter + 1;
  }
  return myOutputValue;
};

// Q9: Explain what this function does
var names = [];
var main = function (input) {
  var found = false;
  var index = 0;
  while (index < names.length) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
    index = index + 1;
  }

  console.log(found)
  if (!found) {
    names.push(input);
  }

  var myOutputValue = 'All names: ' + names;
  return myOutputValue;
};

// Q10: Pseudocode version below
var main = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;
  
  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;
  while (index < names.length) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
    index = index + 1;
  }

  console.log(found)
  // If no duplicate name was found, add the input name to the names array 
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = 'All names: ' + names;
  return myOutputValue;
};