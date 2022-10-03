function cleverLily(input) {
    let age = Number(input[0]);
    let washMprice = Number(input[1]);
    let toysPrice = Number(input[2]);
    let countToys = 0;

    let collectedMoney = 0;
    let currentMoney = 10;

    let allMoney = 0;
    let left = 0;

    for (let i = 1; i <= age; i++) {
        let currentaAge = i;
        if (currentaAge % 2 === 0) {
            collectedMoney += currentMoney;
            currentMoney += 10;
            collectedMoney -= 1;

        } else {
            countToys++;
        }
    }
    allMoney = collectedMoney + (countToys * toysPrice);
    if(allMoney >= washMprice){
        left = allMoney - washMprice;
        console.log(`Yes! ${left.toFixed(2)}`);
    }else{
        left = washMprice - allMoney
        console.log(`No! ${left.toFixed(2)}`);
    }


}
cleverLily(["21",
"1570.98",
"3"])