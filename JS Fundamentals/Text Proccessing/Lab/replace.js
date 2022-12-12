let text = 'Im about to find another man to kill the man chikeck,man is strong';

// Replace first occurance
let replacedMan = text.replace('man', 'Biser');
console.log(replacedMan);

// Replace all
let replaceAllMan = text;
while (replaceAllMan.indexOf('man') >= 0) {
    replaceAllMan = replaceAllMan.replace('man', 'Biser');
}
console.log(replaceAllMan);