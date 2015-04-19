/*globals define, describe, it, beforeEach*/
define(['numbers'], function(numbers) {
    'use strict';

    describe('The numbers module', function() {
        describe('The add method', function() {
            var output;

            beforeEach(function() {
                this.numberInput1 = 1;
                this.numberInput2 = 2;
                this.stringInput1 = '1';
                this.stringInput2 = 'oops';

            });

            it('should accept one or more numberical arguments and return the sum of them', function() {
                // act
                output = numbers.add(this.numberInput1, this.numberInput2);

                // assert
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });

            it('should try to parse an integer when a string is passed to the method', function() {
                output = numbers.add(this.numberInput1, this.numberInput1);

                expect(output).toEqual(2);
            });

            it('should ignore the agrument if it is not a parseable string', function() {
                output = numbers.add(this.numberInput1, this.stringInput2);

                expect(output).toEqual(1);
            })
        });
    });
});
