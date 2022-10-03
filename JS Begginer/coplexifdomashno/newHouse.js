function newHouse(input) {
    let typeOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;
    let money = 0;

     
    if (typeOfFlowers === `Roses` && numberOfFlowers > 80) {
        totalPrice = (numberOfFlowers * 5);
        totalPrice = totalPrice - (totalPrice * 0.1);
    } else if (typeOfFlowers === `Roses` && numberOfFlowers <= 80) {
        totalPrice = (numberOfFlowers * 5);
    }
    if (typeOfFlowers === `Dahlias` && numberOfFlowers > 90) {
        totalPrice = (numberOfFlowers * 3.8);
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeOfFlowers === `Dahlias` && numberOfFlowers <= 90) {
        totalPrice = (numberOfFlowers * 3.8);
    }
    if (typeOfFlowers === `Tulips` && numberOfFlowers > 80) {
        totalPrice = (numberOfFlowers * 2.80);
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeOfFlowers === `Tulips` && numberOfFlowers <= 80) {
        totalPrice = (numberOfFlowers * 2.8);
    }
    if (typeOfFlowers === `Narcissus` && numberOfFlowers < 120) {
        totalPrice = (numberOfFlowers * 3);
        totalPrice = totalPrice + (totalPrice * 0.15);
    } else if (typeOfFlowers === `Narcissus` && numberOfFlowers >= 120) {
        totalPrice = (numberOfFlowers * 3);
    }
    if (typeOfFlowers === `Gladiolus` && numberOfFlowers < 80) {
        totalPrice = (numberOfFlowers * 2.5);
        totalPrice = totalPrice + (totalPrice * 0.20);
    } else if (typeOfFlowers === `Gladiolus` && numberOfFlowers >= 80) {
        totalPrice = (numberOfFlowers * 2.5);
    }
   
 
    money = Math.abs(budget - totalPrice);
        if (totalPrice <= budget){
            console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${money.toFixed(2)} leva left.`);
        }else{
            console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
        }


}
newHouse(["Narcissus",
"119",
"360"])
