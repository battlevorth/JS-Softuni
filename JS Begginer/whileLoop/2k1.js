function num2k1(input){
    let num = Number(input[0]);
    let currentNumb = 1;

    while(num >= currentNumb){
       console.log(currentNumb);
       currentNumb = (currentNumb*2) + 1
    }
    
}
num2k1(["31"])