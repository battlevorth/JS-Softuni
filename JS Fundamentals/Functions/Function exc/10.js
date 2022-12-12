function factorialDivison(num1, num2) {
    let num1Result = 1;
    let num2Result = 1;
    for (let index = 1; index < num1; index++) {
        num1Result += num1Result * index;
    };
    for (let index = 0; index < num2; index++) {
        num2Result += num2Result * index;
    };
    let result = (num1Result / num2Result).toFixed(2);
    console.log(result);
}
factorialDivison(6, 2)