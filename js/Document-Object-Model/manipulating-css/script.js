// -------- className -------- //

const $element = document.querySelector(".card-1");
let elementName = $element.className;

console.log(`className: ${elementName}`);

// -------- classList -------- //

const $card2 = document.querySelector(".card-2");
const $card3 = document.querySelector(".card-3");
const $card4 = document.querySelector(".card-4");

// Length

let classLength = $card2.classList.length;
console.log(`length: ${classLength}`);

// Contains

let classContains = $card2.classList.contains("style-1");
console.log(`Contain: ${classContains}`);

// Actions

$card2.classList.add("style-1");
$card2.classList.remove("delete");
$card3.classList.toggle("style-2");
$card4.classList.replace("replace", "style-3");
