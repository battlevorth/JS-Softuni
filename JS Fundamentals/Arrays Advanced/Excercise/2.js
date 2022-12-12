function distincArray(givenArray) {
    let outputArray = [];
    for (let number of givenArray) {
        if (outputArray.indexOf(number) === -1) {
            outputArray.push(number)
        }
    }
    console.log(outputArray.join(` `));
}
distincArray([7, 8, 9, 7, 2, 3, 4, 1, 2])