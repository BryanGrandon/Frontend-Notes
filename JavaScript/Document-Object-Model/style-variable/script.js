const d = document;

const $card1 = d.querySelector(".card1");
const $card2 = d.querySelector(".card2");

// Set properties CSS

$card1.style.setProperty("border", "1px solid #000");
$card1.style.setProperty("background-color", "mediumpurple");
$card1.style.setProperty("text-align", "center");
$card1.style.setProperty("color", "#fff");

// Element Value

let elementValue = getComputedStyle($card1).getPropertyValue("color");
console.log(`Element Value of $card1 color: ${elementValue} `);

// CSS variables

const $html = document.documentElement;

// Change the value of the variable

let color = "#ccf";
$html.style.setProperty("--bg-color", color);

let $bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
console.log(`variable value: ${$bgColor}`);

$card2.style.setProperty("background-color", $bgColor);

// Assign variable

const $card3 = document.querySelector(".card3");
$card3.style.setProperty("color", "var(--bg-color)");

// All styles

console.log("\nAll Styles");
console.log($html.style);
