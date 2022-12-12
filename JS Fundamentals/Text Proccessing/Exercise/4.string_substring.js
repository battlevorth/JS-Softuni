function word(word, text) {
  let textToLower = text.toLowerCase();
  let splitedText = textToLower.split(" ");
  for (const currWord of splitedText) {
    if (currWord === word.toLowerCase()) {
      return console.log(word);
    }
  }
  console.log(`${word} not found!`);
}
word("python4", "02139120 python4 12039213");
