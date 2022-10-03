function specialNumbers(number) {
  let isSpecial = false;
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    let currentNumber = i;
    currentNumber = currentNumber.toString();
    for (let b = 0; b < currentNumber.length ; b++) {
        sum += Number(currentNumber[b]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
        isSpecial = true;
        console.log(`${currentNumber} -> True`);
      } else {
        isSpecial = isSpecial;
        console.log(`${currentNumber} -> False`);
      }
  }
}
specialNumbers(361);


