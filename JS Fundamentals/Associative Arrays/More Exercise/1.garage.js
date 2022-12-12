function sortCars(input) {
  let garage = {};
  let carNum = 1;

  for (let line of input) {
    let splitedLine = line.split(` - `);
    let currentGarage = splitedLine.shift();
    if (!garage[currentGarage]) {
      garage[currentGarage] = {};
      carNum = 1;
    } else {
      carNum++;
    }
    let car = `Car${carNum}`;
    splitedLine = splitedLine[0].split(`, `);
    for (let line of splitedLine) {
      let [key, value] = line.split(`: `);
      if (!garage[currentGarage][car]) {
        garage[currentGarage][car] = {};
        if (!garage[currentGarage][car][key]) {
          garage[currentGarage][car][key] = value;
        }
      } else {
        if (!garage[currentGarage][car][key]) {
          garage[currentGarage][car][key] = value;
        }
      }
    }
  }

  Object.entries(garage).forEach((garageNum) => {
    console.log(`Garage № ${garageNum[0]}`);
    Object.entries(garageNum[1]).forEach((car) => {
      let carPrint = "--- ";
      Object.entries(car[1]).forEach(([key, value]) => {
        carPrint += `${key} - ${value}, `;
      });
      let sliced = carPrint.slice(0, -2)
      console.log(sliced);
    });
  });
}
sortCars([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
