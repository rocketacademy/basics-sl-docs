// 1.1: BASIC OPERATIONS
2 + 2;
4 - 2;

// QUESTION 1: Run these in the Chrome Dev Tools console. Which of the following is the correct use of the multiplication operator?
4 x 2;
4 * 2;

// QUESTION 2: Run this in the Chrome Dev Tools console. What is the expected result of this operation?
5 / 2;

// QUESTION 3: Run this in the Chrome Dev Tools console. What does 5 % 2 give us, and what does the '%' in '5 % 2' do?
5 % 2;

// 1.2: VARIABLES
// QUESTION 4: Run the statements below this question in the Chrome Dev Tools console. What does the `=` in `var pi = 3.14` mean?
var pi = 3.14;
var radius = 4;
var area = pi * radius * radius;

// QUESTION 5: Copy the statements below in this question into the Chrome Dev Tools console, but there's no need to run them. Compare the next 2 lines for the calculation of area with how the area is calculated earlier, `var area = pi * radius * radius;`. Why is the previous method better?
var area = 3.14 * 4 * 4;
var a = x * y * y;

// QUESTION 6: Run the statements below this question in the Chrome Dev Tools console. Which of the following lines represent the correct use of camel casing for naming variables?
var areaOfCircle = 1;
var AreaOfCircle = 1;
var areaofcircle = 1;

// '+' operators, when used with strings, concatenate (join) them.
// Strings are denoted with either double or single quotations.
var string = "My name is" + " Kai."; 

// Store variables in strings and concatenate them.
var myName = "Kai";
var company = "Rocket Academy";
"Hi, my name is " + myName + " and I am the founder of " + company;

// QUESTION 7: Run the statements below this question in the Chrome Dev Tools console. What is the value stored in `result`?
var num = 3;
var result = "3" + num;

// String concatenation using template literals.
var myName = "Kai";
var company = "Rocket Academy";
`Hi, my name is ${myName} and I am the founder of ${company}.`;

// 2.1 PSEUDOCODING
// Example: In math, area of a circle = pi x (radius ^ 2).
// We need to store the radius of the circle in a variable.
var radius = 4;
// Example: We will also need to store an approximate value of pi.
var pi = 3.14;
// Example: pi x (radius ^ 2) is also pi x radius x radius.
var area = pi * radius * radius;


// 2.3.1 FUNCTIONS I
// QUESTION 8: Copy the `main` function below this question into the starter code home page script.js. What does this `main` function do?
var main = function (input) {
  console.log('papaya');
  // store input as distanceInKm
  var distanceInKm = input;
  // convert it to miles
  var distanceInMiles = distanceInKm * 0.62;
  // show what the input in km is in miles back to the user by returning it
  var myOutputValue = `Hi! ${input} kilometres is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};

// A function is just like a fruit juicer.
// It accepts an input (in this case, a fruit),
// and gives us an output of said fruit's juice.
var juicer = function (fruit) {
  var juice = `${fruit} juice`;
  return juice;
}

// The name of the parameter may not be `input`.
// In this example, we changed `input` to `distanceInKm`.
// Be doubly sure that the parameters are named and used
// correctly in the rest of the function too.
var main = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hi! ${distanceInKm} kilometres is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};