function wordOccurances(text, word) {
    let splitedText = text.split(' ');
    let count = 0;
    for (const line of splitedText) {
        if (line === word) {
            count++
        }
    }
    console.log(count);
}
wordOccurances('This is a word and it also is a sentence',
'is')