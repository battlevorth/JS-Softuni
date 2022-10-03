function commonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let currentElement = array1[i]
        for (let i = 0; i < array2.length; i++) {
            if (currentElement === array2[i]) {
                console.log(currentElement);
            }
        }
    }
}
commonElement(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

    ['s', 'o', 'c', 'i', 'a', 'l'])