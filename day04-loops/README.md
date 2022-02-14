# Day 4: Loops

## Overview

Loops are the last form of control flow to cover. It combines conditional syntax with the idea that the block repeats over and over.

For this day, students will pick an in-class exercise to attempt, as well as review each other's Scissors Paper Stone code. When learning to code (or generally to increase your coding knowledge) it is important to read code in addition to writing code.

## 3.4 Loops

### Code Examples and Discussion Questions

**Question:** What does the code below do?

**Answer:** Have a student try reading and interpreting the code before running it on CodeSandbox or your Chrome Dev Tools console.

It prints `"hello [counterNumber]"` 10 times, starting from 0 and ending with 9.

**Question:** For the same program, how do we change the loop so that `"hello 99"` is the last output we see logged?

**Answer:** Change the `while` condition, such that:

```
while (counter < 100) {
  ...
}
```

**Question:** For the original program (with `while (counter < 10)`), what if we set the starting value of `counter` to 2 instead of 0? What happens if the user types in a value above 2?

**Answer:** For the original program (with `while (counter < 10)`), what if we set the starting value of `counter` to 2 instead of 0? What happens if the user types in a value above 2?

**Question:** For the original program (with `while (counter < 10)`), what if we changed counter to start from 10?

**Answer:** The `while` loop will not even run once.

**Question:** For the original program (with `while (counter < 10)`), what if we swapped the positions of the `console.log` and the `counter = counter + 1`?

**Answer:**  We would see the counter in the `console.log` start from 1 and end at 10 as opposed to starting from 0 and ending at 9.

**Question:** What if our loop condition is like so: `while (counter <= 10)`? Will there be changes from the original behaviour?

**Answer:** We would see the console.log counter start from 0 and end at 10 - giving us 11 console.logs in total.

**Question:** What happens if we remove the line that increments counter in the while loop?

**Answer:** Be prepared to kill your tab or window when demonstrating this, because you will come across an infinite loop. It is still worth showing the students to always remember incrementing or decrementing their counters, depending on the condition. The loop will continue running if the condition is `true`, and we will want a killswitch for it.

You can also use this as an opportunity to wrap up the 3 must-haves for a loop:

1. the initial `counter` value
2. the condition in which the loop will run
3. incrementing or decrementing the `counter` value until the condition in (2) is no longer `true`.

**Question:** What does this `yesNoMain` function do?

**Answer:** We will get at most 5 yes' in our output value, and if our input was more than 5, the rest afterwards will be no's.

Feel free to use this example to illustrate other concepts of a loop, or pose further questions, such as regarding incrementing the `counter` value by 3 instead of 1, or if the conditions are flipped.

**Question:** What does this `yesNoMain2` function do?

**Answer:** We will get alternating yes and no depending on if the counter was equal or odd at the time.

We detect odd and even numbers using the modulo `%` operator, dividing by 2, such as `someNumber % 2 == 0`. Remember that the modulo operator gives you the remainder of a division. When divided by 2, every even number will have a remainder of 0. Odd numbers will have a remainder of 1.

**Question:** Can we call a function inside a loop?

**Answer:** Yes we can! In the example in `script.js`, we will roll a dice 10 times, logging its value in the console.

All the control flow syntax is combinable. A loop can call a function. A function can have a loop inside. A conditional can be inside a loop. The most difficult part is deciding when to use which!

## In-Class: Scissors Paper Stone Redux

### Read (Individual) 

Fork, read, run and edit your partner's code.

Encourage the students to use all the tools at their disposal to investigate and understand the code. Reiterate that this is just a copy so don't be afraid of making changes that break things in order to figure out how something works.

### Breakout Rooms

Pair students in breakout rooms based on their completion. For instance, you can pair students who are still struggling with Base, or students who have completed up to More Comfortable.

In their peer review, students can discuss and share their work, as well as work on more advanced features together.

## Look Ahead / Wrap Up

Next we're moving on to arrays, which further expand the data we'll use. We'll combine loops and arrays together, and demonstrate how these JavaScript syntaxes build on each other.