"use strict";
// -------- className -------- //

const $element = document.querySelector(".card-1");
let elementName = $element.className;

console.log(`className: ${elementName}`);

// -------- classList -------- //

const $card2 = document.querySelector(".card-2");
const $card3 = document.querySelector(".card-3");
const $card4 = document.querySelector(".card-4");

// Length // How many classes the element has
let classLength = $card2.classList.length;
console.log(`length: ${classLength}`);

// Contains // Indicates whether it contains the indicated class
let classContains = $card2.classList.contains("style-1");
console.log(`Contain: ${classContains}`);

// Actions
$card2.classList.add("style-1"); // Adds the classes to the HTML element.
$card2.classList.remove("delete"); // Removes the classes from the HTML element.
$card3.classList.toggle("style-2"); // If the class does not exist, it adds it. If not, it deletes it.
$card4.classList.replace("replace", "style-3"); // Replaces the old class with the new class.

// -------- Style in variables -------- //

const $card5 = d.querySelector(".card5");
const $card6 = d.querySelector(".card6");

// setProperty(property css, value) // setProperty allows us to set css properties properties to the
$card5.style.setProperty("border", "1px solid #000");
$card5.style.setProperty("background-color", "mediumPurple");
$card5.style.setProperty("text-align", "center");
$card5.style.setProperty("color", "#fff");

// getComputedStyle(element) // setProperty allows us to set css properties
// getPropertyValue(property css) // getPropertyValue allows us to get the value of the specified css property
let elementValue = getComputedStyle($card).getPropertyValue("color");
console.log(`Element Value of $card1 color: ${elementValue} `);

// CSS variables
const $html = document.documentElement;

// Change the value of the variable
let color = "#ccf";
$html.style.setProperty("--bg-color", color);

let $bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
console.log(`variable value: ${$bgColor}`);

$card6.style.setProperty("background-color", $bgColor);

// Assign variable
const $card7 = document.querySelector(".card7");
$card7.style.setProperty("color", "var(--bg-color)");

// All styles
console.log("\nAll Styles");
console.log($html.style);
