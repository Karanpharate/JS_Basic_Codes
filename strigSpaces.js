//Create a function that returns true if a string contains any spaces.
/*

hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false

*/
function hasSpaces(str) {
    if (str.includes(' ')) {
        return true;
    } else {
        return false;
    }
}
