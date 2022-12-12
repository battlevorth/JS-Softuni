function processOddNumbers(input) {
    let newArray = [];
    for (let index = 0; index < input.length; index++) {
        let currentElement = 0;
        if (index % 2 !== 0) {
           currentElement = input[index] * 2;
           newArray.unshift(currentElement);
        }
    }
    console.log(newArray.join(` `));
}
processOddNumbers([3, 0, 10, 4, 7, 3])