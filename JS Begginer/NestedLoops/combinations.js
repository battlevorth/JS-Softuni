function combitnations(input) {

    let result = Number(input[0]);
    let combPossible = 0;

    for (let fn = 0; fn <= result; fn++) {
        for (let sn = 0; sn <= result; sn++) {
            for (let thn = 0; thn <= result; thn++) {
                let currentResult = fn + sn + thn;
                if (currentResult == result) {
                    combPossible++
                }
            }

        }

    }
    console.log(combPossible);
}
combitnations(["20"])