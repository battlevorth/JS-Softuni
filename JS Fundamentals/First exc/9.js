function password(input) {
  let index = 0;
  let username = input.shift();
  let currTry = input[index];
  let correctPassword = ``;
  let numOfTries = 0;

  for (let i = username.length - 1; i >= 0; i--) {
    correctPassword += username[i];
  }

  while (correctPassword !== currTry) {
    numOfTries++;
    if (numOfTries > 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    console.log(`Incorrect password. Try again.`);
    currTry = input[++index];
  }

  if (correctPassword === currTry) {
    console.log(`User ${username} logged in.`);
  }
}
password(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
