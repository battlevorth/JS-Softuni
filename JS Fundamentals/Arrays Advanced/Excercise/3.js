function houseParty(asnwerList) {
//   console.log(asnwerList);
  let list = [];
  for (let index = 0; index < asnwerList.length; index++) {
    let currentGuestAnswer = asnwerList[index].split(` is `);
    let name = currentGuestAnswer[0];
    let answer = currentGuestAnswer[1];
    let ifInTheList = false;
    if (answer === `going!`) {
      for (let currentNamesInList of list) {
        if (currentNamesInList === name) {
          console.log(`${name} is already in the list!`);
          ifInTheList = true;
        }
      }
      if (!ifInTheList) {
        list.push(name);
      }
    } else if (answer === `not going!`) {
      let notInTheList = false;
      for (let currentNamesInList of list) {
        if (currentNamesInList === name) {
          let nameIndex = list.indexOf(name);
          list.splice(nameIndex);
          notInTheList = true;
        }
      }
      if (!notInTheList) {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(list.join(`\n`));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);
