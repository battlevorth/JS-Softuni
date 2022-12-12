function thePianist(input) {
  let piecesList = {};
  let songsToAdd = Number(input.shift());
  let count = 0;

  while (count < songsToAdd) {
    let [piece, currComp, currKey] = input.shift().split("|");
    if (!piecesList[piece]) {
      piecesList[piece] = {};
      piecesList[piece]["Composer"] = currComp;
      piecesList[piece]["Key"] = currKey;
    }
    count++;
  }
  for (const line of input) {
    if (line.includes("Stop")) {
      break;
    } else if (line.includes("Add")) {
      let [com, piece, comp, key] = line.split("|");
      if (!piecesList.hasOwnProperty(piece)) {
        piecesList[piece] = {};
        piecesList[piece]["Composer"] = comp;
        piecesList[piece]["Key"] = key;
        console.log(`${piece} by ${comp} in ${key} added to the collection!`);
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (line.includes("Remove")) {
      let [comm, piece] = line.split("|");
      if (piecesList.hasOwnProperty(piece)) {
        delete piecesList[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (line.includes("ChangeKey")) {
      let [comm, piece, newKey] = line.split("|");
      if (piecesList.hasOwnProperty(piece)) {
        console.log(`Changed the key of ${piece} to ${newKey}!`);
        piecesList[piece]["Key"] = newKey;
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  for (const piece in piecesList) {
    console.log(
      `${piece} -> Composer: ${piecesList[piece]["Composer"]}, Key: ${piecesList[piece]["Key"]}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
