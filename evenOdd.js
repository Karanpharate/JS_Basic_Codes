//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
/*
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even"

isEvenOrOdd(19) ➞ "odd"
*/
const isEvenOrOdd = (num) => (num % 2 === 0) ? "even" : "odd";
