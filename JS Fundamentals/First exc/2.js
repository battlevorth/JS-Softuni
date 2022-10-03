function rounding(inputA, inputB) {
  if (inputB > 15) {
    inputB = 15;
  }
  let finalNumb = inputA.toFixed(inputB);
  console.log(parseFloat(finalNumb));
}
rounding(10.5, 3);
