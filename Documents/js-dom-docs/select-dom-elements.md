# Select DOM elements

There are a number of methods that allow us to search the DOM of the page and find these elements.

- `getElementById()`
- `querySelector()`
- `querySelectorAll()`

```js
// Searches for an HTML element with the specified id.
const $id = document.getElementById("id");

// Find the first element that matches the CSS selector
const $class = document.querySelector(".class");

// Searches for all elements that match the CSS selector
const $allClass = document.querySelectorAll(".class");
```
