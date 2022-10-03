function addAndSubtract(array1) {
    let sumArray1 = 0;
    let sumArray2= 0;
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        let currentNumber = Number(array1[i]);
        sumArray1 += currentNumber
        if (currentNumber % 2 === 0) {
            newArray.push(currentNumber + i);
        } else {
            newArray.push(currentNumber - i);
        }
    }
    
    for (let i = 0; i < newArray.length; i++) {
        let currentNumber = Number(newArray[i]);
        sumArray2 += currentNumber
    }
    
    console.log(newArray);
    console.log(sumArray1);
    console.log(sumArray2);
}
addAndSubtract([-5, 11, 3, 0, 2])