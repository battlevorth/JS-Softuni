function equalArray(array1, array2) {
    let areEqual = false;
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i]);
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            areEqual = true;
            sum += array1[i]
        } else {
            areEqual = false
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }

    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArray(['10','20','30'],

['10','20','30'])