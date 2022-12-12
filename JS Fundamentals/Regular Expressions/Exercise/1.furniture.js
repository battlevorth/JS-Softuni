function furnitures(input) {
  let pattern = />>(?<fur>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;
  let totalPrice = 0;
  console.log('Bought furniture:');
  for (const line of input) {
    if (line === "Purchase") {
      break;
    } else {
      let furBought = line.matchAll(pattern);
      if (furBought) {
        for (const currFurn of furBought) {
            console.log(currFurn.groups.fur);
            totalPrice += (Number(currFurn.groups.price)) * (Number(currFurn.groups.quantity))
        }
      }
    }
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furnitures(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);
