//Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.
/*
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
*/

const volumeOfBox = (sizes) => sizes.height * sizes.width * sizes.length;
