function loadingBar(percent) {

    let percentCount = `%`.repeat(percent/10);
    let dotCount = `.`.repeat(10 - (percent/10));
    
    if (percent === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${percent}% [${percentCount}${dotCount}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100)