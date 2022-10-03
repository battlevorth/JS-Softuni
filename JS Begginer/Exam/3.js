function vacation(input) {
    let ppl = Number(input[0]);
    let season = input[1];

    let currentSeason = 0;

    if (ppl > 5) {
        switch (season) {
            case `spring`:
                currentSeason = 48;
                break;
            case `summer`:
                currentSeason = 45;
                break;
            case `autumn`:
                currentSeason = 49.5;
                break;
            case `winter`:
                currentSeason = 85;
                break;
        }
    } else {
        switch (season) {
            case `spring`:
                currentSeason = 50;
                break;
            case `summer`:
                currentSeason = 48.5;
                break;
            case `autumn`:
                currentSeason = 60;
                break;
            case `winter`:
                currentSeason = 86;
                break;
        }
    }
    if (season === `summer`) {
        console.log(`${(ppl * currentSeason * 0.85).toFixed(2)} leva.`);
    } else if (season === `winter`) {
        console.log(`${(ppl * currentSeason * 1.08).toFixed(2)} leva.`);
    } else {
        console.log(`${(ppl * currentSeason).toFixed(2)} leva.`);
    }
}
vacation(["20",
    "winter"])