function searchForANumber(numbersArray, command) {
  let elementsToTakeInNewArray = command[0];
  let elementsToDeleteFromNewArray = command[1];
  let numberToFoundInNewArray = command[2];

  let newArray = numbersArray.slice(0, elementsToTakeInNewArray);
  newArray.splice(0, elementsToDeleteFromNewArray);

  let count = 0;

  for (const number of newArray) {
    if (number === numberToFoundInNewArray) {
      count++;
    }
  }

  console.log(`Number ${numberToFoundInNewArray} occurs ${count} times.`);
}
searchForANumber(
    [7, 1, 5, 8, 2, 7],

    [3, 1, 5]
);
