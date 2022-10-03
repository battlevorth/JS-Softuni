function swimRecord(input){
    let recordSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let metersPerSecond = Number(input[2]);

    let time = meters * metersPerSecond;
    let addedTime = (Math.floor(meters / 15)) * 12.5 ;

    let totalTime = time + addedTime;
    

    if (recordSeconds <= totalTime) {
        timeDiff = Math.abs(totalTime - recordSeconds)
        console.log(`No, he failed! He was ${timeDiff.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)

    }
    

}
swimRecord(["55555.67",
"3017",
"5.03"])