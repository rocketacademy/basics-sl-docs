# Day 9: Advanced Debugger

## Overview

Today is the last course day before the final project presentation. Unlike other project submissions this one is meant so that students will be able to review each other's work before they present the finished version.

## 2.5 Advanced Debugger with Sources Tab

### Overview

We've already seen debugging with the simple tool of `console.log`. Sometimes this is not enough. If the code is behaving in a way that doesn't make sense or there is an error in a loop that runs many times and creates a hard to read console.log output, the next level of control and granularity is to use the debugger.

### Code Examples and Discussion Questions

**Question 1:** Copy all of the code below this question into your starter code root script.js. By only reading it (without running the code), what does it do?

**Answer 1:** Two loops create a square emoji figure. The condition evaluates if the loops are at an edge. An edge is defined as being either: (a) Beginning of either loop, or (b) end of either loop. 

**Question 2:** Using the same code from Question 1, what is the value of outerCounter and innerCounter when the program draws the top middle fist? Use the debugger to find that value.

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
