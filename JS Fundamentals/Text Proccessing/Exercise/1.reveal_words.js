function printWords(words, sentance) {
  let printSentance = sentance;
  let wordsToBeRevealed = words.split(", ");
  let charToBeReplaced = "*";
  for (let word of wordsToBeRevealed) {
    let wordAsChars = charToBeReplaced.repeat(word.length);
    printSentance = printSentance.replace(wordAsChars, word);
  }
  console.log(printSentance);
}
printWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
