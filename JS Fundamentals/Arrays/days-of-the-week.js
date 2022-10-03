function week(number) {
    let dayOfTheWeek = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`, `Saturday`,`Sunday`];
    if (number >= 1 && number <= 7) {
        console.log(dayOfTheWeek[number - 1]);
    }else{
        console.log(`Invalid day!`);
    }
}
week(7)