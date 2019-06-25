//Create a function that takes an array of numbers. Return the largest number in the array.
/*
findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600

findLargestNum([1000, 1001, 857, 1]) ➞ 1001

*/
function findLargestNum(arr) {
    let largest = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
