/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 *
 */

// immediately invoked anonymous function
(function () {

    // Eloquent JS
    var theNumber = Number(prompt("Pick a number", ""));
    if (!isNaN(theNumber))
        alert("Your number is the square root of " +
                theNumber * theNumber);
    else
        alert("Hey. Why didn't you give me a number?");

}()); // end anon func