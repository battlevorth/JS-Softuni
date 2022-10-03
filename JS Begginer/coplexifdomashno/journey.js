function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let type;
    let needs = 0;
    let destination;

    if (budget <= 100) {
        destination = `Bulgaria`;
        switch (season) {
            case `summer`:
                type = `Camp`;
                price = budget * 0.30; break;
            case `winter`:
                type = `Hotel`;
                price = budget * 0.70;
        }
    }else if (budget <= 1000) {
        destination = `Balkans`;
        switch (season) {
            case `summer`:
                type = `Camp`;
                price = budget * 0.40; break;
            case `winter`:
                type = `Hotel`;
                price = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = `Europe`;
        switch (season) {
            case `summer`:
                type = `Hotel`;
                price = budget * 0.90; 
            case `winter`:
                type = `Hotel`;
                price = budget * 0.90;break;
        }
    }
    needs = Math.abs(price);
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${needs.toFixed(2)}`)
}
journey(["1500", "summer"])
