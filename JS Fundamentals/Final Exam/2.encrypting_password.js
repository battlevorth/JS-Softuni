function encrypting(input) {
  let regEx = /^(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1/g;
  let entriesCount = Number(input.shift());

  for (const line of input) {
    if (line.match(regEx)) {
        let matchedLine = line.matchAll(regEx);
        for (const currMatch of matchedLine) {
            console.log(`Password: ${currMatch.groups.first + currMatch.groups.second + currMatch.groups.third + currMatch.groups.fourth}`);
        }
    } else {
        console.log('Try another password!');
    }
  }
}
encrypting(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
