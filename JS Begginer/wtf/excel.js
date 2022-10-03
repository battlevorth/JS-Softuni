function passWord(input){
    let passgWord = "s3cr3t!P@ssw0rd";
    let guessPassword = (input[0]);
    if (guessPassword === passgWord){
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }

}
passWord(["s3cr3t!P@ssw0rd"])
