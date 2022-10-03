function darkestDungeon(rooms) {
  let startingHealth = 100;
  let startingCoins = 0;
  let roomString = rooms[0];
  let splitRoom = roomString.split(`|`); // splits the array
  let roomsCount = 0;

  for (let i = 0; i < splitRoom.length; i++) { // goes trough every splited array index
    let currentRoom = splitRoom[i];
    let currentRoomArray = currentRoom.split(` `);
    let currentHealth = startingHealth;
    let currentCoins = startingCoins;
    let healIfHpMoreThan100 = 0;
    roomsCount++;
    for (let b = 0; b < currentRoomArray.length; b += 2) { // goest trough the objects in each room
      let currentObjectInRoom = currentRoomArray[b];
      let ifExceedes100 = false;
      switch (currentObjectInRoom) {  // compares room object to potion,chest or moster(default)
        case `potion`:
          if (currentHealth < 100) { //health cannot exceed 100
            healIfHpMoreThan100 = currentHealth;
            currentHealth += Number(currentRoomArray[b + 1]);
            if (currentHealth > 100) {
              ifExceedes100 = true;
              healIfHpMoreThan100 = 100 - healIfHpMoreThan100;
              currentHealth = 100;
            }
          }
          break;
        case `chest`: //if object is chest adds coin to bag
          currentCoins += Number(currentRoomArray[b + 1]);
          break;
        default: //if object is moster(default) subtracks monster attack points
          currentHealth = currentHealth - Number(currentRoomArray[b + 1]);
          break;
      }
      if (currentHealth <= 0) {
        console.log(`You died! Killed by ${currentObjectInRoom}.`);
        console.log(`Best room: ${roomsCount}`);
        break;
      }
      if (currentObjectInRoom === `chest`) {
        console.log(`You found ${currentRoomArray[b + 1]} coins.`);
      } else if (currentObjectInRoom === `potion`) {
        if (ifExceedes100) {
          console.log(`You healed for ${healIfHpMoreThan100} hp.`);
          console.log(`Current health: ${currentHealth} hp.`);
        } else {
          console.log(`You healed for ${currentRoomArray[b + 1]} hp.`);
          console.log(`Current health: ${currentHealth} hp.`);
        }
      } else {
        console.log(`You slayed ${currentObjectInRoom}.`);
      }
    }
    if (currentHealth <= 0) {
      startingHealth = currentHealth;
      break;
    }
    startingHealth = currentHealth;
    startingCoins = currentCoins;
  }
  if (startingHealth > 0) {
    console.log(`You've made it!`);
    console.log(`Coins: ${startingCoins}`);
    console.log(`Health: ${startingHealth}`);
  }
}
darkestDungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
