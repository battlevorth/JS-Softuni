function piccolo(input) {
  let parkingLot = new Map();

  for (let line of input) {
    let [command, number] = line.split(`, `);
    if (command === `IN`) {
      parkingLot.set(number, command);
    } else if (command === `OUT`) {
      parkingLot.delete(number);
    }
  }

  let sortedParkingLotArray = Array.from(parkingLot).sort((kvpA, kvpB) =>
    kvpA[0].localeCompare(kvpB[0])
  );

  if (sortedParkingLotArray.length) {
    for (const [number] of sortedParkingLotArray) {
      console.log(number);
    }
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
