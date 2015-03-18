/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * node.js
 *
 */


// Eloquent JS
// Chapter 4 Data Structures: Objects and Arrays

(function() {

	// data sets
	var listOfNumbers = [2, 3, 5, 7, 11];
	console.log(listOfNumbers[1]);
	// 3
	console.log(listOfNumbers[1 -1]);
	// 2

	// methods
	var doh = "Doh";
	console.log(typeof doh.toUpperCase);
	// function
	console.log(doh.toUpperCase());
	// DOH

	var mack = [];
	mack.push("Mack");
	mack.push("the", "Knife");
	console.log(mack);
	// [ 'Mack', 'the', 'Knife' ]
	console.log(mack.join(" "));
	// Mack the Knife
	console.log(mack.pop());
	// Knife
	console.log(mack);
	// [ 'Mack', 'the' ]

}());

