// 3.6: INPUT VALIDATION
// QUESTION 1: Run these 2 lines in the browser console. What is the difference between these 2 lines?
'444';
444;

// QUESTION 2: Run these 2 lines in the browser console. What values are the result of these 2 statements?
444 * 'papaya';
444 * 2;

// QUESTION 3: What does this program do?
var main = function (input) {
  var miles = Number(input);

  // QUESTION 4: What's the alternative to doing a `return`
  // in this conditional block?
  if (Number.isNaN(Number(input))) {
    return 'sorry please enter a number.';
  }

  var kilometers = miles * 1.6;
  var myOutputValue = 'Your input in kilometers is: ' + kilometers;
  return myOutputValue;
};