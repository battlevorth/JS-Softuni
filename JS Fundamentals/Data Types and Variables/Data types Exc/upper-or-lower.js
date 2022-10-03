function upperOrLowerCase(currentCase) {
    let toUpperCase = currentCase.toUpperCase();
    if (currentCase === toUpperCase){
        console.log(`upper-case`);
    }else {
        console.log(`lower-case`);
    }
}
upperOrLowerCase(`F`)