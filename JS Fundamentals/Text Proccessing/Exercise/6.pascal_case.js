function pascal(text) {
    let output = text[0];

    for (let index = 1; index < text.length; index++) {
        const currLetter = text[index];
        if (currLetter.charCodeAt() >= 65 && currLetter.charCodeAt() <= 90) {
            output += `, ${currLetter}`;
        }else{
            output += currLetter;
        }
    }   
    console.log(output); 
}
pascal("SplitMeIfYouCanHaHaYouCantOrYouCan");
