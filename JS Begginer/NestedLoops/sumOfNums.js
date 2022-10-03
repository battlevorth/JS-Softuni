function sumOfNums(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magickNumber = Number(input[2]);
    let combCount = 0;
    let currentSum = false

    for (let i = startNumber; i <= endNumber; i++) {
        for (let b = startNumber; b <= endNumber; b++) {
            let sum = i + b;
            combCount++
            if (sum === magickNumber) {
                console.log(`Combination N:${combCount} (${i} + ${b} = ${magickNumber})`);
                currentSum = true;
                break;
            }
        }
        if (currentSum === true) {
            break;
        }
    }
    if (currentSum === false) {
        console.log(`${combCount} combinations - neither equals ${magickNumber}`);
    }
}
sumOfNums(["88",
"888",
"1000"])