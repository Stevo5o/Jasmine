/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 *
 */


// Eloquent JS
// Chapter 3 Functions

var square = function(x) {
	return x * x;
}

console.log(square(5));

var makeNoise = function() {
	console.log("Pling!");
};

makeNoise();

var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++) {
		result *= base;		
	}
	return result;
};

console.log(power(2, 10));