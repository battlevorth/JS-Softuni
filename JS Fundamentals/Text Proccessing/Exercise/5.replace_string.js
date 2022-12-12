function replace(string) {
    let output = string.slice(0,1);
    for (let index = 1; index < string.length; index++) {
        const current = string[index];
        const prev = string[index - 1];
        
        if (current !== prev) {
            output += current
        }
    }
    console.log(output);
}
replace('abbbbbcdddeeeedssaa'
)