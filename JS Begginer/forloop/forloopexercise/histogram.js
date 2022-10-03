function histogram(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;//index++ v sluchaq dobavq 1nica kum input[index] za da moje v loopa currentNumber da vzima 2roto chislo v masiva
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;
    let p4count = 0;
    let p5count = 0;

    for (let i = 0; i < number; i++) {
        let currentNumber = Number(input[index]);
        index++//index ++ dobavq 1ca input[index] za da moje loopa da izvajda vsqko sledvashto chislo ot masiva
        if (currentNumber < 200) {
            p1count++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2count++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3count++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4count++;
        } else {
            p5count++;
        }
    };
    p1 = (p1count / number) * 100;
    p2 = (p2count / number) * 100;
    p3 = (p3count / number) * 100;
    p4 = (p4count / number) * 100;
    p5 = (p5count / number) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["9","367","99","200","799","999","333","555","111","9"])

