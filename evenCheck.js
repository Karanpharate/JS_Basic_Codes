//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
/*
checkAllEven([1, 2, 3, 4]) ➞ false

checkAllEven([2, 4, 6]) ➞ true

checkAllEven([5, 6, 8, 10]) ➞ false

checkAllEven([-2, 2, -2, 2]) ➞ true

*/

const checkAllEven = (arr) => {
  let i;
    for (i = 0; i < arr.length; i++) {
        return (arr[i] % 2 === 1) ? false : true;
    }
}
