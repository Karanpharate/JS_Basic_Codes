//Write a function that validates whether two strings are identical. Make this validator case insensitive.

/*
match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false

match("venom", "VENOM") ➞ true

match("mask", "mAskinG") ➞ false
*/
const match = (s1, s2) => (s1.toLowerCase()=== s2.toLowerCase()) ? true : false;
