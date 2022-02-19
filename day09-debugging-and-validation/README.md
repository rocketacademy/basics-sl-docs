# Day 9: Advanced Debugger

## Overview

Today is the last course day before the final project presentation. Unlike other project submissions this one is meant so that students will be able to review each other's work before they present the finished version.

## 2.5 Advanced Debugger with Sources Tab

### Overview

We've already seen debugging with the simple tool of `console.log`. Sometimes this is not enough. If the code is behaving in a way that doesn't make sense or there is an error in a loop that runs many times and creates a hard to read console.log output, the next level of control and granularity is to use the debugger.

### Code Examples and Discussion Questions

**Question 1:** Copy all of the code below this question into your starter code root script.js. By only reading it (without running the code), what does it do?

**Answer 1:** Two loops create a square emoji figure. The condition evaluates if the loops are at an edge. An edge is defined as being either: (a) Beginning of either loop, or (b) end of either loop. 

**Question 2:** Using the same program from Question 1, what is the value of outerCounter and innerCounter when the program draws the top middle fist? Use the debugger to find that value.

**Answer 2:** There is no right answer for this, and it really depends on the input.

Firstly open your Sources tab with the `index.html` loaded with the `script.js` example. You will want to set 2 breakpoints on these 2 lines.

<img width="524" alt="Screenshot 2022-02-20 at 2 49 23 AM" src="https://user-images.githubusercontent.com/7672836/154814798-b69b9398-9b84-4cc2-b1d9-b68390028124.png">

Let's assume an input of `3`. Type in 3, and hit Submit. Your browser should stop the execution of the code before the initialisation of `innerCounter` in the outer loop. Click on the "Step over next function call" button a few times to run lines 7 to 18 sequentially, showing the results in the Sources tab as you go along. The button is the 2nd icon in the screenshot below.

<img width="518" alt="Screenshot 2022-02-20 at 2 54 11 AM" src="https://user-images.githubusercontent.com/7672836/154814995-fc104487-d856-4ec8-8736-9750f6ba0ab0.png">

The result should look like this:

<img width="527" alt="Screenshot 2022-02-20 at 2 55 26 AM" src="https://user-images.githubusercontent.com/7672836/154815007-3a847a88-6dba-4346-8a34-dd8335a1cd1c.png">

The result in the above screenshot shows the first iteration of the inner loop, printing the first fist. Use the "Step over next function call" button again, and run through it until `innerCounter` is `1`, and `myOutputValue` is logging the 2nd fist. You should see something similar to the results here:

<img width="1205" alt="Screenshot 2022-02-20 at 3 01 54 AM" src="https://user-images.githubusercontent.com/7672836/154815148-c7e9e1a9-ce31-4e63-9dc9-6876385079f6.png">

Per the screenshot, when the input is `3`, the top middle fist (2nd fist in the top row) is printed when `outerCounter` is still `0` and `innerCounter` is `1`.

**Question 3:** Using the same program from Question 1, what is the result of each conditional statement the first time the loop runs? Use the debugger to find the value.

**Answer 3::** Per the screenshot below, it will not be immediately obvious what the result of each conditional statement is. This is because the Sources tab will provide you the value of the variables used in each sub-condition, but not the truthy nor falsy evaluation of the sub-conditions.

<img width="1205" alt="Screenshot 2022-02-20 at 3 01 54 AM" src="https://user-images.githubusercontent.com/7672836/154815148-c7e9e1a9-ce31-4e63-9dc9-6876385079f6.png">

A trick to employ is to store the sub-conditions as variables. Remember that the results of the evaluation of these sub-conditions are Boolean values? Before setting the conditions, you can define the sub-conditions this way:

```
// If current iteration represents a border element, draw ✊ instead.
var isOuterCounterTopEdge = (outerCounter == 0);
var isOuterCounterBottomEdge = (outerCounter == sideLength - 1);
var isInnerCounterLeftEdge = (innerCounter == 0);
var isInnerCounterRightEdge = (innerCounter == sideLength - 1);

if (isOuterCounterTopEdge || isOuterCounterBottomEdge
  || isInnerCounterLeftEdge || isInnerCounterRightEdge) {
  myOutputValue += '✊';
} else {
  // Add a 👍 to the current row
  myOutputValue += '👍';
}
```

The variables are named this way, because the `outerCounter` sets the rows (top to bottom) in the square, while the `innerCounter` sets the columns (left to right). The proof is that we add a line break `<br>` before incrementing the `outerCounter`, thus a new line (row) is created after every iteration of `outerCounter`.

Assuming the same breakpoints as Question 2, and the same input of `3`, running "Step over next function call" within the first iteration (of both the inner and outer loop) should give us results similar to the screenshot below:

<img width="1205" alt="Screenshot 2022-02-20 at 3 22 44 AM" src="https://user-images.githubusercontent.com/7672836/154815882-7c365a4b-7f50-420d-9668-7dd1aa1ba0dd.png">

This means that `(outerCounter == 0)` and `(innerCounter == 0)` are `true` in the first iteration (first time the loop runs).

## Wrap-Up / Look Ahead

This lesson is deliberately structured to be short, with most of the work being experiments students can run on the Sources tab before the class or after the class (if they have not already done so).

The majority of the class today will be their in-class pair programming work to get either the rest of their Blackjack Base requirements up, or begin working on the More Comfortable sections.

Most former SLs recommend pairing students by similar extents of completion - group students who are struggling with Base together, and those working on More Comfortable together. This is to encourage participation and sharing of knowledge, without any one member only passively participating in their pair assignment groups. Be prepared to jump in to guide groups that are stuck on their requirements.

In the next session, students will be presenting their completed Blackjack projects. Do remind students to deploy their projects before their presentations, and they can do so following the instructions here: [https://codingbasics.rocketacademy.co/course-logistics/learning-environment/deployment](https://codingbasics.rocketacademy.co/course-logistics/learning-environment/deployment)