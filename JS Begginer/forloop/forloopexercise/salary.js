function salary(input){
    let index = 0;
    let openTabs = Number(input[index]);
    let mountSalary = Number(input[1]);
    index++;
    index++;
    let penalty = 0;

    for (let i = 0; i < openTabs; i++) {
        let currentTab = input[index];
        index++;
        switch(currentTab){
            case `Facebook`: penalty+=150;break;
            case `Instagram`: penalty+=100;break;
            case `Reddit`: penalty+=50;break
        }
    }
    if(penalty >= mountSalary){
        console.log(`You have lost your salary.`);
    } else {
        mountSalary = mountSalary - penalty;
        console.log(mountSalary);
    }
    
    
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])