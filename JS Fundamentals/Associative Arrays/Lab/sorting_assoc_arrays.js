let phoneBook = {
    ivaylo: `2032012139`,
    pesho: `12032139823`,
    gosho: `29912389213`,
    stamat: `1238372012`,
    mariyka: `2932721903`,
};

// Convert assoc array into normal array

let phoneBookEntries = Object.entries(phoneBook);

//Sort the array

phoneBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
//phoneBookEntries.sort(([keyA], [keyb]) => keyA.localeCompare(keyB));
console.log(phoneBookEntries);

//Optinal: convert back to assoc array

let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook);