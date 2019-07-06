/*Write a function that partitions the array into two subarrays:
one with all even integers, and the other with all odd integers.
Return your result in the following format:

evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]

evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]

evenOddPartition([]) ➞ [[], []]
*/
const evenOddPartition = (arr) => {
    let a = [], b = [], j = 0, k = 0, i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            a[k] = arr[i];
            k++;
        } else {
            b[j] = arr[i];
            j++;
        }
    }
    return [a, b];
}
