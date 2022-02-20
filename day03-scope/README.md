# Day 3: Scope

## Overview

This day introduces the boundaries of the lifecycle of the starter code. Specifically at the beginning when the JavaScript file loads until the refresh button gets clicked.

Within this time span we introduce the idea of global values that are manipulated again and again as the user clicks the submit button.

We will introduce the idea that the code can deal with more dynamic values other than the `input` variable.

## [4.1 Intro to Scope](https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope)

### Overview

Spend some time introducing the various levels of scoping to the students, using the follow-along examples in the module [4.1 Intro to Scope](https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope).

Do duplicate and replicate the code yourself to ensure you have complete familiarity of the structure of the examples. You can structure the demonstration as a debate, asking the students the same questions asked pertaining to the code examples in the module pre-class.

## [4.2 Program Lifecycle and State](https://codingbasics.rocketacademy.co/modules/4-scope/4.2-program-lifecycle-and-state)

### Overview

This section introduces dynamic global variables.

Be aware that astute students may notice global variables will get reset when the page is reloaded. Resolving this requires caching or the use of a database, both of which will not be covered throughout the Basics course.

### Code Examples and Discussion Questions

**Question 1:** Copy the `main` function below this question into your starter code home page script.js. In the following function, it adds our input to `someNumber`. However, if we input `1` over and over again, we will keep getting `2` as the output. How do we change or move the code around such that the output increments everytime we input `1`?

**Answer 1:** We can move the variable `someNumber` out of the function, into the global scope. This ensures that as long as the page is still running (not reloaded), we can input whatever number it will keep incrementing `someNumber`.

**Question 2:** Copy `papayaCount` and `main` below this question into your starter code home page script.js. What does the `main` function below do?

**Answer 2:** Every time the Submit button is clicked, the `papayaCount` will increase by 1. The `input` from the input field does not matter here, because it is not used by the function.

`papayaCount = papayaCount + 1` may seem confusing to some students still. You can use this opportunity to explain how assignment works: we assign the logic on the right to the left, but the operations on the right have to be resolved first.

It can be visualised like this, by precedence: `papayaCount = (papayaCount + 1)`. This means we are taking the original (or previous) value of `papayaCount`, increasing it by 1, then re-assigning the new value (incremented by 1) to `papayaCount`.

**Question 3:** Copy `bankRoll` and `main` below this question into your starter code home page script.js. The code below is a dice game with a betting element. Our `bankRoll` increases when we win. How will you change the logic such that our `bankRoll` decreases when we lose?

**Answer 3:**

`myOutputValue` need not be shuffled or changed here. Instead, an `if` block can be set up before the default loss output to check if the `randomDiceNumber` does not match the `input`.

It will be tempting to add the NOT condition next to the original one, but we will want the `bankRoll` decremented before we show the loss condition. Otherwise, the `bankRoll` in the loss condition `myOutputValue` will show the value before it decreased.

```
var bankRoll = 10;

var main = function (input) {
  var randomDiceNumber = rollDice();

  // decrement bankRoll if it doesn't match input
  if (randomDiceNumber != input) {
    bankRoll = bankRoll - 1;
  }

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};
```

## [4.3 Program State for Game Modes](https://codingbasics.rocketacademy.co/modules/4-scope/4.3-example-program-state-for-game-modes)

### Overview

We will introduce a technique using globals together with conditionals to create "modes". Note this isn't a programming or computer science topic, but just a way to describe this use of globals and conditionals together.

Modes then allow the program to accept totally different data depending on the global game mode, i.e, the `input` variable can represent a string when the mode says `input` is the user's name, and it can represent a dice roll number when the mode says `input` represents a number. This is another expansion of the volume of data our programs can deal with.

Start with explaining the idea of "modes" - a way we can write code so that the `main` function can do more than one set of things.

### Code Examples and Discussion Questions

**Question 4:** Copy `mode` and `main` below this question into your starter code script.js. When we run the program below and only click Submit (don't type anything), what appears in the grey box? Which part of the code runs?

**Answer 4:** "A fool sees not the same tree that a wise man sees. -William Blake" appears in the grey box. None of the other conditions is true.

**Question 5:** For the same program, if `bluemode` is typed in (and Submit clicked), what gets displayed in the grey box? Which lines of code run?

**Answer 5:** Demonstrate this using the same game mode code as Question 4.

'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau' appears in the grey box. The condition on line 6 is true. This sets the global mode variable. Then the condition on line 13 is true as well. Then the Jacques Cousteau quote appears.

**Question 6:** For the same program, what happens if 'blue' is typed in and submitted?

**Answer 6:** Demonstrate this using the same game mode code as Question 4 and 5.

This is a trick question because the code does not look to match the value 'blue' to the user input. It does look for that value in the global variable, though.

## In-Class Material

### Link to Exercises

[Program State](https://codingbasics.rocketacademy.co/coursework/in-class-exercises/day-3-boolean-and-program-state)

## Look Ahead / Wrap Up

Next we're moving on to loops, which allow us to execute a given code a number of times. And the meeting after that, we are moving on to arrays, which further expand the data we'll use. Thereafter, we will combine the two together.

### Post-Class: Begin [Project Part 2](https://codingbasics.rocketacademy.co/coursework/projects/project-1-scissors-paper-stone/project-1-scissors-paper-stone-part-2)

This part of Scissors Paper Stone uses global state to build in more features of the game. To do the More Comfortable sections, students will have to apply what they have learnt using global variables and the game mode strategies described earlier.
