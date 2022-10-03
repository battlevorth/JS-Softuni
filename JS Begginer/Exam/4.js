function stavri(input){
    let daysCount = Number(input[0]);
    let index = 1;
    let litter = Number(input[index]);
    index++
    let alcho = Number(input[index]);
    let totalLiter = 0;
    let totalAlcho = 0;

    for (let i = 1; i <= daysCount; i++) {
        totalLiter += litter;
        totalAlcho += litter * alcho
        index++
        litter = Number(input[index]);
        index++;
        alcho = Number(input[index])
    }
    let totalDegree = totalAlcho / totalLiter
    console.log(`Liter: ${totalLiter.toFixed(2)}`);
    console.log(`Degrees: ${totalDegree.toFixed(2)}`);
    if (totalDegree < 38) {
        console.log(`Not good, you should baking!`);
    }else if (totalDegree <= 42){
        console.log(`Super!`);
    }else{
        console.log(`Dilution with distilled water!`);
    }
}
stavri(["2",
"200",
"43",
"200",
"40"])

