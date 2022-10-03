function tennis(input) {
    let tournCount = Number(input[0]);
    let startPoint = Number(input[1]);
    index = 2;
    let result = input[index];

    let winCount = 0;
    let finalsCount = 0;
    let semiFinalsCount = 0;

    for (let i = 0; i < tournCount; i++) {
        result = input[index]
        index++
        switch (result) {
            case `W`: winCount += 1; break;
            case `SF`: semiFinalsCount += 1; break;
            case `F`: finalsCount += 1; break;
        }
    }

    let allPoints = winCount * 2000 + finalsCount * 1200 + semiFinalsCount * 720 + startPoint;

    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor((winCount * 2000 + finalsCount * 1200 + semiFinalsCount * 720) / tournCount)}`);
    console.log(`${((winCount / tournCount) * 100).toFixed(2)}%`);
}
tennis(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])