function biggestNum(input){
    let index = 0;
    let num = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while(num !== 'Stop'){
        let currentNum = Number(input[index]);
        if (currentNum < min) {
            min = currentNum; 
        }
        index++;
        num = input[index];
    }
    console.log(min);
}
biggestNum(["-10",
"20",
"-30",
"Stop"])