function examPrep(input) {
    let maxBadGrades = Number(input[0]);
    let index = 1;
    let problemName = input[index];
    index++
    let problemGrade = 0;
    let taskName = ``;
    let badGradesCount = 0;
    let problemCount = 0;

    while (problemName !== `Enough`) {
        taskName = problemName;
        let currGrade = Number(input[index]);
        if (currGrade <= 4) {
            problemGrade += currGrade;
            badGradesCount++;
            problemCount++;
            if (badGradesCount >= maxBadGrades) {
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                break;
            }
        } else {
            problemGrade += currGrade;
            problemCount++
        }
        index++;
        problemName = input[index];
        index++
    }
    let avarageGrade = problemGrade / problemCount

    if (badGradesCount < maxBadGrades) {
        console.log(`Average score: ${avarageGrade.toFixed(2)}`)
        console.log(`Number of problems: ${problemCount}`)
        console.log(`Last problem: ${taskName}`)
    }

}
examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])