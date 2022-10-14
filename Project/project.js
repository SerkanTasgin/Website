
let container = document.getElementById("container");

// const myClass= ["Enes", "Hasan", "Ali", "Senay", "Fatih", "Jyothi", "Ari", "Murat", "Yusuf", "ismet", "Tuba", "Olena", "Oguz", "Serkan", "Bilal", "ibrahim", "Mustafa", "Shamil", "Baris", "Sadettin", "Yulia"];
// const images= ["images/19-enes.jpg", "images/09-hasan.jpg", "images/ali.jpg", "images/35-senay.jpg", "images/31-fatih.jpg", "images/jyothi.jpg", "images/25-ari.jpg", "images/murat.jpg", "images/yusuf.jpg", "images/ismet.jpg", "images/tuba.jpg", "images/olena.jpg", "images/oguz.jpg", "images/21-serkan.jpg", "images/bilal.jpg", "images/ibrahim.jpg", "images/06-mustafa.jpg", "images/30-shamil.jpg", "images/baris.jpg", "images/sadettin.jpg", "images/05-yulia.jpg"];
// const ages= ["24",25,26,27,2]


let people = [
    { name: "Serkan", age: 45, image: "images/21-serkan.jpg" },
    { name: "Baris", age: 45, image: "images/baris.jpg" } ,
    { name: "Enes", age: 35, image: "images/19-enes.jpg" },
    { name: "Hasan", age: 41, image: "images/09-hasan.jpg" },
    { name: "Ali", age: 35, image: "images/ali.jpg" },
    { name: "Senay", age: 35, image: "images/35-senay.jpg" }
    { name: "Fatih", age: 35, image: "images/31-fatih.jpg" }
    { name: "Jyothi", age: 35, image: "images/31-fatih.jpg" }
]

let str = "";
for (let i = 0; i < people.length; i++) {
    let person = people[i];
    str += "<div>"
    str += '<img src="' + person.image + '">'
    str += "<p>" + person.name + "</p>"
    str += "<p>" + person.age + "</p>"
    str += "</div>"

    }
container.innerHTML = str;





