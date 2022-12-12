let literalPattern = /(\w+)\(\)/g;

let text = "When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update";
// Match
let matches = text.match(literalPattern);
console.log(matches);

//Matchall
let allMatches = text.matchAll(literalPattern);

for (const match of allMatches) {
    console.log(match);
}