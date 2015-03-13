/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 *
 */

// immediately invoked anonymous function
(function() {

	// Eloquent JS
	var total = 0,
		count = 1;
	while (count <= 10) {
		total += count;
		count++;
	}
	console.log('Total:' + total);

	function fac(n) {
		if (n === 0)
			return 1;
		else {
			return fac(n - 1) * n;
		}
	}
	var result = fac(8);
	console.log(typeof result + ": " + result);
	console.log(result > total);
	console.log(result < total);

	// campare strings 
	console.log("Aardvark" < "Zoroaster")

	// true middle val
	console.log(true ? 1 : 2);
	// false right val
	console.log(false ? 1 : 2);

}()); // end anon func