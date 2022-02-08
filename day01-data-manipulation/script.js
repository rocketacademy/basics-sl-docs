// 1.1: Basic Operations
2 + 2;
4 - 2;

// For multiplication, the students need to remember we can't use 'x' because our computer thinks that x is a variable.
4 x 2; // This returns unexpected identifier in the console - which refers to x
4 * 2;

// For division, % is modulus - which gives us a positive remainder instead of division
5 % 2; // gives us 1, 5 - 2 - 2 gives us a remainder of 1
5 / 2; // gives us 2.5

// 1.2: Variables
var pi = 3.14;
var radius = 4;
var area = pi * radius * radius;
// We use variables to store data(can also be a result of a calculation as seen above)
// The students can think of it as a box, the name of the variable is a label on the box that allows us to identify it easily, and the box stores data.

// Remember to stress the importance of variable naming.
// ASK A STUDENT: if they were to look at both statements below without any context beforehand, how would they feel as opposed to var area = pi * radius * radius? Now imagine if there were 500 lines of poorly named variables.
var area = 3.14 * 4 * 4;
var a = x * y * y;

// Enforce camelCasing, standardization is important to make sure people can understand your code as easily as possible. This is one of the reasons why we emphasize convention
var areaOfCircle = 1; // correct
var AreaOfCircle = 1; // incorrect
var areaofcircle = 1; // incorrect, harder to make out the words (e.g. thisIsANameOfAFunction vs thisisanameofafunction)

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
// BAD EXAMPLE
var myValues = [23, 'rocks', 0.345, 'awesome']; // This is technically correct (javascript allows different data types to exist in the same array or data collection)
// But just like the naming of variables - what kind of data we store and how we name it is of upmost importance. Our above statement doesn't seem to make much sense.
// Arrays Only Store 1 "Kind" of Data at a Time - given that we only have one name we can give to an array as a variable, the data that falls in it must be all related through what we have named the array as.

// GOOD EXAMPLES
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

// ASK A STUDENT: Given what we know above, ask a student how we can always access the last element of an array no matter what the size is?
// ANS: arrayName[arrayName.length - 1], you can use daysOfTheWeek as an example and show it in console.

// ASK A STUDENT: What happens if we try to access an index that doesn't exist?
// ANS: undefined. Show it in console.

// ASK A STUDENT: How we would change an element given its index?
// Example: change the below array to be correct. 'e' should be 'd'
var letters = ['a', 'b', 'c', 'e']
// ANS: letters[3] = 'd' or letters[letters.length - 1] = 'd'

// BONUS: Ask why we would normally use letters[letters.length - 1] over letters[3] to access the last index??
// ANS: We may not always be able to know the length of letters or any array with dynamic length at the time we execute the code. The length of the array minus 1 is the most consistent way. What if the letters array was longer or shorter?

// Adding and removing elements
// We can append or remove elements from an array using methods known as pop or push. We access those methods similar to how we access length.
// Demonstrate using letters array, popping and pushing. Show the students how we only are affecting the rightmost side of the array and not the leftmost side.

// 1.4: Objects

// While arrays are great for storing multiple single-data elements like numbers or days of the week or letters, it isn't the same for more complex data that has multiple attributes to it.
// Example: Cards of a deck.
var cardDeck = ['nine of hearts', 'ten of hearts', 'jack of hearts'];

// How would we obtain the suit of each card in this array? (students are not expected to know how to do it)
// ANS: We would have to access the element through its index, and then attempt to try and find the name of the suit by analysing the string.
// BONUS: You can talk about splitting here. Below is how we would do it. If you do decide to show how it is done, stress to the students that the point is not to understand splitting arrays - it is just a demonstration to show how arrays are ineffective here for our problem.
var firstCard = cardDeck[0];
// we can call split method on a string to return an array. What is inside the parenthesis when we call split is our identifier for when we split a string into elements of an array.
// We will have to split into words to get the suit, so we have an empty space as the seperator.
var splitWords = firstCard.split(' '); // returns ['nine', 'of', 'hearts']
var suit = splitWords[2]; // returns 'hearts'

// Instead of this roundabout method, we can instead choose to use another data collection type called an object.

// Objects are defined with curly-brace syntax and can be stored in variables.
var playingCard = {
  // Each attribute is defined with a key and a value.
  // The key is before the colon (:), and the value is after the colon.
  // Attributes are separated by a comma and newline.
  // Use a number to represent rank for easy comparison with other cards
  rank: 11,
  suit: 'heart',
  // Store an additional "name" attribute to correctly name face cards and aces.
  name: 'jack',
};
// ASK A STUDENT: How would they access the suit of this card now?
// ANS: playingCard.suit

// The students should understand that for objects, we tie a value to a key (e.g value 'heart' to key 'suit'). We access the value through the key pointing to it.

// ASK A STUDENT: The above solution is great, but there seems to be a problem unaddressed in using an object. What is it? What would you propose to fix that issue?
// ANS: The object can only seem to store one card as opposed to an array which can store multiple cards. We can use an array of objects to simulate a card deck.
// DO NOT MENTION LOOPS YET TO GENERATE A CARD DECK! That is for another day.
var cardDeck = [
  {
    rank: 1,
    suit: 'heart',
    name: 'one',
  },
  {
    rank: 2,
    suit: 'heart',
    name: 'two',
  },
  // ...
];