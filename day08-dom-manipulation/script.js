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

// 6.1 DOM Manipulation

// QUESTION 4: Refer to this block of code in the starter code home page HTML file (it's copied below this question for the SL's reference). What does this code do?

// Declare and define a variable that represents the Submit Button
var button = document.querySelector("#submit-button");
// When the submit button is clicked, access the text entered by the user in the input field
// And pass it as an input parameter to the main function as defined in script.js
button.addEventListener("click", function () {
  // Set result to input value
  var input = document.querySelector("#input-field");
  // Store the output of main() in a new variable
  var result = main(input.value);

  // Display result in output element
  var output = document.querySelector("#output-div");
  output.innerHTML = result;

  // Reset input value
  input.value = "";
});

// QUESTION 5: Demonstrate all of the code below this question using the starter code. Let's create a "Click Me!" button next to the original Submit button. We will attach an event listener to it. What does the button do?

// Sample "Click Me!" button to be copied and pasted into index.html
// <button id="click-me-button">Click Me!</button>

// Rest of the code below can be copied into and replace
// index.html's script tag

// Declare and define a variable that represents the Submit Button
var button = document.querySelector("#submit-button");
var clickMeButton = document.querySelector("#click-me-button");
// When the submit button is clicked, access the text entered by the user in the input field
// And pass it as an input parameter to the main function as defined in script.js
button.addEventListener("click", function () {
  // Set result to input value
  var input = document.querySelector("#input-field");
  // Store the output of main() in a new variable
  var result = main(input.value);

  // Display result in output element
  var output = document.querySelector("#output-div");
  output.innerHTML = result;

  // Reset input value
  input.value = "";
});
clickMeButton.addEventListener("click", function () {
  var container = document.querySelector(".container");
  var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
  var randomIndex = Math.floor(Math.random() *  colorArray.length);
  container.style.backgroundColor = colorArray[randomIndex];
});
