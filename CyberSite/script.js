const birthYear = 1984;
let futureYear = 2045;
let month = 6;
let futureMonth = 1;
let ageBeforeBirthday = futureYear - birthYear;
let ageAfterBirthday = ageBeforeBirthday - 1;

if(month >= futureMonth){
    console.log('I will be ' + ageBeforeBirthday + ' in ' + futureYear);
    document.write('I will be ' + ageBeforeBirthday + ' in ' + futureYear);
}else{
    console.log(ageBeforeBirthday);
}




