// String searching with indexOf
let text = 'Im about to find another man to kill the man chikeck,man is strong';
let manIndex = text.indexOf('man'); // returns -1 of the word does not exist
console.log(manIndex);

// Find second man
let secondIndexOfMan = text.indexOf('man',manIndex+1);
console.log(secondIndexOfMan);

// Last indexOf
let lastIndexOfMan = text.lastIndexOf('man');
console.log(lastIndexOfMan);

// Get all indexes
let index = text.indexOf('man')
while (index >= 0) {
    console.log('"Man" found on postion ' + index);
    index = text.indexOf('man', index +1)
}
