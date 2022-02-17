# Day 6: Input Validation, HTML & CSS

## Overview

Many students ask the natural question, how can I write my program to deal with the case that the user types in something that doesn't make sense? We will be using some conditionals to help deal with some of these cases. 

We may or may not have introduced the important JavaScript topic of language data types and how to type cast a value (change it from one value type into another). This was when first demonstrating the starter code to students, and pointing out that the value of the user's input will always be a **string**.

We will be formally addressing this topic today, as well as beginning to talk about page layouts and design through HTML and CSS.

## 3.6 Input Validation

### Overview

For SLs who have already discussed type-casting to students, especially from strings to numbers for the user's input, you can still use the class time to revise this topic.

You can also demonstrate the reverse: casting a number back to a string. Students may want to do this for performing string operations on a number. The two common methods for this, and it's up to one's preference which to use:

1. The `String()` method converts its argument into a string. For instance, `String(12345)`.
2. Simply perform the string operation on the number, adding it to an empty string: `'' + 12345`.

Otherwise, you may want to use the time to demonstrate the `isNaN` method. 

For standardisation of instruction, we prefer the use of `Number.isNaN(Number(someValue))` instead of `isNaN(someValue)`. This is because:

* `isNaN` checks if the value is not a number. However, `Number.isNaN` specifically checks if the value is `NaN`. For more about the behaviours, you can refer to the differences here:

```
// returns false for "foo" and "bar"
// while "foo" and "bar" are strings and not numbers,
// "foo" and "bar" do not evaluate to NaN
Number.isNaN("foo");
Number.isNaN("bar");

// returns true
// NaN evaluates to NaN
Number.isNaN(NaN);

// returns true
// "foo" / "bar" evaluates to NaN
// proof, run this in your browser console: "foo" / "bar";
Number.isNaN("foo" / "bar");

// returns true for "foo" and "bar"
// "foo" and "bar" are not numbers
isNaN("foo");
isNaN("bar");

// returns true
// NaN is not a number
isNaN(NaN);

// returns true
// "foo" / "bar" evaluates to NaN,
// and specifically, NaN is not a number
isNaN("foo" / "bar");
```

* While `Number.isNaN` is idiosyncratic in requiring a value cast as a number or evaluating to `NaN`, it will be good practice for students to practise casting values. Thus, students should continue taking this extra step of casting `someValue` using `Number(someValue)`, before performing the check: `Number.isNaN(Number(someValue))`


### Code Examples and Discussion Questions

**Question 1:** Run these 2 lines in the browser console. What is the difference between these 2 lines?

**Answer 1:** The first line is of a string type, while the second line is of a number type.

While it isn't important for students in Basics to know and use the `typeof` operator, you can demonstrate it on the values of the lines just as a proof. You can do so on the browser console this way:

```
typeof '444'; // returns 'string'
typeof 444; // returns 'number'
```

It is also a good opportunity to revise the differences between string and number operations again, by asking students what they can do with string values and what they can do with number values. Hint: `+` works differently on strings and numbers.

**Question 2:** Run these 2 lines in the browser console. What values are the result of these 2 statements?

**Answer 2:** The first line gives `NaN`, and the second line gives the number `888`.

Take the opportunity to ask students why the first line gives `NaN`. We are getting `NaN` because we are attempting to perform a number operation (multiplication) on the string `'papaya'`.

**Question 3:** What does this program do?

**Answer 3:** Checks what the user typed to make sure they typed a number. If they did, consider the user input to be a number in miles, and convert it to kilometres. If not, let the user know to input a number.

Place emphasis on the input validation aspect, for students who may still be unfamiliar with input validation.

**Question 4:** What's the alternative to doing a `return` in this conditional block?

**Answer 4:** This is a tricky question, and it can be structured as a demonstration instead of a question to any particular student. It requires understanding code structure in control flow, and the requirements of having `if ... else` chains, compared to using just `if` conditions.

The alternative is having `if ... else` code blocks instead of a single `if`.

With a single `if` as it is now, you will need an "early `return`", so that the program terminates when `Number(input)` is `NaN`. An "early `return`" might be easier to read because the logical flow of the program doesn't progress below the condition if it's `true`.

