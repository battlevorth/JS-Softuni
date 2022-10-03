function animals(input) {
    let animals = input[0];

    switch (animals) {
        case `dog`:
            console.log(`mammal`); break;
        case `snake`:
        case `crocodile`:
        case `tortoise`:
            console.log(`reptile`); break;
        default:
            console.log(`unknown`); break;
    }
}