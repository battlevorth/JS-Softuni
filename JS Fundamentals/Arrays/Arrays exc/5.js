function maxNumbers(array) {
    let result = '';
    for (let index = 0; index < array.length; index++) {
        let currentNumber = array[index];
        let isBigger = false;
        for (let i = index + 1; i < array.length; i++) {
            if (currentNumber > array[i]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result += ` ${currentNumber}`;
        }
    }
    console.log(`${result} ${array[array.length - 1]}`);
}
maxNumbers([27, 19, 42, 2, 13, 45, 48])