function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    
    while (destination !== `End`) {
        let collectedMoney = 0;
        let moneyNeeded = Number(input[index]);
        index++
        while (collectedMoney < moneyNeeded) {
            let currentMoney = Number(input[index]);
            collectedMoney += currentMoney;
            index++
            if (collectedMoney >= moneyNeeded) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        destination = input[index];
        index++;
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

