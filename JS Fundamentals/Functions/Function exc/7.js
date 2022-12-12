function matrix(number) {
    let rowGenerator = () =>{
        let singleRow = ``;
        for (let index = 0; index < number; index++) {
            singleRow += `${number} `;  
        }
        return singleRow;
    }
    for (let i = 0; i < number; i++) {
        console.log(rowGenerator());;
    }
}
matrix(7);