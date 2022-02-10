// Loops

// 3.4 Loops

// Q1: What does the below code do? (Have the student answer before pasting this code into the dev tools console).
var counter = 0;
while (counter < 10) {
  console.log("hello " + counter);
  counter = counter + 1;
}

// Q2: How do we make it such that we see the console.log 100 times?
// ANS:
var counter = 0;
while (counter < 100) {
  console.log("hello " + counter);
  counter = counter + 1;
}

// Q3: (Starting from the original code) What if we set the starting value of `counter` to two instead of zero? What happens if the user types in a value above two?
// ANS: We will see console.log 8 times instead if the user types in 2. Depending on what our user sets it to, the number of times our loop runs will be affected accordingly.

// Q4: (Starting from the original code where while (counter < 10)) What if we changed counter to start from 10?
// ANS: The while loop would not even run once.

// Q5: (Starting from the original code) What if we swapped the positions of the console.log and the counter = counter + 1, what changes?
// ANS: We would see the counter in the console log start from 1 and end at 10 as opposed to starting from 0 and ending at 9.

// Q6: (Starting from the original code) What if our while statement was while (counter <= 10)? What would we see?
// ANS: We would see the console.log counter start from 0 and end at 10 - giving us 11 console.logs in total.

// Q7: (Starting from the original code) What if we increment the value of `counter` by three instead of one? counter = counter + 3;

// Q8: What happens if we remove the line that increments counter in the while loop?
// ANS: Infinite loop. Don't forget it.

// Q9: What are the 3 things that constitute a while loop?
// ANS: 1. We have to have a counter with an initial value set.
// 2. We need a while statement, and in the parenthesis, we need a condition where the statement is true until a certain point where it becomes false - that is when our loop breaks.
// 3. We need something that works towards turning our true statement eventually into a false statement during every iteration of our loop. For this example, we increment our counter every loop.

// Q10: What does the below code do? (You can be more specific for certain scenarios, like asking if input was less than 5 what would we expect vs if our input was more than 5.)
var main = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    if (counter < 5) {
      myOutputValue = myOutputValue + "yes";
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }
  return myOutputValue;
};
// ANS: We will get at most 5 yes' in our outputvalue, and if our input was more than 5, the rest afterwards will be no's.

// Q11: What happens if the comparison is reversed? `if (counter > 5) {`
var main = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    if (counter > 5) {
      myOutputValue = myOutputValue + "yes";
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }
  return myOutputValue;
};
// ANS: We get up to 5 no's and after that it will be all yes'.

// Q13: What does the below code do?
var main = function (input) {
  var myOutputValue = "";

  var counter = 0;
  while (counter < input) {
    if (counter % 2 === 0) {
      myOutputValue = myOutputValue + "yes";
      // Otherwise, add "no" to output
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }

  return myOutputValue;
};
// ANS: We will get alternating yes and no depending on if the counter was equal or odd at the time.

// Q14: How can we detect even numbers from the `% 2`?
// ANS: Every even number will have a remainder of 0. Odd numbers will have a remainder of 1. `x % 2 == 0` means it's divisible by 2 and therefore even.

// Q15: Can we call a function inside a loop? (refer to the example code)
// ANS: Yes. All the control flow syntax is combinable. A loop can call a function. A function can have a loop inside. A conditional can be inside a loop. The most difficult part is deciding which to use!