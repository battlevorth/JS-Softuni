function fruitPrice(input) {
    let fruits = input[0];
    let day = input[1];
    let qunatity = Number(input[2]);

    let totalPrice = 0;

    if (day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`) {
        switch (fruits) {
            case `banana`:totalPrice = qunatity * 2.5; break;
            case `apple`:totalPrice = qunatity * 1.2; break;
            case `orange`:totalPrice = qunatity * 0.85; break;
            case `grapefruit`:totalPrice = qunatity * 1.45; break;
            case `kiwi`:totalPrice = qunatity * 2.7; break;
            case `pineapple`:totalPrice = qunatity * 5.5; break;
            case `grapes`:totalPrice = qunatity * 3.85; break;
            default:
                console.log(`error`);break;
        }

    }else if(day === `Saturday`||day === `Sunday`){
        switch (fruits) {
            case `banana`:totalPrice = qunatity * 2.70; break;
            case `apple`:totalPrice = qunatity * 1.25; break;
            case `orange`:totalPrice = qunatity * 0.90; break;
            case `grapefruit`:totalPrice = qunatity * 1.60; break;
            case `kiwi`:totalPrice = qunatity * 3.00; break;
            case `pineapple`:totalPrice = qunatity * 5.60; break;
            case `grapes`:totalPrice = qunatity * 4.20; break;
            default:
            console.log(`error`);break;
        } 
    }else{
        console.log(`error`);
    }if (totalPrice != 0){
        console.log(totalPrice.toFixed(2));
    }
    

}
fruitPrice(["grapes",
"Saturday",
"0.5"])