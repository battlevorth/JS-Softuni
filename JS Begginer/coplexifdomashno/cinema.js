function cinema(input){
    let movieType = input[0];
    let rows = Number(input[1]);
    let collons = Number(input[2]);

    let earning = 0;

    if (movieType === `Premiere`){
        let seats = rows * collons;
        let ticketPrice = 12.00;
        earning = seats * ticketPrice;
        console.log (`${earning.toFixed(2)} leva`);
    } else if (movieType === `Normal`){
        let seats = rows * collons;
        let ticketPrice = 7.5;
        earning = seats * ticketPrice;
        console.log (`${earning.toFixed(2)} leva`);
    } else if (movieType === `Discount`){
        let seats = rows * collons;
        let ticketPrice = 5;
        earning = seats * ticketPrice;
        console.log (`${earning.toFixed(2)} leva`)
    }
}
cinema(["Discount",
"12",
"30"])