//Given two strings, firstName and lastName, return a single string in the format "last, first".
/*
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary"
*/
const concatName (firstName, lastName) => `${lastName}, ${firstName}`;
