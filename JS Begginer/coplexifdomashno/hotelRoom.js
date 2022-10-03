function hotelRoom(input) {
    let mounth = input[0];
    let days = Number(input[1]);
    let studioPrice = 0;
    let apartPrice = 0;
    let studio = 0;
    let apartment = 0;
   
    switch (mounth) {
        case `May`:
        case `October`:
            studio = 50;
            apartment = 65;
            if (days > 7 && days <= 14) {
                studioPrice = (studio * days) * 0.95;
                apartPrice = apartment * days;
            } else if (days > 14) {
                studioPrice = (studio * days) * 0.70;
                apartPrice = (apartment * days) * 0.90;
            } else {
                studioPrice = studio * days;
                apartPrice = apartment * days
            }
            break;
        case `June`:
        case `September`:
            studio = 75.20;
            apartment = 68.70;
            if (days > 7 && days <= 14) {
                studioPrice = studio * days;
                apartPrice = apartment * days;
            } else if (days > 14) {
                studioPrice = (studio * days) * 0.80;
                apartPrice = (apartment * days) * 0.90;
            } else {
                studioPrice = studio * days;
                apartPrice = apartment * days
            }
            break;
        case `July`:
        case `August`:
            studio = 76;
            apartment = 77;
            if (days > 7 && days <= 14) {
                studioPrice = studio * days;
                apartPrice = apartment * days;
            } else if (days > 14) {
                studioPrice = studio * days;
                apartPrice = (apartment * days) * 0.90;
            } else {
                studioPrice = studio * days;
                apartPrice = apartment * days
            }
            break;

    }
    console.log(`Apartment: ${apartPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["July",
"12"])