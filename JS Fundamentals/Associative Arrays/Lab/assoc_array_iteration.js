let phoneBook = {
    ivaylo: `2032012139`,
    pesho: `12032139823`,
    stamat: `1238372012`,
    mariyka: `2932721903`,
};

// let phoneBookEntries = Object.entries(phoneBook);

// for (const kvp of phoneBookEntries) {
//     let [name, phone] = kvp;

//     console.log(`${name} -> ${phone}`);
// }

//Shorter syntax

// for (const kvp of Object.entries(phoneBook)) {
//     let [name, phone] = kvp;

//     console.log(`${name} -> ${phone}`);
// }

//Even shorter syntax

for (const [name, phone] of Object.entries(phoneBook)) {
    console.log(`${name} -> ${phone}`);
}