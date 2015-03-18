/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * node.js
 *
 */


// Eloquent JS
// Chapter 3 Functions

var square = function(x) {
	return x * x;
};

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

// parameters and scopes
var x = "outside";

var f1 = function() {
	var x = "inside f1";
};
f1();
console.log(x);
// outside

var f2 = function() {
	x = "inside f2";
};
f2();
console.log(x);
// inside f2

// nested scope
var landscape = function() {
	var result = "";
	var flat = function(size) {
		for (var count = 0; count < size; count++) {
			result += "_";
		}
	};
	var mountain = function(size) {
		result += "/";
		for (var count = 0; count < size; count++) {
			result += "'";
		}
		result += "\\";
	};

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
};

console.log(landscape());
// ___/''''\______/'\_

// optional arguments
(function() {
	function power(base, exponent) {
		if (exponent == undefined) {
			exponent = 2;
		}
		var result = 1;
		for (var count = 0; count < exponent; count++) {
			result *= base;
		}
		return result;
	};
	console.log(power(4));
	// 16
	console.log(power(4, 3));
	// 64
}());

// console.log function outputs all of the values it is given
console.log("R", 2, "D", 2);

// closure 
function wrapValue(n) {
	var localVariable = n;
	return function() {
		return localVariable;
	};
};

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// 1
console.log(wrap2());
// 2

function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
};

var twice = multiplier(2);
console.log(twice(5));
// 10

// recursion
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
};

console.log(power(2, 3));
// 8

function findSolution(target) {
	function find(start, history) {
		if (start == target) {
			return history;
		} else if (start > target) {
			return null;
		} else {
			return find(start + 5, "(" + history + " + 5)") ||
				find(start * 3, "(" + history + " * 3)");
		}
	};
	return find(1, "1");
};
console.log(findSolution(13));
// (((1 * 3) + 5) + 5)

// growing functions
function printFarmInventory(cows, chickens) {
	var cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(cowString + " Cows");
	var chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(chickenString + " Chickens");
};
printFarmInventory(7, 11);
// 007 Cows
// 011 Chickens

// add pigs
(function() {
	function zeroPad(number, width) {
		var string = String(number);
		while (string.length < width) {
			string = "0" + string;
		}
		return string;
	};

	function printFarmInventory(cows, chickens, pigs) {
		console.log(zeroPad(cows, 3) + " Cows");
		console.log(zeroPad(chickens, 3) + " Chickens");
		console.log(zeroPad(pigs, 3) + " Pigs");
	};
	printFarmInventory(7, 16, 3);

}());

// Chapter 3 excercises
(function() {
	// 3.1 min
	function min(a, b) {
		if (a < b) {
			return a;			
		} else {
			return b;			
		}
	};
	console.log(min(10, -10));
	// -10

	// 3.2 isEven
	function isEven(n) {
		if ( n === 0)
		{
			return true;
		}
		else if (n === 1) {
			return false;
		}
		else if (n < 0) {
			return isEven(-n);
		}
		else {
			return isEven(n - 2);
		}
	};
	console.log(isEven(50));
	// true
	console.log(isEven(75));
	// false
	console.log(isEven(-1));
	// false

	// 3.3 Bean counting
	// how many uppercase “B” characters are in the string
	// second argument that indicates the character that is to be counted 
	function countChar(string, ch) {
		var counted = 0;
		for(var i = 0; i < string.length; i++) {
			if(string.charAt(i) === ch)
				counted++;
		}
		return counted;
	};
	function countBs( string ) {
		return countChar(string, "B");		
	};
	console.log(countBs("BBC"));
	// 2
	console.log(countChar("kakkerlak", "k"));
	// 4
}());