# Lab 1: The Force Awakens
DO NOT READ THIS YET -- this is copied from last year's lab! The instructions will change.

In this lab, we will teach you how to use some HTML, CSS and Javascript.

Written by Richard "Rick" Xu.

## A. Setting up the Upstream
To see the lab in your forked repository, you need to `pull` from what's known as the `upstream`. To set this up, run the command `git remote add upstream https://github.com/rxu18/crimtech-comp-s20.git`. This makes Git know that Rick's repository exists.

Next, run `git pull upstream master`. This fetches all the data for lab 1 and puts them on your computer.

## B. Welcome to Programming in Javascript
Welcome to programming! Javascript is a widely popular language used for web scripting. While it is possible to run Javascript code like you would Java or C code, we usually run the code in the web. Type your code in `test.html` and any responses in `lab1-responses.md`. *Throughout this entire section, Google is your friend*.
1. Open up `test.html` in the browser. You should see a blank page. Now, right click and choose `inspect`. You should see the message `Try typing the command console.log("Hello World!");` in the console.
2. Type that command into the console. What do you see? (If this is your first program, congratulations. You can now call yourself a CS God.)
3. In a programming, we can declare variables. Declare a variable `x`, set it equal to `42`, and `console.log` it.
4. We can also add and subtract variables. Add `378` to `x` and then `console.log` it.
5. Declare another variable `y` and set it equal to your favorite string. Try adding `x` and `y` then logging the output.
6. Try outputing `y.includes("hello")` and `y.repeat(10)`. What do the two functions do?
7. We can declare functions in Javascript! Declare a function `square` that can take in a variable `i` and outputs `i*i`. Then, log `square(5)`.
    * What happens when you call `square(2.5)`? Or `square("hello")`?
    * What happens when you change the variable `i` to `x`?
8. Next, we will introduce the two of the most important concepts in programming: `if`-statements and loops. Change the function `square` so that if the input is not a number, the function returns `-1` instead. You may find googling "if statements" and "javascript find type of variable" helpful.
9. Construct a function `numberString`, that on input `i` a positive whole number, output the string `123...i`. For example, `numberString(10)="12345678910"`. 
    * Your function should not crash when `i` is not a positive whole number. Add some `if`-statements to check!

That was a lot. Give yourself a pat on the back for completing them!

## C. HTML Header
In this section we will be editing the `<head>` section of `yoda.html`. Note that starting this section we are giving you more freedom and somewhat less guidance. As you get deeper into CS, this trend will continue. **Google is your friend:**

> What separates an amateur and professional coder? Amateur coders believe code = algorithm + data structure. Professionals know that code = Google + reading. - Some coding website

1. Add a title to the page. 
2. Add a favicon. Notice that there is a file named `favicon.ico` in the `img/` folder. Link this to the page using the code `<link rel='shortcut icon' type='image/png' href='img/favicon.ico'>`. (Do you understand what the code does?)

After this, your tab should look like this: ![Tab Image](https://raw.githubusercontent.com/rxu18/crimtech-comp-s20/master/lab1/mdimg_/i2.JPG)

## D. HTML Body
In this section we will be editing the `<body>` section of `yoda.html` so Yoda and his quote is on the screen. Be sure to commit often!

1. Add a `<p>` tag with the line "To yoda chat I welcome you. Yes, hmmmmm."
2. Center the text with a `<center>` tag. Your page should look like this: ![Stage 1 of Yoda Chat](https://raw.githubusercontent.com/rxu18/crimtech-comp-s20/master/lab1/mdimg_/i3.JPG)
3. Add one of the images of Yoda into the page with an `<img>` tag. Scale it so that Yoda has a prespecified height.
4. Add in a text box with a somewhat large size. Your page should look like this: ![Stage 2 of Yoda Chat](https://raw.githubusercontent.com/rxu18/crimtech-comp-s20/master/lab1/mdimg_/i4.JPG)

## E. Javascript
In this section we will be writing some plain Javascript that will allow you to talk to Yoda! People seldom write plain Javascripts now, opting for more heavyweight solutions like React and Django. However, plain Javascript is more lightweight. More importantly, React development is 95% Javascript (it uses typescript, which is Javascript with types). So, this lab will be helpful to you.
1. Add in a button that calls the `respond()` function in `response_handler.js`. You will need to add a `<script>` tag in the `<head>` section of the HTML, and set the `onclick` attribute of the button. If you have done this correctly, pressing the buttom will cause `Hello World!` to appear in your console.
2. Add code to the `respond()` function so that it changes the image and text of the page. You do not need use the input box or any fancy control flows yet. You may want to use the function `document.getElementById("some_id")`, `setattribute()` and set an ID for the image and text box.
3. Make the `response()` function log the content of the textbox onto the console.
4. Now, add `if` statements to decide which image and text the page should change to. You should have the following if structure:
    * If there is the word `cute` or `baby` in the textbox, have a picture of Baby Yoda.
    * If there is the word `force` in the textbox, Yoda should be using the force.
        * If there is both `dark` and `force` in the textbox, Yoda should be battling some Sith lord.
    * Yoda should say a random quote from either `std_quotes, dark_quotes, force_quotes`. Baby Yoda has not learned those quotes yet.
    * Yoda loves saying `hmmmmmmmmmmmmm`. We have Yoda print a large, random number of m's.
5. Change `response()` so that it clears the textbox every time we press the button.
6. Right now we have to press the button in order to make Yoda change text. It would be a lot easier if we can just press `enter` to update the page! Search up how to do it on Google, and implement it.

Here is how my website looked after this stage: ![Final Yoda Chat](https://raw.githubusercontent.com/rxu18/crimtech-comp-s20/master/lab1/mdimg_/i6.JPG)

## F. Optional Projects
If you have time and wants to see Yoda become more powerful, try out some of these optional projects.

* You can use CSS to make the page look better. For example: add a background color; make a title for the page and make it look great; make the text bigger; change the font of the text.
* We only have 5 quotes in each category. Add more! As a first idea, put the quotes into files (see `quotes/`) and make the Javascript read the file for a random quote. If you want a more advanced solution, you can find a large list of random inspirational quotes, then use one of the "English to Yoda translator" online to make them look like they come from Yoda.
* You can add some actual "Machine Learning" or "NLP" to the page! Add what is known as "sentiment analysis" to the page by either using an API or a node JS package. This project is a little bigger than the previous entries, but it can be a lot of fun. Talk to me if you want to make it happen.