function repeatString(string, count) {
    let result = ``;

    for (let index = 0; index < count; index++) {
        result += string;
        
    }
    return result;
}
repeatString("arw", 5);

console.log(repeatString("arw", 5));