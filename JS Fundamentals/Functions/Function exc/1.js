function smallestOfThree(firstNum, secondNum, thirdNum) {
  function twoNumsCheck(firstNum, secondNum) {
    let result = 0;
    if (firstNum < secondNum) {
      result = firstNum;
    } else {
      result = secondNum;
    }
    return result;
  }

  let firstCheckAndThirdNum = twoNumsCheck(
    twoNumsCheck(firstNum, secondNum),
    thirdNum
  );

  console.log(firstCheckAndThirdNum);
}
smallestOfThree(
  2,

  2,

  2
);
