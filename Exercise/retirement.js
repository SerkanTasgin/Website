let ageCurrent = prompt ("Please enter your age");
let ageRetirement = prompt ("please enter the age you want to retire");
let yearCurrent = 2022;
let yearLeft = (ageRetirement - ageCurrent);
let yearRetirement = yearCurrent + (ageRetirement - ageCurrent);
alert(' You have ' + yearLeft + ' years left until you can retire. It is ' + yearCurrent + ' so you can retire in ' + yearRetirement)
