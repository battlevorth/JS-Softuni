function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let price = 0;
    //: "Spring", "Summer", "Autumn", "Winter"

    switch (season) {
        case `Spring`:
            price = 3000;
            if (fishermans <= 6) {
                price = price * 0.90;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans > 7 && fishermans <= 11) {
                price = price * 0.85;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans >= 12) {
                price = price * 0.75;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            } break;
        case `Summer`:
            price = 4200;
            if (fishermans <= 6) {
                price = price * 0.90;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans > 7 && fishermans <= 11) {
                price = price * 0.85;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans >= 12) {
                price = price * 0.75;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            } break;
        case `Autumn`:
            price = 4200;
            if (fishermans <= 6) {
                price = price * 0.90;
            }
            if (fishermans > 7 && fishermans <= 11) {
                price = price * 0.85;
            }
            if (fishermans >= 12) {
                price = price * 0.75;
            } break;
        case `Winter`:
            price = 2600;
            if (fishermans <= 6) {
                price = price * 0.90;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans > 7 && fishermans <= 11) {
                price = price * 0.85;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            }
            if (fishermans >= 12) {
                price = price * 0.75;
                if (fishermans % 2 === 0) {
                    price = price * 0.95;
                }
            } break;
    }
    let fMoney = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${fMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${fMoney.toFixed(2)} leva.`);
    }

}
fishingBoat(["2000",
    "Winter",
    "13"])

