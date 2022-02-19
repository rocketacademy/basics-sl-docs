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