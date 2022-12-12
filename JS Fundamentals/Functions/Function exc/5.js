function palindromIntegers(numbers) {

    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        // console.log(currentNumber);
        let reversedNum = currentNumber => parseFloat(currentNumber.toString().split('').reverse().join('')) * Math.sign(currentNumber);
        // console.log(reversedNum(currentNumber));
        if (reversedNum(currentNumber) === currentNumber) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}
palindromIntegers([32,2,232,1010])