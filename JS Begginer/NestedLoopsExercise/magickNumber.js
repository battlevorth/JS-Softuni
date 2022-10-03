function number(input) {
    let num = Number(input[0]);
    let magicNumber = 0;
    let allMagicNumber = ``;

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = `` + i;
        for (let n = 0; n < currentNum.length; n++) {
            let currentDigit = Number(currentNum.charAt(n));
            if (num % currentDigit === 0) {
                magicNumber = i;
            } else {
                magicNumber = 0
                break;
            }
        }
        if (magicNumber === 0) {
            continue;
        } else {
            allMagicNumber += `${magicNumber} `;
        }
    }
    console.log(allMagicNumber);
}
number(["16"])