function decrypting(input) {
  let messageToDecrypt = input.shift();

  for (const line of input) {
    if (line.includes("Replace")) {
      let [comm, currChar, newChar] = line.split(" ");
      //   messageToDecrypt = messageToDecrypt.replaceAll(currChar, newChar);
      while (messageToDecrypt.indexOf(currChar) >= 0) {
        messageToDecrypt = messageToDecrypt.replace(currChar, newChar);
      }
      console.log(messageToDecrypt);
    } else if (line.includes("Cut")) {
      let [comm, startIndex, endIndex] = line.split(" ");
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      if (startIndex < 0 || endIndex > messageToDecrypt.length) {
        console.log("Invalid indices!");
      } else {
        messageToDecrypt =
          messageToDecrypt.slice(0, startIndex) +
          messageToDecrypt.slice(endIndex + 1);
        console.log(messageToDecrypt);
      }
    } else if (line.includes("Make")) {
      let [comm, upOrLow] = line.split(" ");
      if (upOrLow === "Upper") {
        messageToDecrypt = messageToDecrypt.toUpperCase();
        console.log(messageToDecrypt);
      } else if (upOrLow === "Lower") {
        messageToDecrypt = messageToDecrypt.toLowerCase();
        console.log(messageToDecrypt);
      }
    } else if (line.includes("Check")) {
      let [comm, lineToCheck] = line.split(" ");
      if (messageToDecrypt.includes(lineToCheck)) {
        console.log(`Message contains ${lineToCheck}`);
      } else {
        console.log(`Message doesn't contain ${lineToCheck}`);
      }
    } else if (line.includes("Sum")) {
      let [comm, startIndex, endIndex] = line.split(" ");
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      if (startIndex < 0 || endIndex > messageToDecrypt.length) {
        console.log("Invalid indices!");
      } else {
        substring = messageToDecrypt.slice(startIndex, endIndex + 1);
        let sum = 0;
        for (const char of substring) {
          let currCharAsci = char.charCodeAt();
          sum += currCharAsci;
        }
        console.log(sum);
      }
    } else if (line.includes("Finish")) {
      break;
    }
  }
}
decrypting(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
