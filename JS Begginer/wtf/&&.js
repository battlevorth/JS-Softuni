function solve(input) {
    let a = Number(input[0]);
    let isValid = a > 10;

    if (!isValid) {
        console.log(`Invalid`);
    } else {
        console.log(`Valid`)
    }

}
solve([`14`])