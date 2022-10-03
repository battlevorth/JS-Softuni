function godzilaVsKong(input){
    let budget = Number(input[0]);
    let statis = Number(input[1]);
    let stDressPrice = Number(input[2]);
    
    let prop = budget * 0.10;

    if (statis > 150){
        stDressPrice = stDressPrice * 0.9;
    }
    let totalDressPrice = statis * stDressPrice;

    let totalCost = totalDressPrice + prop;
    let finalBudget = Math.abs(totalCost - budget)

    if (totalCost > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${finalBudget.toFixed(2)} leva more.`);
    } else if (totalCost <= budget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${finalBudget.toFixed(2)} leva left.`)
    }


}
godzilaVsKong(["20000",
"120",
"55.5"])
