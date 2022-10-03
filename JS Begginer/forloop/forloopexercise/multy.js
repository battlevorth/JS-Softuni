function multy(input){
    let num = Number(input[0]);
    let sum = 0
    for (let n = 1; n <= 10; n++) {
     sum = n*num
        console.log(`${n} * ${num} = ${sum}`);
    }
    
}
multy([`5`])