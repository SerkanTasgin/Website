let color = ["Black", "White", "Red", "Green", "Blue"];
console.log(color);

color.sort();
console.log(color);

for (let i = 0; i < color.length; i++) {
console.log(`My favourite #${i+1} color is ${color[i]}`);
}
let suffix = "";
for (let i = 0; i < color.length; i++) {
    if ((i+1)==1){
        suffix="st";
    } else if ((i+1)==2){
        suffix="nd";
    } else if ((i+1)==3) {
        suffix="rd";
    } else {
        suffix="th";
    }
    console.log(`My ${i+1}${suffix} choice is ${color[i]}`)
}


