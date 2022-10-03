function time(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours * 60 + minutes + 15;
    let cH =Math.floor (time / 60);
    let cM = time % 60;

    if (cH > 23){
        cH = 0;
    }
    if (cM < 10){
        console.log(`${cH}:0${cM}`)
    } else {
        console.log(`${cH}:${cM}`)
    }

    

}
time(["23", "59"])