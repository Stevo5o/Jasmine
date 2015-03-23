/*globals define, describe*/
define(['numbers'], function(numbers) {
	'use strict';

	describe('The numbers module', function() {
		describe('The add method', function() {
			it('should accept one or more numberical arguments and return the sum of them', function() {
				// triple AAA test pattern
				// arrange 
				var output,
					input1 = 1,
					input2 = 2;

				// act
				output = numbers.add(input1, input2);

				// assert
				expect(output).toEqual(3);
				expect(output).not.toEqual(4);
			});
		});
	});
});