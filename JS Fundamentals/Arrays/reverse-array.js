function revers(array) {
    let result = ``;
    for (let i = array.length - 1; i >= 0; i--) {
        result +=` ${array[i]}`;
    }
    console.log(result);
}
revers(['abc', 'def', 'hig','klm', 'nop'])