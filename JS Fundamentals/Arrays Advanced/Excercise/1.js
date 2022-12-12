function train(wagons) {
  let currentWagons = wagons.shift(0).split(` `).map(Number);
  let maxWagonCapacity = wagons.shift(0);

  for (let i = 0; i < wagons.length; i++) {
    let currentComand = wagons[i].split(` `);

    if (currentComand[0] === `Add`) {
      currentWagons.push(Number(currentComand[1]));
    } else {
      for (let index = 0; index < currentWagons.length; index++) {
        if (
          currentWagons[index] + Number(currentComand[0]) <=
          maxWagonCapacity
        ) {
          currentWagons[index] += Number(currentComand[0]);
          break;
        }
      }
    }
  }
  console.log(currentWagons.join(` `));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
