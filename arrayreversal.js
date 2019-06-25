//Write a function to reverse an array.
/*
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
*/
function reverse(arr) {
    j = 0;
    let a = [];
    for (i = arr.length - 1; i >= 0; i--) {
        a[j] = arr[i];
        j++;
    }
    return a;
}
