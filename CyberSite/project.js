
let container = document.getElementById("container");

let people = [
    { name: "Baris", Country: "Turkey", image: "images/baris.jpg" } ,
    { name: "Enes", Country: "Turkey", image: "images/enes.jpg" },
    { name: "Hasan", Country: "Turkey", image: "images/hasan.jpg" },
    { name: "Ali", Country: "Turkey", image: "images/ali.jpg" },
    { name: "Senay", Country: "Turkey", image: "images/senay.jpg" },
    { name: "Fatih", Country: "Turkey", image: "images/fatih.jpg" },
    { name: "Jyothi", Country: "India", image: "images/jyothi.jpg" },
    { name: "Ari", Country: "Indonesia", image: "images/ari.jpg" },
    { name: "Murat", Country: "Turkey", image: "images/murat.jpg" },
    { name: "Yusuf", Country: "Turkey", image: "images/yusuf.jpg" },
    { name: "ismet", Country: "Turkey", image: "images/ismet.jpg" },
    { name: "Tuba", Country: "Turkey", image: "images/tuba.jpg" },
    { name: "Olena", Country: "Ukraine", image: "images/olena.jpg" },
    { name: "Oguz", Country: "Turkey", image: "images/oguz.jpg" },
    { name: "Bilal", Country: "Afghanistan", image: "images/bilal.jpg" },
    { name: "ibrahim", Country: "Turkey", image: "images/ibrahim.jpg" },
    { name: "Mustafa", Country: "Turkey", image: "images/mustafa.jpg" },
    { name: "Shamil", Country: "Russia", image: "images/shamil.jpg" },
    { name: "Emin", Country: "Turkey", image: "images/emin.jpg" },
    { name: "Sadettin", Country: "Turkey", image: "images/sadettin.jpg" },
    { name: "Yulia", Country: "Ukraine", image: "images/yulia.jpg" },
    { name: "Abdulfettah", Country: "Afghanistan", image: "images/abdulfettah.jpg" },
    { name: "Arwa", Country: "Syria", image: "images/arwa.jpg" },
    { name: "Sevim", Country: "Turkey", image: "images/sevim.jpg" }
]

function demofunction() {
    getElementByClass("card").innerHTML = "Hello dear visitor!<br>We strongly recommend you to supprot the Powercoders";
}

let str = "";
for (let i = 0; i < people.length; i++) {
    let person = people[i];
    str += "<div class=\"card\" onClick=\"clicked()\">"
    str += '<img src="' + person.image + '">'
    str += "<div class=\"details\">"
    str += "<p>" + person.name + "</p>"
    str += "<p>" + person.Country + "</p>"
    str += "</div>"
    str += "</div>"

}
 
container.innerHTML = str;





