function negativeOrPositiveNumber(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber < 0) {
            newArray.unshift(currentNumber);
        }else //if (currentNumber >= 0)
        {
            newArray.push(currentNumber);
        }
    }
    console.log(newArray.join(`\n`));
}
negativeOrPositiveNumber(['3', '-2', '0', '-1'])