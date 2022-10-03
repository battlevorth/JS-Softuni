function cenToMinutes(numOfCenturies) {
    let centuries = numOfCenturies;
    let yearsInCenturies = centuries * 100;
    let daysInCenturies = Math.trunc(yearsInCenturies * 365.2422);
    let hoursInCenturies = daysInCenturies * 24;
    let minutesInCenturies = hoursInCenturies * 60;

    console.log(`${centuries} centuries = ${yearsInCenturies} years = ${daysInCenturies} days = ${hoursInCenturies} hours = ${minutesInCenturies} minutes`);

}
cenToMinutes(32)