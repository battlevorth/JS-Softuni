function books(input) {
    let favBook = input[0];
    let index = 1;
    let currentBook = input[index];
    let booksCount = 0;

    while (currentBook !== 'No More Books') {
        if (favBook === currentBook) {
            console.log(`You checked ${booksCount} books and found it.`);
            break;
        }
        booksCount++;
        index++;
        currentBook = input[index];
    }
    if (currentBook === 'No More Books') {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCount} books.`);
    }
}
books(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
