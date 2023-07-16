"use strict";
const d = document;

let text = `
<p> The diferent ways to insert text to  <mark>HTML</mark> in <mark>JavaScript</mark> </p>

<ul>
    <li>.innerText</li>
    <li>.textContent</li>
    <li>.innerHTML</li>
    <li>.outerHTML</li>
</ul>

`;
// Respecting the blank spaces
const $innerTextElement = d.querySelector(".inner-text");

// Does not respect blank spaces
const $textContentElement = d.querySelector(".text-content");

// Inside element
const $innerHtmlElement = d.querySelector(".inner-html");

// Remplaceing element
const $outerHtmlElement = d.querySelector(".outer-html");

// Set content
$innerTextElement.innerText = text;
$textContentElement.textContent = text;

// Set HTML
$innerHtmlElement.innerHTML = text;
$outerHtmlElement.outerHTML = text;
