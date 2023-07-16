"use strict";
const $containerCards = document.querySelector(".container-cards");

const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();

const cardsContent = [
  {
    title: "Technology",
    img: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
  },
  {
    title: "Animals",
    img: "https://cdn.pixabay.com/photo/2020/06/20/11/08/siamese-cat-5320568_960_720.jpg",
  },
  {
    title: "Architecture",
    img: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg",
  },
  {
    title: "People",
    img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
  },
  {
    title: "Nature",
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
  },
];

cardsContent.forEach((e) => {
  $template.querySelector("img").setAttribute("src", e.img);
  $template.querySelector("img").setAttribute("alt", e.title);
  $template.querySelector("figcaption").textContent = e.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$containerCards.appendChild($fragment);
