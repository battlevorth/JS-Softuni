function maxSequence(array) {
    let longestSequel = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let currentSequence = [currentElement];

        for (let b = i + 1; b < array.length; b++) {
            if (currentElement === array[b]) {
                currentSequence.push(array[b]);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequel.length) {
            longestSequel = currentSequence;
        }
    }
    console.log(longestSequel.join(` `));
}
maxSequence([2, 3, 3, 2, 2, 2, 1, 1, 1, 1])

// function maxSequence(array) {
//     let sequenceCount = 0;
//     let repeatebleNumber = ``;
//     for (let index = 0; index < array.length; index++) {
//         if (!array[index+1]) {
//             break;
//         }
//         if (array[index] === array[index+1]) {
//             sequenceCount++;
//             repeatebleNumber = array[index];
//         }
//     }
//     console.log(repeatebleNumber);
// }
// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])