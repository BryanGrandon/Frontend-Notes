"use strict";
const d = document;
let text = `
<p> The different ways to insert text to  <mark>HTML</mark> in <mark>JavaScript</mark> </p>

<ul>
    <li>.innerText</li>
    <li>.textContent</li>
    <li>.innerHTML</li>
    <li>.outerHTML</li>
</ul>

`;
const $innerTextElement = d.querySelector(".inner-text");
const $textContentElement = d.querySelector(".text-content");
const $innerHtmlElement = d.querySelector(".inner-html");
const $outerHtmlElement = d.querySelector(".outer-html");

// ---- Set content ---- //

$innerTextElement.innerText = text;
// Respecting the blank spaces

$textContentElement.textContent = text;
// Does not respect blank spaces

// ---- Set HTML ---- //

$innerHtmlElement.innerHTML = text;
// Inside element

$outerHtmlElement.outerHTML = text;
// Element replacement
