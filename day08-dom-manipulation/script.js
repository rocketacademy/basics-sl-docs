// 6.1 The Document Object Model
// QUESTION 1: Copy all of the code below this question into your starter code root script.js. What does the first line where newButton is initialised do?
var newButton = document.querySelector("#submit-button");

var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

// QUESTION 2: Copy all of the code below this question into your starter code root script.js. Given this newButton variable, how will we change the text displayed in it to say "Click me!" instead?
var newButton = document.querySelector("#submit-button");

var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

// QUESTION 3: Copy all of the code below this question into your starter code root script.js. What does this program do?
var container = document.querySelector('.container');

var main = function (input) {
  var myOutputValue = `your latest input: ${input}`;
  var newParagraph = document.createElement('p');
  newParagraph.innerText = `${input}`;
  container.appendChild(newParagraph);
  return myOutputValue;
};
