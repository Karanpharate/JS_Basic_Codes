/*
Create a function that takes three number arguments — one number as an
input and two additional numbers representing the endpoints of a closed
range — and return the number limited to this range.

If the number falls within the range, the number should be returned.
If the number is less than the lower limit of the range, the lower limit should be returned.
If the number is greater than the upper limit of the range, the upper limit should be returned.

examples:
limitNumber(5, 1, 10) ➞ 5

limitNumber(-3, 1, 10) ➞ 1

limitNumber(14, 1, 10) ➞ 10

limitNumber(4.6, 1, 10) ➞ 4.6
*/
const limitNumber = (num, rangeLow, rangeHigh) => num>rangeHigh ? rangeHigh: num<rangeLow ? rangeLow: num;
