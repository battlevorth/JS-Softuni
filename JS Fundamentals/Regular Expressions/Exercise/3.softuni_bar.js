function incomeCalculator(input) {
  let validPattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^0-9|$%.]*(?<price>\d+\.*\d*)\$/g;

  let totalIncome = 0;

  for (const line of input) {
    if (line === "end of shift") {
      console.log(`Total income: ${totalIncome.toFixed(2)}`);
    } else {
      if (line.matchAll(validPattern)) {
        let currLine = line.matchAll(validPattern);
        for (const currCustomer of currLine) {
          let currName = currCustomer.groups.customer;
          let currProduct = currCustomer.groups.product;
          let currPrice = Number(currCustomer.groups.price);
          let currCount = Number(currCustomer.groups.count);
          let totalCustPrice = currPrice * currCount;
          totalIncome += totalCustPrice;
          console.log(
            `${currName}: ${currProduct} - ${totalCustPrice.toFixed(2)}`
          );
        }
      }
    }
  }
}
incomeCalculator([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
