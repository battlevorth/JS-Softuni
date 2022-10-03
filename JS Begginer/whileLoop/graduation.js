function graduation(input) {
    let name = input[0];
    let grade = 1;
    let excluded = 0;
    let avarageGrade = 0;
    let index = 1;

    while(grade <= 12){
        let currentGrade = Number(input[grade]);
        if (currentGrade >= 4) {
            avarageGrade += currentGrade
            grade++; 
        } else {
            excluded++;
            if(excluded >= 2){
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
        }
    }
    let sum = avarageGrade/12; 
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
    }  
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])