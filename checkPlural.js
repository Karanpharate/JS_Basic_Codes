//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
/*
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false
*/

function isPlural(word) {
	return word.endsWith("s");
}
