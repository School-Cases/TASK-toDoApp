/** @format */

const inputText = document.getElementById("toDoText");
const submitButton = document.querySelector("#submitButton");
const toDoList = document.querySelector("#toDoList");
let removeItem = undefined;
const rensaLista = document.querySelector("#rensaLista");

submitButton.addEventListener("click", () => {
 addToDo();
});

rensaLista.addEventListener("click", () => {
 console.log(document.querySelectorAll("li"));
 let liElements = document.querySelectorAll("li");

 for (let i = 0; i < liElements.length; i++) {
  liElements[i].remove();
 }
});

function addToDo() {
 const theNewToDo = document.createElement("li");
 theNewToDo.className = "theNewToDo";
 theNewToDo.textContent = `${inputText.value}`;
 toDoList.appendChild(theNewToDo);

 removeItem = document.createElement("span");
 removeItem.className = "removeItem";
 removeItem.textContent = "x";
 theNewToDo.appendChild(removeItem);

 removeItem.addEventListener("click", (event) => {
  event.target.parentElement.remove();
 });
}
