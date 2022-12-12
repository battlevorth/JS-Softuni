function smallestTwoNumbers(input) {
    let sortedInAsceding = input.sort((a,b) => {return a - b});
    console.log(sortedInAsceding.slice(0,2).join(` `));
}
smallestTwoNumbers([30, 15, 50, 5,46,33,21])