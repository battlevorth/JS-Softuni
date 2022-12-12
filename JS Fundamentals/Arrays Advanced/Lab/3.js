function firstAndLastKNumbers(array) {
    let newArray = array.shift();
    
    
    let first = (array.slice(0,newArray)).join(` `);
    let last = (array.slice(array.length - newArray).join(` `));
    console.log(first);
    console.log(last);
}
firstAndLastKNumbers([2, 7, 8, 9])