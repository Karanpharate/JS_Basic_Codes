//Write a function to check whether an array contains a particular element.
/*check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
*/

function check(arr, el) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return true;
        }
    }
    return false;
}
