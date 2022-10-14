
let container = document.getElementById("container");

// const myClass= ["Enes", "Hasan", "Ali", "Senay", "Fatih", "Jyothi", "Ari", "Murat", "Yusuf", "ismet", "Tuba", "Olena", "Oguz", "Serkan", "Bilal", "ibrahim", "Mustafa", "Shamil", "Baris", "Sadettin", "Yulia"];
// const images= ["images/19-enes.jpg", "images/09-hasan.jpg", "images/ali.jpg", "images/35-senay.jpg", "images/31-fatih.jpg", "images/jyothi.jpg", "images/25-ari.jpg", "images/murat.jpg", "images/yusuf.jpg", "images/ismet.jpg", "images/tuba.jpg", "images/olena.jpg", "images/oguz.jpg", "images/21-serkan.jpg", "images/bilal.jpg", "images/ibrahim.jpg", "images/06-mustafa.jpg", "images/30-shamil.jpg", "images/baris.jpg", "images/sadettin.jpg", "images/05-yulia.jpg"];
// const ages= ["24",25,26,27,2]


let people = [
    { name: "Serkan", Country: "Turkey", image: "images/21-serkan.jpg" },
    { name: "Baris", Country: "Turkey", image: "images/baris.jpg" } ,
    { name: "Enes", Country: "Turkey", image: "images/19-enes.jpg" },
    { name: "Hasan", Country: "Turkey", image: "images/09-hasan.jpg" },
    { name: "Ali", Country: "Turkey", image: "images/ali.jpg" },
    { name: "Senay", Country: "Turkey", image: "images/35-senay.jpg" },
    { name: "Fatih", Country: "Turkey", image: "images/31-fatih.jpg" },
    { name: "Jyothi", Country: "India", image: "images/jyothi.jpg" },
    { name: "Ari", Country: "Indonesia", image: "images/25-ari.jpg" },
    { name: "Murat", Country: "Turkey", image: "images/murat.jpg" },
    { name: "Yusuf", Country: "Turkey", image: "images/yusuf.jpg" },
    { name: "ismet", Country: "Turkey", image: "images/ismet.jpg" },
    { name: "Tuba", Country: "Turkey", image: "images/tuba.jpg" },
    { name: "Olena", Country: "Ukraine", image: "images/olena.jpg" },
    { name: "Oguz", Country: "Turkey", image: "images/oguz.jpg" },
    { name: "Bilal", Country: "Afghanistan", image: "images/bilal.jpg" },
    { name: "ibrahim", Country: "Turkey", image: "images/ibrahim.jpg" },
    { name: "Mustafa", Country: "Turkey", image: "images/06-mustafa.jpg" },
    { name: "Shamil", Country: "Russia", image: "images/30-shamil.jpg" },
    { name: "Baris", Country: "Turkey", image: "images/baris.jpg" },
    { name: "Sadettin", Country: "Turkey", image: "images/sadettin.jpg" },
    { name: "Yulia", Country: "Ukraine", image: "images/05-yulia.jpg" },
    { name: "Abdulfettah", Country: "Afghanistan", image: "images/abdulfettah.jpg" },
    { name: "Arwa", Country: "Syria", image: "images/37-arwa.jpg" }
]

function clicked() {
    console.log("first try")
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





