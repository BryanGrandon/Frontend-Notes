"use strict";

const $containerCards = document.querySelector(".container-cards");
const $newCard = document.createElement("figure");

let $contenCard = `
    <img src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg" alt="Arquitectura">
    <figcaption></figcaption>
`;

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$containerCards.insertAdjacentElement("beforeend", $newCard);
$newCard
  .querySelector("figcaption")
  .insertAdjacentText("afterbegin", "Architecture JS");
$newCard.classList.add("card");
$newCard.classList.add("example");

// Another way to enter the content

// first son
setTimeout(() => {
  $containerCards.prepend($newCard);
}, 2000);

// last son
setTimeout(() => {
  $containerCards.append($newCard);
}, 4000);

// previus brother
setTimeout(() => {
  $containerCards.before($newCard);
}, 6000);

// next brother
setTimeout(() => {
  $containerCards.after($newCard);
}, 8000);