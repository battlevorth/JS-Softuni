function addAndSubtract(firstNum, secondNum, thirdNum) {
    function addFirstAndSecondNum(firstNum,secondNum) {
        let addResult = firstNum + secondNum;
        return addResult;
    }
    let subtractResult = addFirstAndSecondNum(firstNum,secondNum) - thirdNum;
    console.log(subtractResult);
}
addAndSubtract(23,6,10)