With the alternative version using `if` and `else`, you have to indent the main part of the program. In general it's easier to read code that is refactored to be less indented. In very extreme examples of control flow, you might have to nest 10 times, with one condition inside another, inside another, etc.

## 5.1 HTML

### Overview

Starting from HTML and combined with CSS, students should know we are beginning to look into how we can lay pages out, and design them. 

By the end of these 2 sections, they should have the fundamental tools to begin modifying their template starter codes. Do encourage them to experiment with the layout and design of their projects, with Project 2: Beat That! due by the next lesson.

We can follow up the 3.6 Input Validation by using HTML to provide useful feedback messages to users. What kind of input is the system expecting the user to type in?

Do demonstrate and explain the common HTML elements listed on the students' Gitbook view, namely:

1. `<div>`
2. `<p>`
3. `<b>` and `<i>`
4. `<h1>` to `<h6>`
5. `<button>` (you can use the existing Submit button in the starter code)
6. `<input>` (you can use the existing input field in the starter code)
7. `<a>`

There won't be specific code examples in any `script.js` for this section, but you can use the Discussion Questions sub-section below to guide your demonstrations on the starter code home page.

There is an FAQs sub-section below for questions students may be asking ***you***.

### Discussion Questions

**Question 5:** I am building a program that converts a temperature from Celsius to Fahrenheit. How should I change the text next to the input box such that the user knows to input a temperature number in Celsius?

**Answer 5:** Students can choose to display this feedback text in the input box label, or within the grey output box itself.

Should the student decide to use the input box label, they will have to go into `index.html`, find the line that says `<p>Input:</p>` and change it to `<p>Enter the temperature in Celsius:</p>`.

The alternative is the grey box, and you can change the feedback text by filling this up: `<div class="output-div" id="output-div">Enter the temperature in Celsius above!</div>`. One benefit to using the grey output box is that the message inside can change depending on the input, assuming that `myOutputValue` is modified on different input. 

In the same sense, you are setting the original text in the grey output box when the page loads, before any interaction begins through an input.

**Question 6:** How will I add an image to the starter code's white container?

**Answer 6:** In the starter code home page, you can do so like this:

```
<!-- The <div> tag defines a division or a section in an HTML document, and is commonly use as a "container" for nested HTML elements. -->
<div class="container">
  <h2>Starter Code</h2>
  <!-- img tag adds an image, with the URL in the src attribute -->
  <img src="https://www.wonder-tonic.com/geocitiesizer/images/genie.gif" />
  <div class="instructions-text">
    <p>
      The starter code in the home page is your playground. Feel free to
      experiment or demonstrate any designs or code here.
    </p>
  </div>
  <!-- The <hr> tag represents a horizontal rule. It is used if you want to add line dividers across your page. -->
  <hr />
  <!-- The <p> tag defines a paragraph element. -->
  <p>Input:</p>
  <!-- The self-closing <input /> tag represents a field for a user to enter input. -->
  <input id="input-field" />
  <!-- The self-closing <br /> tag represents a line break - a line's worth of spacing before dispalying the next element. -->
  <br />
  <!-- The <button> tag represents.. you guessed it! a button. -->
  <button id="submit-button">Submit</button>
  <p>Output:</p>
  <div class="output-div" id="output-div"></div>
</div>
```

