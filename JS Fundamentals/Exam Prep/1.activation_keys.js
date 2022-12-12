function activationKeys(input) {
  let rawActivationKey = input.shift();
  for (const line of input) {
    if (line.includes("Contains")) {
      let [word, subCheck] = line.split(">>>");
      if (rawActivationKey.includes(subCheck)) {
        console.log(`${rawActivationKey} contains ${subCheck}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (line.includes("Flip")) {
      let splitedLine = line.split(">>>");
      let upperOrLower = splitedLine[1];
      let startIndex = splitedLine[2];
      let endIndex = splitedLine[3];
      let charsToFlip = rawActivationKey.slice(startIndex, endIndex);
      if (upperOrLower === "Upper") {
        rawActivationKey = rawActivationKey.replace(
          charsToFlip,
          charsToFlip.toUpperCase()
        );
        console.log(rawActivationKey);
      } else if (upperOrLower == "Lower") {
        rawActivationKey = rawActivationKey.replace(
          charsToFlip,
          charsToFlip.toLowerCase()
        );
        console.log(rawActivationKey);
      }
    } else if (line.includes("Slice")) {
      let splitedLine = line.split(">>>");
      let startIndex = splitedLine[1];
      let endIndex = splitedLine[2];
      let charsToRemove = rawActivationKey.slice(startIndex, endIndex);
      rawActivationKey = rawActivationKey.replace(charsToRemove, "");
      console.log(rawActivationKey);
    } else if (line.includes("Generate")) {
      console.log(`Your activation key is: ${rawActivationKey}`);
    }
  }
}
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
