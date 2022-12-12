function printPartyList(input) {
    let guests = new Map();

    for (const guest of input) {
        let didGuestCame = `no`
        if (guest === `PARTY`) {
        }else{
            if (guests.has(guest)) {
                didGuestCame = `yes`;
            }
            guests.set(guest,didGuestCame);
            if (guests.has(guest) && didGuestCame === `yes`) {
                guests.delete(guest)
            }
        }
    }
    
    let sortedGuestsList = Array.from(guests).sort((kvpA, kvpB) =>
    kvpA[0].localeCompare(kvpB[0]));
    
    for (const guest of sortedGuestsList) {
        console.log(guest[0]);
    }
    
}
printPartyList(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])