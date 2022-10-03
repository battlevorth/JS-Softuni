function gladiatorExpenses(lostFights, helmP, swordP, shieldP, armorP) {
  let shieldRepNeeded = 0;
  let totalPrice = 0

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      totalPrice += helmP;
    }
    if (i % 3 === 0) {
      totalPrice += swordP;
    }
    if ((i % 3 === 0) && (i % 2 === 0)) {
      totalPrice += +shieldP;
      shieldRepNeeded++;
      if (shieldRepNeeded % 2 === 0) {
        totalPrice += armorP;
      }
    }
  }
  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,12.50,21.50,40,200);

function gladiatorExpenses(lostFights, helmP, swordP, shieldP, armorP) {
    let helmRepNeeded = 0;
    let swordRepNeeded = 0;
    let shieldRepNeeded = 0;
    let armorRepNeeded = 0;
    for (let i = 1; i <= lostFights; i++) {
      if (i % 2 === 0) {
        helmRepNeeded++;
      }
      if (i % 3 === 0) {
        swordRepNeeded++;
      }
      if ((i % 3 === 0) & (i % 2 === 0)) {
        
        shieldRepNeeded++;
        if (shieldRepNeeded % 2 === 0) {
          armorRepNeeded++;
        }
      }
    }
    let totalPrice =
      helmRepNeeded * helmP +
      swordRepNeeded * swordP +
      shieldRepNeeded * shieldP +
      armorRepNeeded * armorP;
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
  }
