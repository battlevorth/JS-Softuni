function lastKNumbersSequence(length,count) {
    let newArray = [1];
    for (let i = 1; i < length; i++) {
        let lastNumbers = newArray.slice(-count);
        let sum = 0
        for (const el of lastNumbers) {
            sum += el;
        }
        newArray.push(sum);
    }
    console.log(newArray.join(` `));
}
lastKNumbersSequence(6, 3)