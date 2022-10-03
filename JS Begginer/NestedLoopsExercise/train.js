function train(input) {
    let juryNum = Number(input[0]);
    let index = 1;
    let examName = input[index];
    index++;
    let examsSumGrade = 0;
    let examsCount = 0;

    while (examName !== `Finish`) {
        examsCount++;
        let gradesSum = 0;
        let grades = Number(input[index]);
        for (let i = 0; i < juryNum; i++) {
            gradesSum += grades;
            index++;
            grades = Number(input[index]);
        }
        gradesSum = gradesSum / juryNum;
        examsSumGrade += gradesSum;
        console.log(`${examName} - ${gradesSum.toFixed(2)}.`);
        examName = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(examsSumGrade / examsCount).toFixed(2)}.`);


}
train(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])