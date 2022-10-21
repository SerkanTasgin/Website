
let targetClass = document.getElementsByClassName('targeting');
console.log(targetClass,typeof(targetClass));
targetClass[0].style.backgroundColor = 'green';


let firstName = document.getElementById('firstName');
console.log(firstName,typeof(firstName))
firstName.style.backgroundColor = 'black';


let span = document.createElement("span");
  let node = document.createTextNode("Some new text");
  let parent = document.querySelector("#demo");
  span.appendChild(node);
  parent.appendChild(span);




