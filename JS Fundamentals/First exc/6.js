function printsums(start, end) {
    let sum = 0;
    let allnums = ``
    while (start <= end) {
        sum += start;
        allnums += ` ${start}`
        start++;
    }
    console.log(allnums.trim());
    console.log(`Sum: ${sum}`);
}
printsums(0, 26)