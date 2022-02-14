// 1.3: ARRAYS
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

// Storing a series of alphabetical characters (strings)
var letters = ['a', 'b', 'c'];

// The students should note how the data is consistent and the name is clear as to what it means. There is no room for ambiguity.
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
//  0    1    2
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

// QUESTION: Given what we know above, how we can always access the last element of an array no matter what the size is?

// QUESTION: How do we change the 'e' to a 'd' in the array below?
var letters = ['a', 'b', 'c', 'e']

// QUESTION: What happens if we try to access an index that doesn't exist?

// QUESTION: How does this dice guessing game work?
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

// 3.5: LOOPING OVER AN ARRAY
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

// QUESTION: This is a sample code snippet of a phone book. Explain what this code does.
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