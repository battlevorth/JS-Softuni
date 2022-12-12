function emojiDetector(input) {
    let digitsPattern = /\d/g;
    let emojiPattern = /([:]{2}|[*]{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let digits = input[0].match(digitsPattern);
    let emojies = input[0].matchAll(emojiPattern);
    let coolTreshold = 1;
    for (const digit of digits) {
        coolTreshold *= Number(digit);
    }
    let emojiCount = input[0].match(emojiPattern);
    console.log(`Cool threshold: ${coolTreshold}`);
    if (!emojiCount) {
        console.log(`0 emojis found in the text. The cool ones are:`);
    } else {
        console.log(`${emojiCount.length} emojis found in the text. The cool ones are:`);
    }
    for (const emoji of emojies) {
        emojiCount++;
        let emojiCoolnes = 0;
        for (const letter of emoji.groups.name) {
            let letterChar = letter.charCodeAt();
            emojiCoolnes += letterChar;
        }
        if (emojiCoolnes > coolTreshold) {
            console.log(emoji[0]);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Swy**"]);
