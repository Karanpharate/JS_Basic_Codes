//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
/*
checkAllEven([1, 2, 3, 4]) ➞ false

checkAllEven([2, 4, 6]) ➞ true

checkAllEven([5, 6, 8, 10]) ➞ false

checkAllEven([-2, 2, -2, 2]) ➞ true

*/

function checkAllEven(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            return false;
        } else {
            return true;
        }
    }
}
