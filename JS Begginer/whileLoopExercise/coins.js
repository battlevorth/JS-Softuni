function coins(input) {
    let money = Number(input[0]);
    let coinsCounter = 0;

    while (money > 0) {
        coinsCounter++;
        money = Number(money.toFixed(2));
        if (money >= 2) {
            money -= 2;
        } else if (money >= 1) {
            money -= 1;
        } else if (money >= 0.5) {
            money -= 0.5;
        } else if (money >= 0.2) {
            money -= 0.2;
        } else if (money >= 0.1) {
            money -= 0.1;
        } else if (money >= 0.05) {
            money -= 0.05;
        } else if (money >= 0.02) {
            money -= 0.02;
        } else if (money >= 0.01) {
            money -= 0.01;
        }
    }
    console.log(coinsCounter);
}
coins(["1.23"])
