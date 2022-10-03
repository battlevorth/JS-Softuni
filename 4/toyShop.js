function toyShop(input){
    let tripPrice = Number(input[0]);
    let saw = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let toyCar = Number(input[5]);

    let totalPrice = saw*2.6 + talkingDoll*3 + teddyBear*4.10 + minion*8.20 + toyCar*2;
    let totalToys = saw + talkingDoll + teddyBear + minion + toyCar;

     if (totalToys >= 50){
         totalPrice = totalPrice - totalPrice*(25/100);
     } else {
         totalPrice = totalPrice
     }

    

    let loan = totalPrice*(10/100);
    let moneyEarned = (totalPrice - loan);
    let profit = Math.abs(moneyEarned - tripPrice)
    if (moneyEarned >= tripPrice ){
        console.log(`Yes! ${profit.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${profit.toFixed(2)} lv needed.`)
    }
    
}
toyShop(["320","8","2","5","5","1"])