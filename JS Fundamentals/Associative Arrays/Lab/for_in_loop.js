let phoneBook = {
    ivaylo: `2032012139`,
    pesho: `12032139823`,
    stamat: `1238372012`,
    mariyka: `2932721903`,
};

for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
}