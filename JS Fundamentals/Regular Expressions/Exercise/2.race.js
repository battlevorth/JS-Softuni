function raceResult(input) {
    let kmPattern = /\d/g;
    let namePattern = /[A-Za-z]/g;
    let resultList = {};
    let playersInput = input.shift().split(', ');
    for (const currPlayer of playersInput) {
        if (!resultList[currPlayer]) {
            resultList[currPlayer] = 0;
        }
    }
    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        let currName = line.match(namePattern).join('');
        let currKms = line.match(kmPattern);
        let totalKms = 0;
        for (const km of currKms) {
            totalKms += Number(km);
        }
        if (resultList.hasOwnProperty(currName)) {
            resultList[currName] += totalKms;
        }
    }
    let sortedResultList = Object.entries(resultList).sort((kvpA,kvpB) => kvpB[1] - kvpA[1]);

    let firstPlace = sortedResultList[0][0];
    let secondPlace = sortedResultList[1][0];
    let thirdPlace = sortedResultList[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}
raceResult(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])