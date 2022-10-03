function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let floorStr = ``;
        for (let n = 0; n < rooms; n++) {
            if (i === floors) {
                floorStr += `L${i}${n} `;
            } else if (i % 2 === 0){
                floorStr += `O${i}${n} `;
            } else {
                floorStr += `A${i}${n} `;
            }
        }
        console.log(floorStr);
    }
}
building(["6", "4"])