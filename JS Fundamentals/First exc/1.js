function age(input) {
  let currage = Number(input);

  if (currage >= 0 && currage <= 2) {
    console.log("baby");
  } else if (currage >= 3 && currage <= 13) {
    console.log("child");
  } else if (currage >= 14 && currage <= 19) {
    console.log("teenager");
  } else if (currage >= 20 && currage <= 65) {
    console.log("adult");
  } else if (currage >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
age(["20"]);
