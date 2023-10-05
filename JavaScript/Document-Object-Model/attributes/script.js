"use strict";
const d = document;
const $google = d.querySelector(".link-google");
const $img = d.querySelector(".img");

// ---- Get HTML attributes ----

// hasAttributes()

const $hasAttributes = $google.hasAttributes();
console.log(`Has attributes = ${$hasAttributes}`);

// hasAttribute(attr)

const $hasAttribute = $google.hasAttribute("href");
console.log(`Has attribute("href") = ${$hasAttribute}`);

//getAttributeNames()

const $getAttributeNames = $google.getAttributeNames();
console.log(`getAttributeNames = ${$getAttributeNames}`);

// getAttribute(attr)

const $getAttribute = $google.getAttribute("href");
console.log(`getAttribute("href") = ${$getAttribute}`);

// ---- Modify or delete HTML attributes ----

// setAttribute(attr, value)

$img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2023/03/16/16/38/woods-7857082_960_720.jpg"
);
$google.setAttribute("href", "https://pixabay.com/");

// toggleAttribute(attr, forge)

$img.toggleAttribute("alt", "Woods");

// removeAttribute(attr)

$img.removeAttribute("alt");
