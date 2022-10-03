function sumOfNumbers(input){
    let number = input[0];
    let sum = 0

    for (let index = 0; index < number.length; index++) {
        let currentNumber = Number(number[index]);
        sum = sum + currentNumber
        
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers([`23`])