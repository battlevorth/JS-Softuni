function printWordOccurrances(input) {
    let wordOccurrances = new Map();
    let inputAsArray = [input]

    let wordsToBeTracked = inputAsArray[0].split(` `);
        for (let word of wordsToBeTracked) {
            word = word.toLowerCase();
            let quantity = 1;
            if (wordOccurrances.has(word)) {
            quantity += wordOccurrances.get(word);
            }
            wordOccurrances.set(word, quantity);
        }
    
    let sorted = Array.from(wordOccurrances).sort((valueA, valueB) => valueB[1] - valueA[1]);

    let printCommand = ``;
    for (const kvp of sorted) {
        if (Number(kvp[1] % 2 !== 0)) {
            printCommand += `${kvp[0]} `
        }
    }
    console.log(printCommand);
}
printWordOccurrances('Cake IS SWEET is Soft CAKE sweet Food')