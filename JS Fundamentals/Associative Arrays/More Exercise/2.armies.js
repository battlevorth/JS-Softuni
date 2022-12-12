function battle(input) {
  let armies = {};

  for (const line of input) {
    if (line.includes("arrives")) {
      let [commander] = line.split(" arrives");
      //console.log(commander);
      if (!armies[commander]) {
        armies[commander] = {};
      }
    } else if (line.includes(": ")) {
      let [currCommander, armie] = line.split(": ");
      let [armieName, armieQuantity] = armie.split(", ");
      armieQuantity = Number(armieQuantity);
      //console.log(armieQuantity);
      if (armies[currCommander]) {
        if (!armies[currCommander][armieName]) {
          armies[currCommander][armieName] = armieQuantity;
        }
      }
    } else if (line.includes(" + ")) {
      let [armieName, soldiersToAdd] = line.split(" + ");
      soldiersToAdd = Number(soldiersToAdd);
      let commanders = Object.keys(armies);
      for (let commander of commanders) {
        let currArmies = Object.keys(armies[commander]);
        for (let currArmie of currArmies) {
          if (currArmie === armieName) {
            armies[commander][currArmies] += soldiersToAdd;
          }
        }
      }
    } else {
      let [commanderToBeRomoved] = line.split(" defeated");
      delete armies[commanderToBeRomoved];
    }
  }

  for (let leader in armies) {
    let sum = 0;
    let armieName = armies[leader];

    for (let armieQuantity in armieName) {
      sum += armieName[armieQuantity];
    }
    armieName["sum"] = sum;
  }

  Object.entries(armies)
    .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    .forEach((element) => {
      console.log(`${element[0]}: ${element[1].sum}`);
      delete element[1].sum;
      Object.entries(element[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((element) => {
          console.log(`>>> ${element[0]} - ${element[1]}`);
        });
    });
}
battle([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
