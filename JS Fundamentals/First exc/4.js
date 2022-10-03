function vacation(group, type, day) {
  let currentprice = 0;
  let pricePer10 = 0;
  switch (type) {
    case `Students`:
      switch (day) {
        case `Friday`:
          currentprice = group * 8.45;
          break;
        case `Saturday`:
          currentprice = group * 9.8;
          break;
        case `Sunday`:
          currentprice = group * 10.46;
          break;
      }
      if (group >= 30) {
        currentprice = currentprice - currentprice * 0.15;
      }
      console.log(`Total price: ${(currentprice).toFixed(2)}`);
      break;
    case `Business`:
      switch (day) {
        case `Friday`:
          currentprice = group * 10.9;
          pricePer10 = 10 * 10.9;
          break;
        case `Saturday`:
          currentprice = group * 15.6;
          pricePer10 = 10 * 15.6;
          break;
        case `Sunday`:
          currentprice = group * 16;
          pricePer10 = 10 * 16;
          break;
      }
      if (group >= 100) {
        currentprice = currentprice - pricePer10;
      }
      console.log(`Total price: ${(currentprice).toFixed(2)}`);
      break;
    case `Regular`:
      switch (day) {
        case `Friday`:
          currentprice = group * 15;
          break;
        case `Saturday`:
          currentprice = group * 20;
          break;
        case `Sunday`:
          currentprice = group * 22.5;
          break;
      }
      if (group >= 10 && group <= 20) {
        currentprice = currentprice - currentprice * 0.05;
      }
      console.log(`Total price: ${(currentprice).toFixed(2)}`);
      break;
  }
}
vacation(40, "Business", "Saturday");
