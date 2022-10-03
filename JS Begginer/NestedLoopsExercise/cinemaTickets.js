function cinema(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let freeSeats = Number(input[index]);
    let studentCount = 0;
    let standartCount = 0;
    let kidsCount = 0;
    let totalTickets = 0;

    while (movie !== `Finish`) {
        let currentMovieTickets = 0;
        index++;
        let ticketType = input[index];
        while (ticketType !== `End` && currentMovieTickets < freeSeats) {
            switch (ticketType) {
                case `standard`:
                    standartCount++;
                    currentMovieTickets++;
                    totalTickets++;
                    break;
                case `kid`:
                    kidsCount++;
                    currentMovieTickets++;
                    totalTickets++;
                    break;
                case `student`:
                    studentCount++;
                    currentMovieTickets++;
                    totalTickets++;
                    break;
            }
            index++;
            ticketType = input[index];
        }
        if (ticketType === `End`) {
            index++;
        }
        let currentMoviePercentage = (currentMovieTickets / freeSeats) * 100;
        console.log(`${movie} - ${currentMoviePercentage.toFixed(2)}% full.`);
        movie = input[index];
        index++;
        freeSeats = Number(input[index]);
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentCount / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartCount / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsCount / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinema(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])