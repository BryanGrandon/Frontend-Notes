"use strict";
const d = document;
const $containerCards = document.querySelector(".container-cards");

// ---- Form 1

// Create and designate each required element.
const $figure1 = d.createElement("figure");
const $img1 = d.createElement("img");
const $figcaption1 = d.createElement("figcaption");
const $figcaptionText1 = d.createTextNode("Animal");

// Set the desired attributes for each element.
$img1.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_960_720.jpg"
);
$img1.setAttribute("alt", "Animal");
$figure1.classList.add("card");

// Set each created element as a child.
$figure1.appendChild($img1);
$figcaption1.appendChild($figcaptionText1);
$figure1.appendChild($figcaption1);
$containerCards.appendChild($figure1);

// ---- Form 2

const $figure2 = d.createElement("figure");

// Directly set the html and set it directly
$figure2.innerHTML = `
<img src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_960_720.png" alt="Coffee" />
<figcaption>Coffee</figcaption>
`;

$figure2.classList.add("card");
$containerCards.appendChild($figure2);

// -------- For multiple elements

const $container = d.querySelector(".container");

// ---- Form 1

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

// Create and designate each required element.
const $ul1 = d.createElement("ul");
const $article1 = d.createElement("article");

$article1.innerHTML = `<h3>Seasons</h3>`;
$article1.appendChild($ul1);
$container.appendChild($article1);

seasons.forEach((e) => {
  const $li = d.createElement("li");
  $li.innerText = e;
  $ul1.appendChild($li);
});

// ---- Form 2

const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Australia",
  "Antarctica",
];

// Create and designate each required element.
const $ul2 = d.createElement("ul");
const $article2 = d.createElement("article");

$article2.innerHTML = `<h3>Continents</h3>`;
$article2.appendChild($ul2);
$container.appendChild($article2);

continents.forEach((e) => {
  $ul2.innerHTML += `<li>${e}</li>`;
});

// ---- Form 3

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Create and designate each required element.
const $ul3 = document.createElement("ul");
const $article3 = document.createElement("article");
const $fragment = document.createDocumentFragment();

$article3.innerHTML = `<h3>Month</h3>`;
$container.appendChild($article3);

months.forEach((e) => {
  const $li = d.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
$article3.appendChild($ul3);