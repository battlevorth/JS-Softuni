function rightPlace(name, char, rightName) {
    let result = name.replace(`_`,char);
    if (result === rightName) {
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
    
}
rightPlace('Str_ng', 'o',

'Strong')