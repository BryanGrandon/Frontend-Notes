// ---- className

const $element = document.querySelector(".card-1");
let elementName = $element.className;

console.log(`className: ${elementName}`);

// ---- classList

const $card2 = document.querySelector(".card-2");
const $card3 = document.querySelector(".card-3");
const $card4 = document.querySelector(".card-4");

// Length

let classLength = $card2.classList.length;
console.log(`length: ${classLength}`);

// Contains

let classContains = $card2.classList.contains("style-1");
console.log(`Contain: ${classContains}`);

// -- Class actions

// Adds the classes to the HTML element.
$card2.classList.add("style-1");

// Removes the classes from the HTML element.
$card2.classList.remove("delete");

// If the class does not exist, it adds it. If not, it deletes it.
$card3.classList.toggle("style-2");

// Replaces the old class with the new class.
$card4.classList.replace("remplace", "style-3");