Do demonstrate how you can add images through external paths (as shown above), or doing static file uploads with CodeSandbox. You can try it out with the instructions here: [https://codesandbox.io/docs/uploading
](https://codesandbox.io/docs/uploading)

### FAQs

**Q:** `<div>` and `<p>` look structurally similar. Should we use them interchangably as a container for text?

**A:** Both `<div>` and `<p>` can be used to contain text. Their differences are:

* Major browsers usually add a bottom margin to `<p>`, so that paragraphs are spaced out for readability.
* A parent `<div>` can contain children `<div>` elements. However, `<p>` cannot contain another `<p>` element, ie. you can't nest `<p>`.
* Semantically, `<p>` refers to paragraphs, while `<div>` are just generic page divisions. Good semantics should be applied for accessibility: screen readers will inform for the visually impaired will inform users if the section they are interpreting is a paragraph, marked by the `<p>` tag.

For inculcating good practice, HTML should always be structured semantically. If a paragraph of text is meant to be in a page division, you can always structure the paragraph as a child of said page division:

```
<div>
  <p>
    Some paragraph.
  </p>
</div>
```

If the text isn't meant to be structured like a paragraph, like a single line or a single word, using a `<div>` is fine.

## 5.2 Cascading Style Sheets (CSS)

### Overview

Again, there won't be specific code examples here in `script.js`. Instead, do demonstrate the common styling they will employ in designing their project templates:

* Changing colour of text
* Changing the background (color or image) of the container, or the page itself
* Changing the color, type or radius of borders in `<div>`
* `width` and `height` changes to images (if it's demonstrated in the HTML module) or `<div>`.

Ideally, do these on the provided root `styles.css` in CodeSandbox. You may want to remind students for their project, they will have to use the `styles.css` in the relevant project folders.

There is an FAQs sub-section below for questions students may be asking ***you***.

### FAQs

**Q:** I have an image here. Even though it is only occupying a small percentage of the page width, there's whitespace for the rest of the line. I can't add another image to the right of it. How do I circumvent this?

**A:** This is a `display` issue. It is likely that the images are wrapped in block elements like `<div>`, or accidentally have `display: block` styled into them. This is because `<img>` elements by default have `display: inline` applied, and students should not have any problems adding them next to one another width-wise.

If the images are wrapped in block elements, like so:

```
<div>
  <img src="/path/to/image1.jpg">
</div>
<div>
  <img src="/path/to/image2.jpg">
</div>
```
Do request the students to remove the images from the `<div>`, and put them together:

```
<img src="/path/to/image1.jpg">
<img src="/path/to/image2.jpg">
```

If `display: block;` is accidentally added to the styling of the image like so:

```
img {
  display: block;
}
```

Simply remove the line with `display: block;` and the `img` should default to `inline` display.

Ask for the reason if the students are deliberately setting `display: block` to images: it is likely they want to set the vertical margin values of said elements, using `margin-top` or `margin-bottom`. For accessibility to `margin-top` and `margin-bottom`, you will have to set the image's display to `display: inline-block` instead of using the `img` default `display: inline`.

**Q:** I have spent a long time styling this page, to set the x and y position of every item on the page. Is CSS and positioning supposed to be this tedious?

**A:** Have a look at the student's CSS. It is likely that they have tried picking up CSS positioning on their own, and abused `position: absolute` or `position: relative` and set the `top`, `left`, `right`, or `bottom` properties of every element manually.

Do inform them that `position: absolute` or `position: relative` is not required for positioning elements. Firstly, ensure that the order of the elements in the HTML file is structured like how they would imagine they want their layout - top to bottom, left to right. Lastly, good use of `margin` and `padding` between and in elements usually gets the job done.

The most common use case for complex positioning is only to stack and overlap elements on top of one another.

**Q:** I have a HTML element with a class and ID. Both the class and the ID are styled. Somehow the ID styling overrides the class styling. What gives?

**A:** This is a CSS specificity question. While emphasis isn't given to CSS specificities for Basics, it's worth knowing this to resolve students' design blockers when using IDs and classes.

CSS considers an ID selector to be more specific than a class selector, which in turn is more specific than a tag selector. Consider the following HTML:

```
<p id="hello" class="hello">Hello World!</p>
```

and the following CSS:

```
#hello {
  color: blue;
}

.hello {
  color: red;
}
```

The text "Hello World!" will be blue, even though the `#hello` selector is before the `.hello` selector (rule order). This is because `#hello` is more specific than `.hello`.

## Look Ahead / Wrap Up

Each new syntax and concept we see the amount of data our programs are capable are handing grows. Also, we have become capable of basic layout and design to render said data.

Next we'll see the last new JavaScript data structure we'll cover in Basics. This is a new kind of data that, similar to arrays is a collection of single pieces of data - objects. Objects are special because they are a collection of different types of data.