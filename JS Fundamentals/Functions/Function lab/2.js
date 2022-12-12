// function mathPower(number, power) {
    // let result = Math.pow(number, power); //number ** power both doing same thing
//     console.log(result);
// }
// mathPower(2,8)

function mathPower(number, power) {
  let result = number;
  let currentPower = 0;
  for (let i = 1; i < power; i++) {
    currentPower = result * number;
    result = currentPower;
  }
  console.log(result);
}
mathPower(2, 8);
