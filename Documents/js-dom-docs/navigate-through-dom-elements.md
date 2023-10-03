# Navigate through DOM elements

```js
const $cards = document.querySelector(".cards");

// Element Children
const $children = $cards.children;
const $firstElementChild = $cards.firstElementChild;
const $lastElementChild = $cards.lastElementChild;

// Element Brother
const parentElement = $cards.parentElement;
const previousElementSibling = $cards.previousElementSibling;
const nextElementSibling = $cards.nextElementSibling;

// Get nearest parent element
const $parent = $cards.children[1].closest("section");
```
