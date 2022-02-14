# Day 2: Conditional Logic

## **Overview**

Day 2 carries on from Day 1 by reiterating on functions, thereafter introducing error handling, conditional (`if`, `else if`, `else`) control flow and Boolean values.

## 2.3.2 Functions II

### Overview

We are beginning to see functions with multiple parameters and arguments, as well as how we can pass their `return` values to the calling scope to use or store as a variable.

There are a couple of things that may need to be emphasized to students:

* function parameters are assigned and ordered based on position in the input parameter list.
* thereafter, the function arguments when executing said functions should follow the same order.

It is best to set up a simple demonstration yourself to show students how function parameters and arguments are matched when (a) defining the function, and (b) executing it.

### Code Examples and Discussion Questions

**Question:** What will `console.log` results be for the following 2 lines?

**Answer:** For the function call in `result2`, `a` will be `1` and `b` will be `2`. For the function call in `result3`, `a` will be `2` and `b` will be `1`.

The order of the function arguments will match the order of the function parameters. `a` and `b` will be swapped in the function calls for `result2` and `result3` because the arguments are flipped.

**Question:** What will `addMultiple` return? Why?

**Answer:** The answer is `6`. In `var myOutputValue = add(1,add(2,3));`, `add(2,3)` gets executed first, giving us `5`. Subsequently, `add(1,add(2,3))` is mathematically equivalent to `add(1,5)`. This will be executed after `add(2,3)`, and `add(1,5)` gives us `6`.

This is a demonstration that we can put the result (return value) of executing a function in the argument.

## 2.4 Errors

### Overview

A common misconception with coding is that all the time spent learning to code or doing coding is spent actually typing out the code. It is important to emphasize to students that the learning process is 80% about identifying and fixing errors. (And also that the professional coding process is also 80% fixing errors).

In this sense the idea of errors and the strategies for approaching them are as important or more important than any other subject covered in Basics.

Do reinforce and continue to reinforce the idea that the students should always immediately open the Chrome Dev tools whenever they open the browser. If you aren't already doing this, always pattern this behavior for students.

### Code Examples and Discussion Questions

**Question:** What is the difference between a compile-time error and a run-time error?

**Answer:** One happens when the page loads, the other happens when the code is run- that is, a function's code isn't necessarily run right away, for example the code inside the main function.

Have the 2 different errors in your `script.js` prepared on your CodeSandbox starter code. For the compile-time syntax error, you should be able to notice the red underlines in CodeSandbox.

