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
		if (n == 0)
			return 1;
		else {
			return fac(n - 1) * n;
		}
	}
	console.log(fac(8));

}()); // end anon func