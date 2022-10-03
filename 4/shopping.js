function shopping(input){
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let gpuPrice = 250;

    let cpuPrice = (gpu * gpuPrice) * 0.35;
    let ramPrice = (gpu * gpuPrice) * 0.1;

    let finalPrice = gpu * gpuPrice + cpu * cpuPrice + ram * ramPrice

    if (gpu > cpu){
        finalPrice = finalPrice * 0.85;
    }

    let money = Math.abs(finalPrice - budget)

    if (finalPrice <= budget){
        console.log(`You have ${money.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])