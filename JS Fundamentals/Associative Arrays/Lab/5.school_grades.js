function printGrades(input) {
    let grades = {};

    for (let line of input) {
        let [name] = line.split(` `);
        line = line.split(` `);
        line.shift();
        let count = 0;
        let finalGrade = 0;
        let timesInList = 1;
        for (let grade of line) {
            count++;
            grade = Number(grade);
            finalGrade += grade;
        }
        finalGrade = (finalGrade / count)
        if (grades[name]) {
            timesInList++;
            finalGrade += Number(grades[name]);
        }
        finalGrade = (finalGrade / timesInList).toFixed(2);
        grades[name] = finalGrade;
    }

    let gradesEntries = Object.entries(grades);
    gradesEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));


    for (let [name, grade] of gradesEntries) {
        console.log(`${name}: ${grade}`);
    }
}
printGrades(['Steven 3',
'George 4 6',
'Tammy 2 5 3',
'Steven 3 ',
`Alison 5 5 5 5 5`,
`Steven 3 3 3`,
`Steven 3 6 3 2`])

