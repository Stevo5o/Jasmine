/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies: node.js, load.js, jacques_journal.js, 04_data.js
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

	// mutability
	var object1 = {
		value: 10
	};
	var object2 = object1;
	var object3 = {
		value: 10
	};

	console.log(object1 == object2);
	// true
	console.log(object1 == object3);
	// false

	object1.value = 15;
	console.log(object1.value);
	// 15
	console.log(object3.value);
	// 10

	// adding and removing things at the start of an array are called unshift and shift
	var todoList = [];

	function remeberTo(task) {
		todoList.push(task);
	};

	function whatIsNext() {
		return todoList.shift();
	};

	function urgentlyRemeberTo(task) {
		todoList.unshift(task);
	};

	console.log([1, 2, 3, 2, 1].indexOf(2));
	// 1
	console.log([1, 2, 3, 2, 1].lastIndexOf(2));
	// 
	console.log([0, 1, 2, 3, 4].slice(2, 4));
	// [ 2, 3 ]
	console.log([0, 1, 2, 3, 4].slice(2));
	// [ 2, 3, 4 ]

	function remove(array, index) {
		return array.slice(0, index)
			.concat(array.slice(index + 1));
	};
	console.log(remove(["a", "b", "c", "d", "e"], 2));
	// [ 'a', 'b', 'd', 'e' ]

	// strings and their properties
	var myString = "Fido";
	myString.myProperty = "value";
	console.log(myString.myProperty);
	// undefined

	console.log("coconuts".slice(4, 7));
	// nut
	console.log("coconuts".indexOf("u"));
	// 5

	console.log("one two three".indexOf("ee"));
	// 11
	console.log("  okay \n ".trim());

	var string = "abc";
	console.log(string.length);
	// 3
	console.log(string.charAt(0));
	// a
	console.log(string[1]);
	// b

	// the arguments object
	function noArguments() {
		noArguments(1, 2, 3); // this is ok
		function threeArguments(a, b, c) {}
		threeArguments(); // and so is this
	}

	function argumentCounter() {
		console.log("You gave me", arguments.length, "arguments");
	}
	argumentCounter("straw man", "Tautology", "Ad hominem");
	// You gave me 3 arguments

	// 
	var journalDayOne = [];

	function addEntry(squirrel) {
		var entry = {
			events: [],
			squirrel: squirrel
		};
		for (var i = 1; i < arguments.length; i++) {
			entry.events.push(arguments[i]);
		}
		journalDayOne.push(entry);
	}
	addEntry(true, "work", "touched tree", "pizza", "running", "computer games");

	console.log(journalDayOne);
	// [ { events: [ 'work', 'touched tree', 'pizza', 'running', 'computer games' ], squirrel: true } ]

	// the math object
	function randomPointOnCircle(radius) {
		var angle = Math.random() * 2 * Math.PI;
		return {
			x: radius * Math.cos(angle),
			y: radius * Math.sin(angle)
		};
	};
	console.log(randomPointOnCircle(2));
	// { x: 1.9282333451279665, y: -0.5309577824428345 }

	console.log(Math.floor(Math.random() * 10));
	// 8

	// the global object
	// in browsers, the global scope object is stored in the window variable.
	// var myVar = 10;
	// console.log("myVar" in window);
	// // true
	// console.log(window.myVar);
	// 10
}());

(function() {
	// object example
	var JOURNAL = [{
		"events": ["work", "exercise", "pizza"],
		"squirrel": false
	}, {
		"events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
		"squirrel": false
	}, {
		"events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
		"squirrel": false
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
	console.log(tableFor("nachos", JOURNAL));
	// [ 2, 1, 0, 0 ] ? incorrect

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

	// objects as maps
	// potential problems using objects like this - Chapter 6
	var map = {};

	function storePhi(event, phi) {
		map[event] = phi;
	};

	storePhi("pizza", 0.069);
	storePhi("touched tree", -0.081);
	console.log("pizza" in map);
	// true
	console.log(map["touched tree"]);
	// -0.081

	for (var event in map) {
		console.log("The correlation for '" + event +
			"' is " + map[event]);
	};
	// The correlation for 'pizza' is 0.069
	// The correlation for 'touched tree' is -0.081

	function gatherCorrelations(journal) {
		var phis = {};
		for (var entry = 0; entry < journal.length; entry++) {
			var events = journal[entry].events;
			for (var i = 0; i < events.length; i++) {
				var event = events[i];
				if (!(event in phis)) {
					phis[event] = phi(tableFor(event, journal));
				}
			}
		}
		return phis;
	};
	var correlations = gatherCorrelations(JOURNAL);
	console.log(correlations.pizza);
	// NaN ? incorrect
}());

// the final analysis
(function() {
	// load dependencies
	require("./code/load")("code/jacques_journal.js", "code/chapter/04_data.js");

	for (var event in correlations) {
		var correlation = correlations[event];
		if (correlation > 0.1 || correlation < -0.1)
			console.log(event + ": " + correlation);
	}
	// weekend: 0.13719886811400708
	// brushed teeth: -0.3805211953235953
	// candy: 0.12964074471043288
	// work: -0.13719886811400708
	// spaghetti: 0.242535625036333
	// reading: 0.11068280537595927
	// peanuts: 0.59026798116852
	for (var i = 0; i < JOURNAL.length; i++) {
		var entry = JOURNAL[i];
		if (hasEvent("peanuts", entry) &&
			!hasEvent("brushed teeth", entry)) {
			entry.events.push("peanut teeth", JOURNAL);
		}
	}
	console.log(phi(tableFor("peanut teeth", JOURNAL)));
	// 1
}());