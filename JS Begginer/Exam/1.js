function christmas(input){
    let rolls = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let discountPerc = discount / 100;
    let rollsPrice = rolls * 5.8;
    let clothPrice = cloth * 7.2;
    let gluePrice = glue * 1.20;

    let totalValue = rollsPrice + clothPrice + gluePrice;
    let discountValue = (rollsPrice + clothPrice + gluePrice) * discountPerc;
    let finalPrice = totalValue - discountValue

    console.log(finalPrice.toFixed(3));


}
christmas(["7",
"8",
"0.5",
"45"])
