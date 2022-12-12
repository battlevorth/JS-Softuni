// function calculator(numbOne, numbTwo, operator) {
//   let add = (numbOne, numbTwo) => numbOne + numbTwo;
//   let addResult = add(numbOne, numbTwo);

//   let subtrack = (numbOne, numbTwo) => numbOne - numbTwo;
//   let subtrackResult = subtrack(numbOne, numbTwo);

//   let multiply = (numbOne, numbTwo) => numbOne * numbTwo;
//   let multiplyResult = multiply(numbOne, numbTwo);

//   let divide = (numbOne, numbTwo) => numbOne / numbTwo;
//   let divideResult = divide(numbOne, numbTwo);

//   switch (operator) {
//     case `add`:
//       console.log(addResult);
//       break;
//     case `subtract`:
//       console.log(subtrackResult);
//       break;
//     case `multiply`:
//       console.log(multiplyResult);
//       break;
//     case `divide`:
//       console.log(divideResult);
//       break;
//   }
// }
// calculator(50,13,'subtract')

function calculator(number1,number2,operator) {
  const currentOperator = {
    subtract: (a,b) => a - b,
    add: (a,b) => a + b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b
  }
  console.log(currentOperator[operator](number1,number2));
}
calculator(50,13,'subtract')
