function moving(input) {
    let widht = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = widht * lenght * height

    let index = 3;
    let currentBoxVolume = input[index];

    let sumBoxessVolume = 0;

    while (sumBoxessVolume <= freeSpace && currentBoxVolume !== `Done`) {
        currentBoxVolume = Number(input[index]);
        sumBoxessVolume += currentBoxVolume;
        index++;
        if (sumBoxessVolume > freeSpace) {
            console.log(`No more free space! You need ${sumBoxessVolume - freeSpace} Cubic meters more.`);
            break;
        }
        currentBoxVolume = input[index];
    }

    if (sumBoxessVolume <= freeSpace) {
        console.log(`${freeSpace - sumBoxessVolume} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])