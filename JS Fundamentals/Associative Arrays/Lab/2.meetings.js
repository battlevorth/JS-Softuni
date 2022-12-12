function printMeeting(input) {
    let meeting = {};

    for (const entry of input) {
        let [day, name] = entry.split(` `);

        if (meeting[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meeting[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}
printMeeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])