function walking(input){
    let goalSteps = 10000;
    let index = 0;
    let steps = input[index];

    let sumSteps = 0;

    while (steps !== `Going home`) {
        let currentSteps = Number(input[index]);
        index++;
        sumSteps += currentSteps;
        if (sumSteps >= goalSteps) {
            break;
        }
        steps = input[index];
    }
    if (steps === `Going home`) {
        steps = Number(input[index + 1]);
        sumSteps += steps;
    }
    if(sumSteps >= goalSteps){
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - goalSteps} steps over the goal!`);
    }else{
        console.log(`${goalSteps - sumSteps} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])

