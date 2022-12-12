function printWordOccurrances(input) {
  let wordOccurrances = new Map();

  for (let word of input) {
    let quantity = 1;
    if (wordOccurrances.has(word)) {
        quantity += wordOccurrances.get(word);
    }
    wordOccurrances.set(word,quantity);
  }

  let sorted = Array.from(wordOccurrances).sort((valueA, valueB) => valueB[1] - valueA[1]);

  for (const kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}
printWordOccurrances([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
