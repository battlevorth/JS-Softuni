function cinemaNom(input) {
    let name = input[0];
    let stats = Number(input[1]);
    let n = Number(input[2]);
    let index = 3;

    for (let i = 0; i < n; i++) {
        let nName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        let points = (nName.length * judgePoints) / 2
        stats += points
        index++
        if (stats > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${stats.toFixed(1)}!`);
            break;
        }
    }
    if (stats < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - stats).toFixed(1)} more!`);
    }
}
cinemaNom(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])