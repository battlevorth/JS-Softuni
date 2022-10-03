function reverseArray(number, array) {
    let newArray = [];
    for (let i = 0; i < number; i++) {
        newArray.push(array[i]); 
    }
    for (let a = newArray.length - 1; a >= 0 ; a--) {
        result +=` ${newArray[a]}`;  
    }
    console.log(result);
}
reverseArray(3, [10, 20, 30, 40, 50])