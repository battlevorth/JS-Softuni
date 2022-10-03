function comision(input) {
    let town = input[0];
    let sales = Number(input[1]);

    let com = 0;


    if (town === `Sofia`) {
        if (sales >= 0 && sales <= 500) {
            let com = sales * 0.05;
            console.log(com.toFixed(2));
        } else if (sales >= 500 && sales <= 1000) {
            let com = sales * 0.07;
            console.log(com.toFixed(2));
        } else if (sales >= 1000 && sales <= 10000) {
            let com = sales * 0.08;
            console.log(com.toFixed(2));
        } else if (sales > 10000) {
            let com = sales * 0.12;
            console.log(com.toFixed(2))
        } else {
            console.log(`error`);
        }

    } else if (town === `Varna`) {
        if (sales >= 0 && sales <= 500) {
            let com = sales * 0.045
            console.log(com.toFixed(2));
        } else if (sales >= 500 && sales <= 1000) {
            let com = sales * 0.075;
            console.log(com.toFixed(2));
        } else if (sales >= 1000 && sales <= 10000) {
            let com = sales * 0.10;
            console.log(com.toFixed(2));
        } else if (sales > 10000) {
            let com = sales * 0.13;
            console.log(com.toFixed(2))
        } else {
            console.log(`error`);
        }

    } else if (town === `Plovdiv`) {
        if (sales >= 0 && sales <= 500) {
            let com = sales * 0.055
            console.log(com.toFixed(2));
        } else if (sales >= 500 && sales <= 1000) {
            let com = sales * 0.08;
            console.log(com.toFixed(2));
        } else if (sales >= 1000 && sales <= 10000) {
            let com = sales * 0.12;
            console.log(com.toFixed(2));
        } else if (sales > 10000) {
            let com = sales * 0.145;
            console.log(com.toFixed(2))
        } else {
            console.log(`error`);
        }

    }else {
        console.log(`error`);
    }
}
comision(["Kaspichan",
"-50"])