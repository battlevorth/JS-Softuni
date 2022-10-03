function arrrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currentElement = array.shift();
        array.push(currentElement);
    }
    console.log(array.join(` `)); 
}
arrrayRotation([2, 4, 15, 31], 5)