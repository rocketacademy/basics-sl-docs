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