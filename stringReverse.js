function longestEvenWord(sentence) {
// Write your code here
let longWord = 0,
  wordArray = sentence.split(' ');
for (let i = 0; i < wordArray.length; i++) {
  if (wordArray[i].length > longWord && wordArray[i].length % 2 == 0) {
    longWord = wordArray[i].length;
  }
}
for (let i = 0; i < wordArray.length; i++) {
if (wordArray[i].length == longWord) {
return wordArray[i]
}
}
return '00';
}
