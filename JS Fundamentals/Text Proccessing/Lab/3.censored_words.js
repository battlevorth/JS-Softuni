function censored(text, word) {
    let result = text;
    while (result.includes(word)) {
        result = result.replace(word, '*'.repeat(word.length))
    }
    console.log(result);
}
censored('A small sentence with some words', 'small')