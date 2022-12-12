function arrayManipulations(array) {
  let numbersArray = array.shift(0).split(` `).map(Number);
//   console.log(numbersArray);
//   console.log(array);
  for (let index = 0; index < array.length; index++) {
    let currentComand = array[index].split(` `);
    switch (currentComand[0]) {
      case `Add`:
        numbersArray.push(Number(currentComand[1]));
        break;
      case `Remove`:
        for (let i = 0; i < numbersArray.length; i++) {
          let currentElement = numbersArray[i];
          let elementToBeRemoved = Number(currentComand[1]);
          if (currentElement === elementToBeRemoved) {
            numbersArray.splice(i, 1);
          }
        }
        break;
      case `RemoveAt`:
        numbersArray.splice(currentComand[1], 1);
        break;
      case `Insert`:
        numbersArray.splice(currentComand[2], 0, Number(currentComand[1]));
        break;
    }
  }
  console.log(numbersArray.join(` `));
}
arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2']);
