function imitationGame(input) {
   let stringToModify = input.shift();
   
   let currLine = input.shift();

   while (currLine !== 'Decode') {
    if (currLine.includes('ChangeAll')) {
        let splitedLine = currLine.split('|');
        let stringToReplace = splitedLine[1];
        let replacment = splitedLine[2];
        while (stringToModify.indexOf(stringToReplace) >= 0) {
            stringToModify = stringToModify.replace(stringToReplace, replacment);
        }
    } else if (currLine.includes('Insert')){
        let splitedLine = currLine.split('|');
        let index = splitedLine[1];
        let value = splitedLine[2];
        stringToModify = stringToModify.slice(0,index) + value + stringToModify.slice(index)
    } else if (currLine.includes('Move')){
        let [command,lettersToMove] = currLine.split('|');
        stringToModify = stringToModify.slice(lettersToMove) + stringToModify.slice(0,lettersToMove);
    }
    currLine = input.shift();
   }
   console.log(`The decrypted message is: ${stringToModify}`);
}
imitationGame([

    'owyouh',
    
    'Move|2',
    
    'Move|3',
    
    'Insert|3|are',
    
    'Insert|9|?',
    
    'Decode'
    
    ]);
