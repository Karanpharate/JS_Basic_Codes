/*
Create a function that takes a number (step) as an argument
and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
*/
const matchHouses = (step) => {
	return step === 0 ? 0 : 5 * step + 1;
}
