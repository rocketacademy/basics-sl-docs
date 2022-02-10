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
// Q3: if they were to look at both statements below without any context beforehand, how would they feel as opposed to var area = pi * radius * radius? Now imagine if there were 500 lines of poorly named variables.
var area = 3.14 * 4 * 4;
var a = x * y * y;

// Enforce camelCasing, standardization is important to make sure people can understand your code as easily as possible. This is one of the reasons why we emphasize convention
var areaOfCircle = 1; // correct
var AreaOfCircle = 1; // incorrect
var areaofcircle = 1; // incorrect, harder to make out the words (e.g. thisIsANameOfAFunction vs thisisanameofafunction)

// We can also use strings in operators, show the following operations in the console.

// adding strings together concatenates them.
var string = "My name is" + " Kai."; // strings are denoted with either double or single quotations

// We can use variables that store strings and add them to other strings to form a single combined string
var myName = "Kai";
var company = "Rocket Academy";
"Hi, my name is " + myName + " and I am the founder of " + company;

// Q4: What happens if I add a string of "3" to a num 3? What will we get?
var num = 3
var result = "3" + num;
// ANS: we get a concatenation(33) just like before, not 6. Show it in console. The result is a string as the integer is converted into a string and concatenated when added to another string.

// Adding strings using + is a bit of a hassle especially for long combined strings, so we can use a much more efficient method to do this: its called a template literal.
var myName = "Kai";
var company = "Rocket Academy";
`Hi, my name is ${myName} and I am the founder of ${company}.`; // Template literals are marked with a `. Variables in template literals are marked in ${}. If we don't use that to mark variables, the computer will think its a string and not referring to a var.

// may change to es6 syntax?

// 2.1 Pseudo Code
// We can add two forward slashes at the start of a line to mark it as a comment, so our computer ignores it when executing code. Used so we can put plain english in our JS files! But we can also use pseudocode to help us with coding.
// they can also highlight a bunch of lines and press CTRL(or CMD) + / to immediately mark them as comments.

// example
// What are the steps to find the area of a circle?

// We know that area = pi * radius * radius, where radius is the radius of the circle we are calculating the area for.
// Let's continue to break this down further into lines of code.
// The students should see that pseudocoding helps to break down our problem into smaller steps, so that we can tackle it line by line. Finding the area of a circle may not seem very hard and thus the pseudocode may seem unnecessary, but the important part is that students should understand how it is used and be encouraged to use it during the in-class.
// MAY CHANGE LATER

// we need to store the radius of the circle in a variable
var radius = 4;
// store the value of pi
var pi = 3.14;
// calculate the area of the circle
var area = pi * radius * radius;
// The point of pseudocode can be to make some comment so that people looking at your code can understand it easier, but also helps as a bridging tool between solving a problem in english and actually typing out the code needed for it.


// 2.2 Functions

// So now we can do operations... which is great, but how do we operate like a machine, which takes in a user input, does some things with it, and gives us an output depending on what we put in? For that, we use functions.

// The students should understand: functions are simply multiple lines of operations that we have already learned, at the end - we return an output. There may or may not be an input given to this function, but some form of computational output should always be expected.

// Walk through with students how this conversion works in a function
// Students should also not change the name of the main function for now, just take it as that the main runs when we click submit.
// show them how input is what we type in the html
// functions that take in an external input allows the functions to be used no matter what the input might be, as opposed to us having to manually type in the code.
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

// The input you give a function should affect the output of what they get. A real-life example is that you can think of the main function(and other functions that take in a parameter) as like a fruit juicer. The fruit juicer expects some fruit to go inside it, and the expected output is fruit juice. It will not work if you don't add a fruit inside. The kind of juice (the output) would depend on what fruit you put inside. Apple as an input would give us apple juice as an output while orange as an input would give us orange juice.

var juicer = function (fruit) {
  var juice = `${fruit} juice`;
  return juice;
}

// Students can also change the input in the parenthesis to be something else, like distanceInKm so we can skip line 45, but they will have to change the subsequent lines as well.
var main = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hi! ${distanceInKm} kilometres is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};


// we can store the result of a function in a variable
var add = function(a,b){
    console.log(`this is a: ${a}`)
    console.log(`this is b: ${b}`)
    return a + b;
};
// Q5: What will the console logs be if we switch the positions of 1 and 2 in add(1,2)? What will the value of a and b be?
// show them how the position of the parameters matter. For result and result2, a and b are swapped because their positions match with the positions of a and b.
var result = add(1,2);
var result2 = add(2,1);

// functions don't always require input to have an output.
var blah = function () {
  console.log ('papaya');
  return 1 + 2;
}

// Q6: What will we get as the answer below? Why?
var main = function(input){
    var myOutputValue = add(1,add(2,3));
    return myOutputValue;
};
// ANS: We get 6. the add(2,3) gets executed first, then add(1,5). We can even put the result of a function as a parameter - it will resolve first.