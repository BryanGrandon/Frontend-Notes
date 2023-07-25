"use strict";
const d = document;
const $google = d.querySelector(".link-google");
const $img = d.querySelector(".img");

// ---- Get HTML attributes ----

// Indicates whether the element has HTML attributes.

const $hasAttributes = $google.hasAttributes();
console.log(`Has attributes = ${$hasAttributes}`);

// Indicates whether the element has the HTML attr attribute.

const $hasAttribute = $google.hasAttribute("href");
console.log(`Has attribute("href") = ${$hasAttribute}`);

// Returns an array with the attributes of the element.

const $getAttributeNames = $google.getAttributeNames();
console.log(`getAttributeNames = ${$getAttributeNames}`);

// Returns the value of the attr attribute of the element or null if it does not exist.

const $getAttribute = $google.getAttribute("href");
console.log(`getAttribute("href") = ${$getAttribute}`);

// ---- Modify or delete HTML attributes ----

// Adds or changes the attr attribute to the value value of the HTML element.

$img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2023/03/16/16/38/woods-7857082_960_720.jpg"
);
$google.setAttribute("href", "https://pixabay.com/");

// Adds attr attribute if it does not exist, if it does exist, removes it.

$img.toggleAttribute("alt", "Woods");

// Removes the attr attribute from the HTML element.

$img.removeAttribute("alt");
