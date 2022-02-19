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

There's a caveat: all of our input (previous or current) will also be printed as a paragraph in the rest of the container space below the grey output box. 

Since we are using the `.appendChild` method, every new paragraph will be inserted (as a child) to the bottom of the container. Thus, the paragraphs are seemingly sorted from oldest to latest.

## 6.2: DOM Manipulation

### Overview