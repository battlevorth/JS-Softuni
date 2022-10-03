function pyramid(base, blockHeight) {
    let pyramidHeight = 0;
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisLazuliNeeded = 0;
    let goldNeeded = 0;
    while (base > 0 ) {
        pyramidHeight++;
        if (pyramidHeight % 5 === 0) {
            stoneNeeded += ((base - 2) * (base - 2)) * blockHeight;
            lapisLazuliNeeded += ((base * 4) - 4) * blockHeight;
        }else if(base > 2) {
            stoneNeeded += ((base - 2) * (base - 2)) * blockHeight;
            marbleNeeded += ((base * 4) - 4) * blockHeight;
        }else{
            goldNeeded = (base * base) * blockHeight
        }
        base = base - 2;
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * blockHeight)}`);
}
pyramid(3.5, 1)