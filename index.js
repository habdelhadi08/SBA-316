const img = document.createElement('img');
// set attribute
img.setAttribute("src", "./images/pexels-solliefoto-313707.jpg");
img.setAttribute("alt", "Wedding Image");
console.log(img)
console.log(img.hasAttribute('alt'));



const form = document.getElementById("login");
const username = form["username"];
const password = form["password"];
const inputs = document.getElementsByTagName("input");

for (let input of inputs) {
  console.log(input);
}

console.log(username);
const visitedLinks = document.querySelectorAll('nav > a');
visitedLinks.forEach(el => console.log(el));
console.log(visitedLinks.length);
const h1 = document.querySelector("h1");
document.body.appendChild(h1);
// h1.style.top = "0";
// // h1.style.height= "100%";
// h1.textContent = "Villa Penna benquet";


const h2 = document.querySelector("h2");
document.body.appendChild(h2);
h2.textContent = "Login to your account";
let text =document.getElementById("heading-2").previousElementSibling.innerHTML;
document.getElementById("heading-1").innerHTML="Villa Penna benquet"
document.body.appendChild(form)
const button= document.getElementById("myBtn");
document.body.appendChild(button)
const button1= document.getElementById("myBtn1");
document.body.appendChild(button1)
const p= document.querySelector("p");
document.body.appendChild(p)
const app = document.getElementById('app')
const h3= document.createElement("h3")
document.body.appendChild(h3)
h3.textContent= "Our locations!"
const ul = document.createElement('ul')

const li = document.createElement('li')
li.textContent ='Detroit'

const li2= document.createElement('li')
li2.textContent='Florida';

const li3 = document.createElement('li')
li3.textContent= 'New York'
document.body.appendChild(app)
ul.appendChild(li) //add to the end
ul.prepend(li2) // add to the beginning
ul.insertBefore(li3, ul.firstChild.nextSibling)
app.appendChild(ul)
console.log(app);

// Creating a DocumentFragment
const frag = document.createDocumentFragment();
frag.appendChild(document.createElement("h4"));
const h4= document.querySelector('h4')
console.log(frag)



const errorDisplayDiv = document.getElementById("errorDisplay");

form.addEventListener("submit", validate);

/**
 * Main Validate function
 */

function validate(e) {
  const usernameValue = checkUserName();
 if (usernameValue === false) {
   e.preventDefault();
        e.returnValue = false;
       return false;
    }}
const myBtn = document.getElementById("myBtn");
if (myBtn)
  myBtn.addEventListener("click", () => {
    window.history.back();
  });
const myBtn1 = document.getElementById("myBtn1");
if (myBtn1)
  myBtn1.addEventListener("click", () => {
    window.history.forward();
  });
