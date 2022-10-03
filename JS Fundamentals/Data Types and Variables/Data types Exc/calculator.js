function calculator(firstNum,operator,secondNum) {
    let sum = 0;
    if (operator === `+`) {
        sum = firstNum + secondNum;
    } else if(operator === `-`) {
        sum = firstNum - secondNum;
    } else if(operator === `/`){
        sum = firstNum / secondNum;
    } else {
        sum = firstNum * secondNum;
    }
    console.log(sum.toFixed(2));
}
calculator(23,`*`,43)