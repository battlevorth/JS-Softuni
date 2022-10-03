function multTable(num) {
    for (let index = 1; index <= 10; index++) {
        let sum = num * index;
        let printline = `${num} X ${index} = ${sum}`
        console.log(printline);
    }
}
multTable(2)