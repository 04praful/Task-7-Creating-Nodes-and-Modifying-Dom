var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'HEllo word');
var newDivText = document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);

let a = document.getElementById("items");
let b = document.createElement("li");
b.textContent = "HEllo word";
a.insertBefore(b, a.firstChild);