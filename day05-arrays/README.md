# Day 5: Arrays

## Overview

Arrays express the idea of a value made up of discrete composite values, in the way a week is composed of days, or a book of pages. This section introduces the array as a type of value. 

Using loops as our control flow, we will introduce the code needed to iterate over an arbitrary sized array. The integer location of the index and the counter in the loop match up perfectly to allow us to process every item in an array. This allows us to further expand the amount of data our programs can deal with.

We want to plant the idea of the equivalence of the loop counter and the array index in students minds so that they have some time to wrap their head around the ideas. If students are struggling with the idea of their code manipulating data, this concept of a loop that adjusts dynamically for the size of the array is one of the more difficult concepts for them to use in their code.

## 1.3 Arrays

### Overview

The `script.js` in the SL guide for this module has a series of examples that illustrate the benefits of using arrays over the previously taught data types.

Do take the time to read through these examples, and share these with your students. Particularly for lists of similar data (days of a week, temperature per day etc.), arrays will be a better data structure.

While it is valid syntax to put any type of data in a given array, we do not recommend that. We prefer sticking to storing only 1 data type per array (eg. an array storing temperature per day should store numbers, not strings, Booleans or function definitions). This is because the concept of storing a list of data means that it should always be the same type.

### Code Examples and Discussion Questions

**Question:** Given what we know above, how we can always access the last element of an array no matter what the size is?

**Answer:** `arrayName[arrayName.length - 1]`, you can use `daysOfTheWeek` as an example and show it in console.

**Question:** How do we change the 'e' to a 'd' in the array below?

**Answer:** We can do so using `letters[3] = 'd'` or `letters[letters.length - 1] = 'd'`. The latter is preferred if you know that 'd' is the last item in the array, and the array is long (we do not want to manually count the number of items in an array to determine its index).

**Question:** What happens if we try to access an index that doesn't exist?

**Answer:** `undefined`. Using the `letters` array example, you can demonstrate this on your Chrome Dev Tools console by accessing an index like `999`.

**Question:** How does this dice guessing game work?

**Answer:** This game allows the user to make a series of guesses. They submit a guess (of a number) every time the Submit button is clicked. Storing guesses in an array allow its history to persist and be retrieved later, without the need for creating an indeterminate number of variables.

You can also use this example to demonstrate array methods like `.pop` and `.push`.

## 3.5 Looping Over An Array

### Overview

Starting here, we will be combining two key syntaxes, the array and the loop.

We moved from functions, which can process a set amount of data based on parameters we write, to global variables, which are another. possibly larger set of values our programs can also deal with depending on the circumstances.

Combining arrays with loops allows another expansion of the volume of data the program can deal with, and we can write the code in such a way that deals with processing all or every item in an array.

Students who had a difficult time understanding the action of loops repeating over a block may also have a difficult time implementing a loop that runs over an array.

Again, there will be techniques you can demonstrate to students using some of the `script.js` examples, such as iterating over elements of an array using the array's length checked against the `counter` value.

### Code Examples and Discussion Questions

**Question:** This is a sample code snippet of a phone book. Explain what this code does.

**Answer:** This phone book example adds the name (as input) to be stored in the array only if it doesn't already exist.

As an SL, you can also restructure this demonstration by stripping away the `found` check from the sample code, and just having an arbitrary name list example. Then, work with the students to build the check for whether the name already exists (using `found` and `!found`) line by line.

## Look Ahead / Wrap Up

Students will begin working on Project 2: Beat That! by the end of the class.

Given what we have known so far about the different data types, global values and control flow, we will begin building programs that can ask for different kinds of input. Next, we will be looking at techniques for verifying this input.

Additionally, we will be introducing HTML and CSS. Being able to structure and layout their pages, together with peppering their pages with user-friendly feedback, should allow students to embark on exploring customisations on their starter code templates for projects.
