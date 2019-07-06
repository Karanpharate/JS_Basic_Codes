//Create a function that accepts an array and returns the last item in the array.

/*
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
*/

function getLastItem(arr) {
    return arr.pop();
}
