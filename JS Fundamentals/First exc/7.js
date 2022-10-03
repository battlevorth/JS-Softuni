function triangle(constraints) {
    for (let currnum = 1; currnum <= constraints; currnum++) {
        let print = ``;
        for (let printline = 1; printline <= currnum; printline++) {
            print += ` ${currnum}`
        }
        console.log(print);
    }
}
triangle(5)