let testo = prompt("Which photo did you love the most?");

const photos = document.querySelector(".image");

const myPics = photos.firstElementChild;

const FirstButton = document.querySelector(".First-btn");

const h1Element = document.querySelector("h1");
const h1Rename1stB = document.querySelector(".First-btn");



h1Rename1stB.addEventListener("click", () => {
    h1Element.textContent = testo;
}, {once: true }
); 




function addLi () {
    const lista = document.getElementById("lista");
       listNode = document.getElementById("list");
       liNode = document.createElement("li");
       textNode = document.createTextNode("Hey there!");
       
       liNode.appendChild(textNode);
       listNode.appendChild (liNode);
}