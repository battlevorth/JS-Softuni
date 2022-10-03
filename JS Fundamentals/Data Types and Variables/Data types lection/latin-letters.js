function lattin(num) {
  for (let i = 0; i < num; i++) {
    let letter1 = String.fromCharCode(97 + i);
    for (let b = 0; b < num; b++) {
      let letter2 = String.fromCharCode(97 + b);
      for (let i = 0; i < num; i++) {
        let letter3 = String.fromCharCode(97 + i);
        console.log(`${letter1}${letter2}${letter3}`);
      }
    }
  }
}
lattin(3);
