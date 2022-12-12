function printAddressBook(input) {
    let addressBook = {};

    for (const entry of input) {
        let [name, address] = entry.split(`:`);
        addressBook[name] = address;
    }
    
    let adressBookEntries = Object.entries(addressBook);
    adressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of adressBookEntries) {
        let [name, address] = entry

        console.log(`${name} -> ${address}`);
    }
}

printAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])