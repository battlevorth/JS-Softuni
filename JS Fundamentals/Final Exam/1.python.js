function passWord(input) {
  let currPass = input.shift();

  for (const line of input) {
    if (line.includes("Make Upper")) {
      let splited = line.split("Make Upper ");
      let index = Number(splited[1]);
      let char = currPass.charAt(index);
      currPass = currPass.replace(char, char.toUpperCase());
      console.log(currPass);
    } else if (line.includes("Make Lower")) {
      let splited = line.split("Make Lower ");
      let index = Number(splited[1]);
      let char = currPass.charAt(index);
      currPass = currPass.replace(char, char.toLowerCase());
      console.log(currPass);
    } else if (line.includes("Insert")) {
      let [comm, index, char] = line.split(" ");
      index = Number(index);
      if (index >= 0 && index < currPass.length) {
        currPass = currPass.slice(0, index) + char + currPass.slice(index);
        console.log(currPass);
      }
    } else if (line.includes("Replace")) {
      let [comm, char, value] = line.split(" ");
      value = Number(value);
      charAscii = String.fromCharCode(char.charCodeAt() + value);
      if (currPass.includes(char)) {
        while (currPass.indexOf(char) >= 0) {
          currPass = currPass.replace(char, charAscii);
        }
        console.log(currPass);
      }
    } else if (line.includes("Validation")) {
      if (currPass.length < 8) {
        console.log("Password must be at least 8 characters long!");
      }
      let valid = true;
      let lower = false;
      let upper = false;
      let digit = false;
      for (const char of currPass) {
        let charAsAscii = char.charCodeAt();
        if (
          (charAsAscii >= 65 && charAsAscii <= 90) ||
          charAsAscii === 95 ||
          (charAsAscii >= 97 && charAsAscii <= 122) ||
          (charAsAscii >= 48 && charAsAscii <= 57)
        ) {
        } else {
          valid = false;
        }
        if (charAsAscii >= 65 && charAsAscii <= 90) {
          upper = true;
        }
        if (charAsAscii >= 97 && charAsAscii <= 122) {
          lower = true;
        }
        if (charAsAscii >= 48 && charAsAscii <= 57) {
          digit = true
        }
      }
      if (!valid) {
        console.log('Password must consist only of letters,digits and _!');
      }
      if (!upper) {
        console.log('Password must consist at least one uppercase letter!');
      }
      if (!lower) {
        console.log('Password must consist at least one lowercase letter!');
      }
      if (!digit) {
        console.log('Password must consist at least one digit!');
      }
    }
  }
}
passWord(['invali*',
'Validation',
'Add 2 p',
'Insert -5 14',
'Replace i -50',
'Replace z 10',
'Make Upper 2',
'Validation',
'Complete'])
