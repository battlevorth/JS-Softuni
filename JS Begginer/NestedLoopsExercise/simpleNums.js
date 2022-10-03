function simpleNums(input) {
    let index = 0;
    let nums = input[index];

    let primeNums = 0;
    let compNums = 0;

    while (nums !== `stop`) {
        nums = Number(input[index]);
        if (nums < 0) {
            console.log(`Number is negative.`);
            index++;
            nums = input[index];
            continue;
        }
        if (nums === 1) {
            primeNums += nums;
            index++;
            nums = input[index];
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < nums; i++) {
            if (nums % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNums += nums
        } else {
            compNums += nums
        }
        index++;
        nums = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeNums}`);
    console.log(`Sum of all non prime numbers is: ${compNums}`);

}
simpleNums(["3",
"2",
"0",
"7",
"19",
"4",
"stop"])