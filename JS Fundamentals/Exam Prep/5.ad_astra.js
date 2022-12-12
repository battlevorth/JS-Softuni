function caloriesCalculator(input) {
  let regEx = /([\||\#])(?<product>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let allFood = input[0].matchAll(regEx);
  let totalCalories = 0;
  for (const currFood of allFood) {
    totalCalories += Number(currFood.groups.calories);
  }
  totalCalories = Math.floor(totalCalories/2000)
  console.log(`You have food to last you for: ${totalCalories} days!`);
  allFood = input[0].matchAll(regEx);
  for (const food of allFood) {
    console.log(`Item: ${food.groups.product}, Best before: ${food.groups.expDate}, Nutrition: ${food.groups.calories}`);
  }
}
caloriesCalculator([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
