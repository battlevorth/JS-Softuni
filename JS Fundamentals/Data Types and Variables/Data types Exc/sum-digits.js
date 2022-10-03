function sumDigits(number) {
    number = number.toString();
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        let currentNumber = Number(number[i]);
        sum += currentNumber
    }
    console.log(sum);
}
sumDigits(97561)