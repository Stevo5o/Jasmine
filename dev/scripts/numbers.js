/*globals define*/
define(function() {
	'use strict';

	var self = {};

	self.add = function add() {
		var operands = Array.prototype.slice.call(arguments),
		total = 0;

		operands.forEach(function(value) {
			total += value;
		});
		return total;	
	}

	return self;
});