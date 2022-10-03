function accBalance(input){
    let index = 0;
    let depostie = input[index];
    let sum = 0;

    while(depostie !== `NoMoreMoney`){
        let ifNumber = Number(depostie);
        if (ifNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${ifNumber.toFixed(2)}`);
        index++;
        depostie = input[index];
        sum += ifNumber;
    }
    console.log(`Total: ${sum.toFixed(2)}`);

}
accBalance(["120",
"45.55",
"-150"])