function bombNumbers(numbersArray, specialBombNumber) {
  for (let index = 0; index < numbersArray.length; index++) {
    let currentNumber = numbersArray[index];
    let start = index - specialBombNumber[1];
    let elementsToBeDeleted = specialBombNumber[1] + specialBombNumber[1] + 1;
    if (currentNumber === specialBombNumber[0]) {
      index = -1;
        if (start < 0) {
            elementsToBeDeleted = specialBombNumber[1] + (start * - 1);
            start = 0;
        }
      numbersArray.splice(start,elementsToBeDeleted);
    }
    // console.log(numbersArray);
  }
  let result = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    result += numbersArray[i];
  }
  console.log(result);
}
bombNumbers([2, 2, 1, 1, 2, 1, 1, 1,

  2, 1, 1, 2, 1, 1],
  
  [2, 0]);
  


// ([1, 7, 7, 1, 2, 3],[7, 3])
