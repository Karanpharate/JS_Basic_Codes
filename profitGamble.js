//Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
/*
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
*/

const profitableGamble = (prob, prize, pay) => prob * prize > pay;
