function spices(startingYield) {
  let spicesCollected = 0;
  let daysCount = 0;
  while (startingYield >= 100) {
    daysCount++;
    spicesCollected += startingYield;
    spicesCollected = spicesCollected - 26;
    startingYield = startingYield - 10;
  }
  if (spicesCollected < 26) {
    console.log(daysCount);
    console.log(spicesCollected);
  } else {
    console.log(daysCount);
    console.log(spicesCollected - 26);
  }
}
spices(450);
