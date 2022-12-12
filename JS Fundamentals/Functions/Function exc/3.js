function characterInRange(charOne, charTwo) {
    let rangeStart = Math.min(charOne.charCodeAt(),charTwo.charCodeAt());
    let rangeEnd = Math.max(charOne.charCodeAt(),charTwo.charCodeAt());
    let result = ``;

    for (let currentChar = rangeStart + 1 ; currentChar < rangeEnd; currentChar++){
        result +=` ${(String.fromCharCode(currentChar))}`;
    }
    console.log(result);
}
characterInRange('#',':')