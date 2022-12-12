let phoneBookMap = new Map();

phoneBookMap.set(`pesho`, `2939129321`);
phoneBookMap.set(`mariyka`, `2321312423`);
phoneBookMap.set(`gesho`, `0093201230`);

console.log(phoneBookMap);

console.log(phoneBookMap.get(`gesho`));

console.log(phoneBookMap.size);

if (phoneBookMap.has(`pesho`)) {
    console.log(`Peshe is in the house`);
}

//Delete value in map
phoneBookMap.delete(`gesho`);

//Get keys in map
console.log(phoneBookMap.keys());

//Iterate keys in map
for (const keys of phoneBookMap.keys()) {
    console.log(keys);
}

//Iterate values in map
for (const value of phoneBookMap.values()) {
    console.log(value);
}

//Iterate map
for (const kvp of phoneBookMap) {
    console.log(kvp);
}

//Iterate entries in map
for (const [name, phone] of phoneBookMap.entries()) {
    console.log(`${name} => ${phone}`);
}

//Convert map into objdect

let pb = Object.fromEntries(phoneBookMap.entries());