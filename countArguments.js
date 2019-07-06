//Create a function that returns the number of argument it was called with.
/*
numArgs() ➞ 0

numArgs("foo") ➞ 1

numArgs("foo", "bar") ➞ 2

numArgs(true, false) ➞ 2

numArgs({}) ➞ 1
*/

function numArgs() {
    count = 0;
    for (let i = 0; i < arguments.length; i++) {
        count += 1;
    }
    return count;
}
