/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 *
 */


// Eloquent JS
// var theNumber = Number(prompt("Pick a number", ""));
// if (!isNaN(theNumber))
//     alert("Your number is the square root of " +
//             theNumber * theNumber);
// else
//     alert("Hey. Why didn't you give me a number?");

// console.log(Math.max(8, 4));
// console.log(Math.min(8, 4) + 100);

// for (var i = 0; i <= 12; i++) {
// 	console.log(i);
// }

// var result = 1;
// var counter = 0;
// while (counter < 10) {
// 	result = result * 2;
// 	counter++;
// }
// console.log(result);

// var result = 1;
// for (var counter = 0; counter < 10; counter++) {
// 	result = result * 2;

// }
// console.log(result);

// for (var current = 20; current >= 20; current++) {
// 	if (current % 7 == 0) {
// 		break;
// 	}
// 	console.log(current);
// }

// 2.1 Looping a triangle
// for (var line = "#"; line.length < 8; line += "#") {
// 	console.log(line);
// }

// 2.2 FizzBuzz
// for (var n = 1; n <=100; n++) {
// 	var output = "";
// 	if(n % 3 == 0) {
// 		output += "Fizz"
// 	}
// 	if(n % 5 == 0 ) {
// 		output += "Buzz"
// 	}
// 	console.log(output || n)
// }

// 2.3 chess board
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
	for(var x = 0; x < size; x++) {
		if ((x+y) % 2 == 0) {
			board += " ";
		}
		else {
			board += "#";
		}		
	}
	board += "\n";
}

console.log(board);