function sorting(array) {
    let sortedInAsceding = array.sort((a,b) => {return a - b});
    let outPutArray = [];
    for (let index = 0; index < sortedInAsceding.length;) {
        let lastElement = sortedInAsceding.pop();
        outPutArray.push(lastElement)
        let firstElement = sortedInAsceding.shift(index);
        outPutArray.push(firstElement);
    }
    console.log(outPutArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])