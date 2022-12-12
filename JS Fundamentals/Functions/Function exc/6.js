function passwrodValidator(password) {
    function passwordLenght(password) {
        let isPasswordLengthValid = false;
        let currentPasswordLenght = password.length;
        if (currentPasswordLenght < 6 || currentPasswordLenght > 10) {
            console.log(`Password must be between 6 and 10 characters`);
        } else {
            return (isPasswordLengthValid = true);
        }
    }

    function lettersAndDigits(password) {
        let passwordLenght = password.length;
        let isLettersAndDigitsValid = false;
        for (let index = 0; index < passwordLenght; index++) {
            let currentLetter = password[index];
            let currentLetterAsciiCode = currentLetter.charCodeAt();
            if ((currentLetterAsciiCode >= 48 && currentLetterAsciiCode <= 57) ||
                (currentLetterAsciiCode >= 65 && currentLetterAsciiCode <= 90) ||
                (currentLetterAsciiCode >= 97 && currentLetterAsciiCode <= 122)
            ) {
                isLettersAndDigitsValid = true;
            } else {
                isLettersAndDigitsValid = false;
                console.log("Password must consist only of letters and digits");
                break;
            }
        }
        if (isLettersAndDigitsValid) {
            return isLettersAndDigitsValid;
        }
    }

    function atleastTwoDigits(password) {
        let passwordLength = password.length;
        let numbersCount = 0;
        let isAtleastTwoDigitsValid = false
        for (let i = 0; i < passwordLength; i++) {
            let currentSymbol = password[i];
            if (!isNaN(currentSymbol)) {
                numbersCount++
            }
        }
        if (numbersCount >= 2) {
            return (isAtleastTwoDigitsValid = true);
        } else {
            console.log(`Password must have at least 2 digits`);
        }
    }
    let IsPasswordLenght = passwordLenght(password);
    let IslettersAndDigits = lettersAndDigits(password);
    let IsAtleastTwoDigits = atleastTwoDigits(password);

    if (IsPasswordLenght === true && IslettersAndDigits === true && IsAtleastTwoDigits === true) {
        console.log("Password is valid");
    }
} 
passwrodValidator('bb@33zar')




