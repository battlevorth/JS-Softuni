function lunchBreak(input){
    let name = input[0];
    let episodeLenght = Number(input[1]);
    let fullBreak = Number(input[2]);

    let lunch = fullBreak * (1/8);
    let relax = fullBreak * (1/4);

    let timeRemaining = (fullBreak - lunch - relax);

    let watchTime = Math.abs(episodeLenght - timeRemaining)

    if (timeRemaining >= episodeLenght){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(watchTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(watchTime)} more minutes.`)
    }


}
lunchBreak(["Teen Wolf",
"48",
"60"])
