# Select DOM elements

There are a number of methods that allow us to search the DOM of the page and find these elements.

## ID

Searches for an HTML element with the specified id.

```js
const $id = document.getElementById("id");
```

## Class or Tags html

Find the first element that matches the CSS selector

```js
const $class = document.querySelector(".class");
const $div = document.querySelector("div");
```

## All class or All tag html

Searches for all elements that match the CSS selector

```js
const $allClass = document.querySelectorAll(".class");
const $allDiv = document.querySelectorAll("div");
```
