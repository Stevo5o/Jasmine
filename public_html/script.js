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
	// var journal = [];

	// function addEntry(events, didTurnIntoASquirrel) {
	// 	journal.push({
	// 		events: events,
	// 		squirrel: didTurnIntoASquirrel
	// 	});
	// };

	// addEntry(["work", "touched tree", "pizza", "swimming", "learning"], false);
	// addEntry(["work", "ice cream", "cabbage", "seafood lasagna", "touched tree", "brushed teeth"], false);
	// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

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
