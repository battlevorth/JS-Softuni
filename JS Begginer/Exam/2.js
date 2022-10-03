function braceletStand(input){
    let pocketMoneyPerDay = Number(input[0]);
    let earnMoneyPerDay = Number(input[1]);
    let expensess = Number(input[2]);
    let giftPrice = Number(input[3]);

    let daysLeft = 5;

    let savedPocketMoney = pocketMoneyPerDay * daysLeft;
    let totalEarnedMoney = earnMoneyPerDay * daysLeft;
    let totalMoney = (totalEarnedMoney + savedPocketMoney) - expensess;

    if (totalMoney >= giftPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice - totalMoney).toFixed(2)} BGN.`);
    }
}
braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])