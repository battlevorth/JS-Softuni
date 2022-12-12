function printWordOccurrances(input) {
    let wordOccurrances = new Map();

    let wordsToBeTracked = input.shift().split(` `);
    for (const currWord of wordsToBeTracked) {
        let count = 0;
        for (let word of input) {
            if (word === currWord) {
            count++;
            }
        }
        wordOccurrances.set(currWord, count);
}

    let sorted = Array.from(wordOccurrances).sort((valueA, valueB) => valueB[1] - valueA[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
printWordOccurrances([
    'this sentence the',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])