const birthYear = 1984;
let futureYear = 2045;
let month = 6;

let fruit = "banana"
let message;

switch (fruit) {
    case "apple":
        message = "🍎"
        break;

    case "banana":
        console.log("We reached the case banana");
        message = "🍌"
        break;
}
alert(message);