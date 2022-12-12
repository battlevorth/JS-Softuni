function printWords(text) {
  const words = text.split(" ");
  for (let currWord of words) {
    let isValid = false;
    if (currWord.startsWith("#") && currWord.length > 1) {
      currWord = currWord.slice(1);
      for (let letter of currWord) {
        let letterCode = letter.charCodeAt();
        if (
          (letterCode >= 65 && letterCode <= 90) ||
          (letterCode >= 97 && letterCode <= 122)
        ) {
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) {
      console.log(currWord);
    }
  }
}
printWords('The symbol # is known #variously in English-speaking #regions as the #number sign');
