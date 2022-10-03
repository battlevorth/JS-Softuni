function mergeArrays(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        let currentNumberOfArray1 = Number(array1[i]);
        let currentNumberOfArray2 = Number(array2[i]);
        if (i % 2 === 0) {
            newArray.push(currentNumberOfArray1 + currentNumberOfArray2);
        }else{
            newArray.push(array1[i] + array2[i]);
        }
    }
    console.log(newArray.join(` - `));
}
mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])