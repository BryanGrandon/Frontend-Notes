"use strict";
const d = document;

// ---- Card 1

const $card1 = d.querySelector(".card-1");

// Check if a class is in the element
const checkClass = `('shape') = ${$card1.classList.contains("shape")}`;

// Add classes
$card1.classList.add("main-color");

// ---- Card 2

const $card2 = d.querySelector(".card-2");

// If the class is there, delete it
$card2.classList.toggle("main-color");

// If the class is not there, add it
$card2.classList.toggle("main-color");

// ---- Card 3

const $card3 = d.querySelector(".card-3");

// Remplace one class with another
$card3.classList.replace("shape", "optional-shape");

// Delete class
$card3.classList.add("main-color");
$card3.classList.remove("main-color");
