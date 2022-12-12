function printMining(input) {
  let materials = {};

  for (let index = 0; index < input.length; index += 2) {
    let resource = input[index];
    let quantity = Number(input[index + 1]);
    if (!materials[resource]) {
      materials[resource] = quantity;
    } else {
      quantity += materials[resource];
      materials[resource] = quantity;
    }
  }

  Object.entries(materials).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

printMining(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
