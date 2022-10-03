function numbers(input) {
    let number = Number(input[0]);
    let index = 1;
    let currentNumber = Number(input[index]);
    let currentSum = 0;

    while (number > currentSum) {
        currentNumber = Number(input[index]);
        currentSum += currentNumber;
        index++
    }
    console.log(currentSum);

}
numbers(["20", "1", "2", "3", "4", "5", "6"])