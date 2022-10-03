function numbers(input) {
    let n = input[0];
    let number = Number(input[0]);
    let currentDigit = 0
    if (n.length > 1) {
        currentDigit = (Number(n[n.length - 1]));
    } else {
        currentDigit = Number(n);
    }
    let currentA = 0;
    let currentB = 0;
    let currentC = 0;
    let currentD = 0;
    let ifFound = false;
    for (let a = 1; a <= 9 && ifFound === false; a++) {
        currentA = Number(a)
        for (let b = 9; b >= currentA && ifFound === false; b--) {
            currentB = Number(b)
            for (let c = 0; c <= 9 && ifFound === false; c++) {
                currentC = Number(c)
                for (let d = 9; d > currentC; d--) {
                    currentD = Number(d);
                    if (currentA + currentB + currentC + currentD === currentA * currentB * currentC * currentD && currentDigit === 5) {
                        console.log(`${currentA}${currentB}${currentC}${currentD}`);
                        ifFound = true;
                        break;
                    } else if (Math.floor((currentA * currentB * currentC * currentD) / (currentA + currentB + currentC + currentD)) === 3 && number % 3 === 0 ) {
                        ifFound = true;
                        console.log(`${currentD}${currentC}${currentB}${currentA}`);
                        break;
                    }
                }
            }
        }
    }
    if (!ifFound) {
        console.log(`Nothing found`);
    }
}
numbers(["214"])