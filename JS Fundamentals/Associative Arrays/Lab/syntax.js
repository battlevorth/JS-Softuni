let propertyName = `ivan`

let phoneBook = {
    ivaylo: `0885969432`,
    pesho: `0999215942`,
    [propertyName]: `2819238812`, // dynamic property name
}



console.log(phoneBook.ivaylo);
console.log(phoneBook[`pesho`]);
console.log(phoneBook[propertyName]);

let calc = 3/3/3/3/3/3
console.log(calc);