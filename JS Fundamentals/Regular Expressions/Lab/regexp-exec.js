let literalPattern = /(?<funcName>\w+)\(\)/g;

let text = "When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update";

let match = literalPattern.exec(text);

// run all matches

while (match) {
    console.log(match.groups.funcName); // named capturing group
    console.log(`Found match '${match[0]}' on index ${match.index} - ${match[1]}`); // numberd capturing group
    match = literalPattern.exec(text);
}