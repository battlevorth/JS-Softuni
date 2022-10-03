function password(input){
    let username = input[0];
    let pass = input[1];
    index = 2;
    let currentTry = input[index];

    while (pass !== currentTry) {
        index++;
        currentTry = input[index];
        console.log(`Try Again`);
    }
    console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])