For the run-time error, the error will not be detected (on the editor's end) until the code is running.

## 3.1 Intro to Logic and Control Flow 

### Overview

The Logic module is where we introduce real serious control flow. Some students will struggle to cope with this increase in complexity, not because the code is hard to understand but because understanding what code to write is much more difficult.

To properly demonstrate the idea of a "control flow", you may want to start with running through the 3.1.1 Control Flow Diagrams module again. The diagrams help demonstrate how real-life scenarios can be analogous to this aspect of logical thinking.

Remember that just logic in and of itself is actually a huge topic. It may be useful to go slowly and sequentially, starting with `if`s, then `else`s, and then `else if`s. It is worth thinking of these as items in a chain. You can't have your `else`s and `else if`s without the original `if`.

Start with this brief overview, cover conditionals and Boolean logic. We will finish this section much later by demonstrating a dice game example.

## 3.2 Conditionals 

### Overview

Using your starter code on CodeSandbox, introduce one basic conditional `if` statement with one equivalence operator inside. The code should be relatively intuitive here.

Students can sometimes get confused that block curly braces for functions work differently from conditional block curly braces (e.g. function scope).

### Code Examples and Discussion Questions

**Question:** What is the difference between `==` and `=`?

**Answer:** There isn't a `script.js` example for this, so you can just talk about this with students conceptually.

Look back at the explanation for the `=` operator back in the SL guide for Day 1 Module 1.2 Variables. The key difference is the `==` is for equivalence, while `=` is for assignment. Feel free to reuse the analogy from Day 1 Module 1.2 Variables about boxes to re-iterate assignment.

Emphasize to students to double-check that they are using `==` or `===` for equivalence, otherwise their conditional logic may not work the way they intended.

**Question:** How would we get `"hello friend"` to be printed?

**Answer:** Demonstrate the code on CodeSandbox. 

This is a test of your students' code reading abilities, especially with new conditional syntax being taught. The question can also be re-phrased as "What should I type into the input field to get `"hello friend"` to print.

The answer is simply `"palatable papaya"`.

**Question:** What would the value of `1 + 2 === 3` be? What about `1 + 1 === 3`?

**Answer:** You can demonstrate this using `console.log` in your CodeSandbox starter code, or your Chrome Dev Tools console.

We would get `true` and `false` respectively. Up till now, we were introduced to 2 data types - numbers and strings. Now, we have a third data type called 'Boolean'. There are only two Boolean values - true or false. Booleans are essential to our next concept: Conditionals and control flow.

**Question:** What is the string printed by this function? Should I get `"you entered the number 3."` or `"you may or may not have entered the number 3."`?

**Answer:** This is a tricky question, but it puts together what the students know about strict vs. non-strict equivalence, as well as familiarity with the starter code interface.

Demonstrate the code on CodeSandbox. `myOutputValue` will be `"you may or may not have entered the number 3."` at the end. 

This is because the string `"you entered the number 3."` is only assigned when `input` is strictly the number `3`. 

Inputs coming from the input field will always be a string, unless parsed otherwise. It is worth using this opportunity to explain this situation regarding the Starter Code input field to students. 

The way to cast this string into a number will be covered later in the course, but it shouldn't hurt to demonstrate the `Number(input)` syntax.

## 3.1 Intro to Logic and Control Flow (continued)

### Overview

Putting everything from functions, conditionals and control flow together, we will demonstrate the pre-class dice roll program logic again.

### Code Examples and Discussion Questions

**Question:** How would we change this `rollDice` function logic such that we get a 20 sided dice instead?

**Answer:** Multiply `Math.random()` by 20 for the assignment of `randomDecimal`.

## 3.3 Boolean Operators

### Overview

We can continue with the dice roll program example, and add to the examples to demonstrate the use of Boolean operators. 

Start by introducing the logical OR operator. Again, here with a single boolean operator there is a lot of inherent complexity, but we leave off a lot so that the code feels relatively intuitive.

### Code Examples and Discussion Questions

**Question:** If I want to turn the random dice roll app into a dice game, I will change the the logic in the `main` function to incorporate winning conditions. What is the winning condition here?

**Answer:** This question and code drastically changes the application as listed on the pre-class follow along exercises. Give your students some time to read and understand the code.

If the input is either equal to or one off from the random dice number, the user wins.

**Question**: The following program allows the user to win only if the input matches both random dice numbers. How would I add a third dice to the below function and ensure that the user wins if the input matches all 3 dice numbers?

**Answer**: Create a variable `randomDiceNumber3`, and it will store the value of its own execution of `rollDice`. Then ensure that `randomDiceNumber3` is checked against the user's input.

**Question**: How will I flip the conditions of the code before (or below), such that the user wins if the input does not match the 3 dice numbers?

**Answer**: The simplest way to flip the conditions is to wrap the original one in a parenthesis, then adding a NOT operator, like so `!(randomDiceNumber1 == input && randomDiceNumber2 == input && randomDiceNumber3 == input)`.

The trickier way to do this is to simplify the formula above into: `randomDiceNumber1 != input || randomDiceNumber2 != input || randomDiceNumber3 != input`. This is a fairly advanced logical technique, and we do not propose demonstrating this unless you are confident of pulling this off. 

The formula for the trickier technique of simplification comes from: `!(subcond1 || subcond2 || subcond3) === (!subcond1 && !subcond2 && !subcond3)` or `!(subcond1 && subcond2 && subcond3) === (!subcond1 || !subcond2 || !subcond3)`. The sub-conditions are flipped, as well as the Boolean operators (OR becomes AND, and vice versa).

**Question**: It can be tricky testing the `rollDice` function, given that it will generate a new random number of each execution. If I want to test the `rollDice` function constantly against the input of `"1"`, how will I change the `rollDice` code?

**Answer:** Hardcode `rollDice` to return `1`. Ensure that the `return` statement is at the top of the `rollDice` function. Use this opportunity to demonstrate that `return` terminates the function, and the rest of the code after the `return` statement will be ignored by the script.

```
var rollDice = function () {
  return 1;
  // Note how everything below is ignored after a return statement
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
```

## Look Ahead / Wrap-up

Just the conditionals syntax in this day is a huge amount of possible complexity and the possibility space the code can explore is now exponentially larger compared to the previous day. The code can now decide things based on data. We'll continue to use conditionals to expand what our programs can do. Next is to introduce global values so that the program can evolve over time and can deal with more and more data as the user uses the program.

## Post-Class: Begin Project

Introduce the project. Scissors Paper Stone is split into two parts. The second part will use global variables to keep track of game state.

Make sure everyone understands when the project is due.
