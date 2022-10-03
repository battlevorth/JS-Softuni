function number(input){
    let n = Number(input[0]);

    let currentNumber = 1;
    let isBigger = false;
    let printLine = ``;

    for (let row = 1; row <= n; row++) {
        for (let cols = 1; cols <= row; cols++) {
            if (currentNumber > n) {
                isBigger = true;
                break;
            }
            printLine += currentNumber + ` `;
            currentNumber++
        }
       console.log(printLine);
       printLine = ``;
       if (isBigger) {
           break;
       } 
    }
}
number(["7"])