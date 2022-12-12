let kmPattern = /\d/g;
let namePattern = /[A-Za-z]/g;

let kmRan = 'G4e@55or%6g6!68e!!@ '.match(kmPattern);
let currName = 'G4e@55or%6g6!68e!!@ '.match(namePattern);

console.log(kmRan);
let totalKm = 0
for (const currKm of kmRan) {
    totalKm += Number(currKm);
}
console.log(totalKm);
console.log(currName.join(''));