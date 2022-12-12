function arenaTier(input) {
  let tierList = {};

  for (let line of input) {
    let vsOrNewGlad = line.split(` `);
    if (line === `Ave Cesar`) {
      break;
    }
    if (vsOrNewGlad[1] === `->`) {
      let [gladiator, skill, skillPoints] = line.split(` -> `);
      skillPoints = Number(skillPoints);
      if (!tierList[gladiator]) {
        tierList[gladiator] = {};
      }
      if (
        !tierList[gladiator][skill] ||
        tierList[gladiator][skill] < skillPoints
      ) {
        tierList[gladiator][skill] = skillPoints;
      }
    } else if (vsOrNewGlad[1] === `vs`) {
      let [gladiator1, gladiator2] = line.split(` vs `);
      if (tierList[gladiator1] && tierList[gladiator2]) {
        let gladiator1Skills = tierList[gladiator1];
        let gladiator2Skills = tierList[gladiator2];
        console.log(gladiator1Skills);
        for (const skill in gladiator1Skills) {
          if (gladiator2Skills[skill]) {
            if (gladiator1Skills[skill] > gladiator2Skills[skill]) {
              delete tierList[gladiator2];
            } else {
              delete tierList[gladiator1];
            }
          }
        }
      }
    }
  }
  for (const gladiator in tierList) {
    let sum = 0;
    let skill = tierList[gladiator];

    for (const skillPoints in skill) {
      sum += skill[skillPoints];
    }
    skill[`sum`] = sum;
  }
  Object.entries(tierList)
    .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    .forEach((element) => {
      console.log(`${element[0]}: ${element[1].sum} skill`);
      delete element[1].sum;
      Object.entries(element[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((element) => {
          console.log(`- ${element[0]} <!> ${element[1]}`);
        });
    });
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
