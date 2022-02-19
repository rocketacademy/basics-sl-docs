# Day 8: Document Object Model (DOM)

## Overview

The day's pre-class material is mainly an investigation into what is possible with JavaScript given the tools that have already been covered, including HTML and CSS.

## 6.1: The Document Object Model

### Overview

This section is largely conceptual, with the only key applications being:

* Referencing HTML elements in JavaScript
* Manipulating the HTML elements referenced in their code

These tools will be useful for more ambitious students looking to re-structure their starter code templates for their Blackjack project, such as doing away with the input field and interacting directly with card images.

Chiefly, SLs have to be able to explain the DOM and its uses. In code, the DOM is ultimately made up of 2 variables called `window` and `document`. They are created by the browser and represent everything that's happening in the window and on the page.

Almost every website now uses the DOM to display things on the screen. Google Sheets is a good example (click [here](https://docs.google.com/spreadsheets/d/1LjRxTu0E9lwAPRYc_WFYsFEAA4WAEjAP65igIHm_PwY/edit?usp=sharing) for a sample template).

Google sheets uses the DOM in combination with all of the data in the Google Sheets database to create and update the screen that users see. The data that is displayed on the page is represented as arrays and strings and objects inside the Google system (among other representations) and is displayed on the screen of the browser using the DOM.

### Code Examples and Discussion Questions

**Question 1:** Copy all of the code below this question into your starter code root script.js. What does the first line where newButton is initialised do?

**Answer 1:** It selects the HTML element with the ID (marked by `#`) `submit-button` so that you can manipulate it in your JavaScript code.

We can do a `console.log(newButton);` just to show students that the button is successfully selected.

**Question 2:** Copy all of the code below this question into your starter code root script.js. Given this newButton variable, how will we change the text displayed in it to say "Click me!" instead?

**Answer 2:** We can do so this way:

```
var newButton = document.querySelector("#submit-button");
// Change the inner text of submit button
newButton.innerText = "Click me!"

var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
```

Do note that this example isn't the most useful for regular rendering work - `newButton`'s `innerText` will change to "Click me!" when `script.js` loads. This is not very different from changing the button text in the HTML file. Usually if we want to set the initial rendering of elements in the page, we prefer to do it directly in the HTML file.

A more useful application will be manipulating the DOM on certain circumstances that can be interpreted only with JavaScript - such as updating the button text on meeting a logical condition. In the example below, we have the button text show the number of times (after 0) it has been clicked:

```
var newButton = document.querySelector("#submit-button");
// global counter for tracking button click
var counter = 0;

var main = function (input) {
  // main runs on button click, increment counter
  counter += 1;
  var myOutputValue = 'hello world';
  // Change the inner text of submit button
  newButton.innerText = `I have been clicked ${counter} time(s)!`
  return myOutputValue;
};
```

**Question 3:** Copy all of the code below this question into your starter code root script.js. What does this program do?

**Answer 3:** The first line selects the white container in the starter code.

When we input a text and click the Submit button, it will be printed in grey output box as we are already used to.

There's a caveat: all of our input (previous or current) will also be printed as paragraphs in the rest of the container space below the grey output box. 

Since we are using the `.appendChild` method, every new paragraph will be inserted (as a child) to the bottom of the container. Thus, the paragraphs are seemingly sorted from oldest to latest.

## 6.2: DOM Manipulation

### Overview

Whie we have started discussing DOM manipulation in the context of the starter code as early as the previous module, we will be diving deeper into events pertaining to our inputs.

A good introduction will be revisiting the starter code HTML script, namely:

```
<script>
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
</script>
```

Students can read this code snippet and try to explain in their words what they mean. It's okay if they are using the code comments as cues - what's important is their class participation and interpretation of the comments.

Next, we can begin looking at creating our own basic event handlers and listeners. This is in the event students wish to define their own interfaces for the Blackjack project, such as directly interacting with card images instead of using the given input field and Submit button.

### Code Examples and Discussion Questions

**Question 4:** Refer to this block of code in the starter code home page HTML file (it's copied below this question for the SL's reference). What does this code do?

**Answer 4:** Again, it's fine if the students are interpreting this using the code comments as cues. Sequentially, this is what happens:

* The Submit button is selected for use using the `.querySelector` method.
* A "click" event listener is added to the button, so that the program does something when the selected button is clicked.
* When the button is clicked, the input field is selected, so that its value (what you type in the input field) can be used later.
* The input field's value is passed as argument to the `main` function, where its `return` value is stored in the variable `result`. This is similar to how students have executed functions and used their `return` values throughout the course.
* This `result` variable's value is then printed into the grey output box, selected using the `output` variable.
* At the end, we reset what's typed in the input field for the convenience of users keying in new inputs.

**Question 5:** Demonstrate all of the code below this question using the starter code. Let's create a "Click Me!" button next to the original Submit button. We will attach an event listener to it. What does the button do?

**Answer 5:** You may want to break this question up, to get different students to explain the code snippet 1 student per line. The gist is we now have a button that randomly sets a new background color to the original white container. Sequentially:

* We create a "Click Me!" button in index.html, and give it an ID of `click-me-button`.
* We select it using the `.querySelector` method in the script.
* We add a click event listener to it.
* On clicking the button, it selects the container, and then sets a randomly generated background color to it. The range of colors are pre-defined in an array.

## Wrap-Up / Look Ahead

Next we'll cover one last thing, which is the ability to see ***into*** our code with the Chrome Dev Tools with the debugger. The debugger is the most granular tool we can use to analyze what our code is doing. Building a correct mental model of how the code works during debugging is the key task to fixing errors. Sometimes we may need to look at a particular value in order to do that.