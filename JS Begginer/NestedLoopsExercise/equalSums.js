function equal(input){
    let fNumber = Number(input[0]);
    let sNumber = Number(input[1]);

    let printLine = ``;

    for (let i = fNumber; i <= sNumber; i++) {
        let currentNum = `` + i;
        let oddsNum = 0;
        let evenNums = 0;
        for (let n = 0; n <= currentNum.length; n++) {
            let currentDigit = Number(currentNum.charAt(n));
            if (n % 2 === 0) {
                evenNums += currentDigit;
            }else{
                oddsNum += currentDigit
            }
        }
        if (oddsNum === evenNums) {
            printLine += `${i} `
        }
    }
    console.log(printLine);
}
equal(["100000",
"100050"])