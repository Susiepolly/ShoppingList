"use strict";

let button = document.getElementById("enter");

let input = document.getElementById("userinput");

let ul = document.querySelector("ul");

let liDelete = document.getElementsByClassName("delete");

function removeParent(evt) {
  evt.target.parentNode.remove();
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let div = document.createElement("div");

  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value)); //

  div.appendChild(li);
  div.appendChild(btn);

  ul.appendChild(div);
  input.value = "";
  }

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
};
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
   createListElement();
};
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

let liArray = document.getElementsByTagName("li");

ul.onclick = function(event) {
  let target = event.target;
  target.classList.toggle("done");
}

for (let i = 0; i < liDelete.length; i++) {
  liDelete[i].addEventListener("click", removeParent);
}
