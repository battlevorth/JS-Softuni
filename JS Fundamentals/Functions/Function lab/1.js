// // function exam(grade) {
// //     if (grade < 3) {
// //         console.log(`Fail (2)`);
// //     }else if(grade < 3.5){
// //         console.log(`Poor (${grade.toFixed(2)})`);
// //     } else if (grade < 4.5){
// //         console.log(`Good (${grade.toFixed(2)})`);
// //     }else if (grade < 5.5){
// //         console.log(`Very good (${grade.toFixed(2)})`);
// //     }else{
// //         console.log(`Excellent (${grade.toFixed(2)})`);
// //     }
// }
function exam(grade) {
    let gradeName = ``;
    if (grade < 3) {
        grade = 2;
        gradeName = `Fail`;
    }else if(grade < 3.5){
        gradeName = `Poor`;
    } else if (grade < 4.5){
        gradeName = `Good`;
    }else if (grade < 5.5){
        gradeName = `Very good`;
    }else{
        gradeName = `Excellent`;
    }
    console.log(`${gradeName} (${grade.toFixed(2)})`);
}
exam(4.50)