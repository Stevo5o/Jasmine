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
		console.log(listOfNumbers[1 - 1]);
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

		// objects
		var day1 = {
			squirrel: false,
			events: ["work", "touched tree", "pizza", "running", "coding"]
		};
		console.log(day1.squirrel);
		// 	false	
		console.log(day1.wolf);
		// undefined	
		day1.wolf = false;
		console.log(day1.wolf);
		// false

		// delete operator - not common
		var anObject = {
			left: 1,
			right: 2
		};
		console.log(anObject.left);
		// 1
		delete anObject.left;
		console.log(anObject.left);
		// undefined
		console.log("left" in anObject);
		// false
		console.log("right" in anObject);
		// true

		// object example
		var journal = [{
			events: ["work", "touched tree", "pizza", "swimming", "learning"],
			squirrel: false
		}, {
			events: ["work", "ice cream", "cabbage", "seafood lasagna", "touched tree", "brushed teeth"],
			squirrel: false
		}, {
			events: ["weekend", "cycling", "break", "peanuts", "beer"],
			squirrel: true
		}];

		function hasEvent(event, entry) {
			return entry.events.indexOf(event) !== -1;
		};

		function tableFor(event, journal) {
			var table = [0, 0, 0, 0];
			for (var i = 0; i < journal.length; i++) {
				var entry = journal[i],
					index = 0;
				if (hasEvent(event, entry)) {
					index += 1;
				}
				if (entry.squirrel) {
					index += 2;
				}
				table[index] += 1;
			}	
			return table;		
		}
// console.log(tableFor("pizza", JOURNAL));

// mutability
var object1 = {
	value: 10
};
var object2 = object1;
var object3 = {
	value: 10
};

console.log(object1 === object2);
// true
console.log(object1 === object3);
// false

object1.value = 15;
console.log(object1.value);
// 15
console.log(object3.value);
// 10

// lycanthrope’s log
var journal = [];

function addEntry(events, didTurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didTurnIntoASquirrel
	});
};

addEntry(["work", "touched tree", "pizza", "swimming", "learning"], false);
addEntry(["work", "ice cream", "cabbage", "seafood lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// computing correlation
function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[1] + table[3]) *
			(table[0] + table[2]));
};

console.log(phi([76, 9, 4, 1]));
// 0.06859943405700354



}());