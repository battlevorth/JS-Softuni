function oddAndEvenSum(number) {
  let numToString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numToString.length; i++) {
    let currentNumber = Number(numToString[i]);
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
