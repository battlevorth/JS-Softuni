function ordersPrices(drink, quantity) {
  let totalPrice = 0;
  switch (drink) {
    case `coffee`:
      totalPrice = quantity * 1.5;
      break;
    case `water`:
      totalPrice = quantity * 1.0;
      break;
    case `coke`:
      totalPrice = quantity * 1.4;
      break;
    case `snacks`:
      totalPrice = quantity * 2.0;
      break;
  }
  return totalPrice.toFixed(2);
}
ordersPrices("coffee", 2);

console.log(ordersPrices("coffee", 2));
