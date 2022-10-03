function vacations(input) {
    let seaVacations = Number(input[0]);
    let mntVacations = Number(input[1]);
    let index = 2;
    let currentVacation = input[index];

    let totalVac = seaVacations + mntVacations

    let summerCount = seaVacations;
    let mntCount = mntVacations;

    let totalProfit = 0;

    for (let i = 0; i <= totalVac && currentVacation !== `Stop`; i++) {
        if (currentVacation === `sea`) {
            if (summerCount > 0) {
                totalProfit += 680;
                summerCount -= 1;
            }
        }else if (currentVacation === `mountain`){
            if (mntCount > 0) {
                totalProfit += 499;
                mntCount -= 1;
            }
        }
        index++;
        currentVacation = input[index];
    }
    let vacLeft = summerCount + mntCount
    if (vacLeft <= 0) {
        console.log(`Good job! Everything is sold.`);
    }
    console.log(`Profit: ${totalProfit} leva.`);
}
vacations(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea","mountain","mountain","mountain","mountain","mountain",
"Stop"])