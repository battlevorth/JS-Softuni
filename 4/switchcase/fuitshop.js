function fruitVegie(input) {
    let fruitVegies = input[0];

    switch (fruitVegies) {
        case `banana`:
        case `apple`:
        case `kiwi`:
        case `cherry`:
        case `lemon`:
        case `grapes`:
            console.log(`fruit`);
            break;
        case `tomato`:
        case `cucumber`:
        case `pepper`:
        case `carrot`:
            console.log(`vegetable`);
            break;
        default:
            console.log(`unknown`);
            break;
    }
}
fruitVegie([`tomato`])
