const $article1 = document.querySelector(".article-1");

// Set properties CSS

$article1.style.setProperty("text-align", "center");
$article1.style.setProperty("border-radius", "10px");
$article1.style.setProperty("background-color", "#ccf");
$article1.style.setProperty("color", "#00f");

// Added Properties

console.log("Added Properties");
console.log($article1.getAttribute("style"));

// Element Value

console.log("\nElement Value");
console.log(getComputedStyle($article1).getPropertyValue("color"));

// CSS variables

const $article2 = document.querySelector(".article-2");
const $html = document.documentElement;

let $bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
$article2.style.setProperty("background-color", $bgColor);

// Change the value of the variable

let color = "#ccf";
$html.style.setProperty("--bg-color", color);

$bgColor = getComputedStyle($html).getPropertyValue("--bg-color");

// Assign variable

const $article3 = document.querySelector(".article-3");
$article3.style.setProperty("color", "var(--bg-color)");

// All styles

console.log("\nAll Styles");
console.log($html.style);
