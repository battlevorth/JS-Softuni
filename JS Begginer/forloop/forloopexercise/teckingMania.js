function treckingMania(input) {
    let countGroups = Number(input[0]);
    index = 1;
    let pplsInGroup = Number(input[index]);

    let allPart = 0;

    let musala = 0;
    let monblan = 0;
    let kalimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < countGroups; i++) {
        pplsInGroup = Number(input[index])
        allPart += Number(input[index]);
        index++

        if (pplsInGroup <= 5) {
            musala += pplsInGroup
        } else if (pplsInGroup >= 6 && pplsInGroup <= 12) {
            monblan += pplsInGroup
        } else if (pplsInGroup >= 13 && pplsInGroup <= 25) {
            kalimandjaro += pplsInGroup
        } else if (pplsInGroup >= 26 && pplsInGroup <= 40) {
            k2 += pplsInGroup
        } else {
            everest += pplsInGroup
        }
    }
    console.log(`${((musala/allPart) * 100).toFixed(2)}%`);
    console.log(`${((monblan/allPart) * 100).toFixed(2)}%`);
    console.log(`${((kalimandjaro/allPart) * 100).toFixed(2)}%`);
    console.log(`${((k2/allPart) * 100).toFixed(2)}%`);
    console.log(`${((everest/allPart) * 100).toFixed(2)}%`);
}
treckingMania(["5",
"25",
"41",
"31",
"250",
"6"])