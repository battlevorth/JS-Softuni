function devidedBy9(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;

    for (let index = a; index <= b; index++) {
        if(index % 9 === 0){
            sum+=index;
        }   
    }
    console.log(`The sum: ${sum}`);
    for (let index = a; index <= b; index++) {
        if(index % 9 === 0){
            console.log(index);
        }
    }
}
devidedBy9(["100", "200"])