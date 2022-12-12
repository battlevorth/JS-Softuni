let phoneBook = {
    ivaylo: `2032012139`,
    pesho: `12032139823`,
    stamat: `1238372012`,
    mariyka: `2932721903`,
};

// Check if there's an entry

if (phoneBook.hasOwnProperty(`ivaylo`)) {
    console.log(`Entry found:` + phoneBook[`ivaylo`]);
}

if (phoneBook[`pesho`]) {
    console.log(`Entry found:` + phoneBook[`pesho`]);
}