function fishTank(input){
    let lenght = Number(input[0]);
    let widgh = Number(input[1]);
    let height = Number(input[2]);
    let closedSpace = Number(input[3] / 100);
    let name = input[4];

    let expand = lenght * widgh * height;
    let liters = expand / 1000;

    let littersNeeded = liters * ( 1 - closedSpace)
    
    console.log(`${name}, will need ${littersNeeded} litters to fill his fishtank`)
}
fishTank([85,75,47,17,`Daniel`])

