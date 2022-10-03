function condense(array) {
    while (array.length > 1) {
        let sumArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            sumArray.push(array[i] + array[i + 1]);
        }
     array = sumArray
    }
    if (array.length === 1) {
        console.log(array[0]);
    }
}
condense([5,0,4,1,2])