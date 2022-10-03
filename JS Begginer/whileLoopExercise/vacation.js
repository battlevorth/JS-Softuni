function vacation(input) {
    let vacPrice = Number(input[0]);
    let startMoney = Number(input[1]);
    let index = 2;
    let currentOperation = input[index];
    index++
    let operation = ``;
    let consSpends = 0;
    let daysCount = 0;

    while (vacPrice > startMoney) {
        operation = currentOperation;
        let money = Number(input[index]);
        index++;
        daysCount++;
        if (operation === `save`) {
            startMoney += money;
            consSpends = 0;
        } else {
            startMoney -= money
            consSpends++;
            if (startMoney < 0) {
                startMoney = 0;
            }
        }
        if (consSpends === 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCount}`);
            break;
        }
        currentOperation = input[index];
        index++
    }

    if (startMoney >= vacPrice) {
        console.log(`You saved the money for ${daysCount} days.`);
    }
    
}
vacation(["110",
"60",
"save",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"save",
"10",
"save",
"10",
"save",
"10",
"save",
"10",
"spend",
"10",
"save",
"55"])