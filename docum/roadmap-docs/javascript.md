# JavaScript Roadmap

- [All About Variables](/javascript/language/all-about-variable.js)
- [Data Type](/javascript/language/data-types.js)
- [Type Casting](/javascript/language/type-casting.js)
- [Data Structure](/javascript/language/data-structure.js)
- [Equality Comparisons](/javascript/language/equality-comparisons.js)
- [Loops](/javascript/language/loops.js)
- [Control Flow](/javascript/language/control-flow.js)
- [Operators](/javascript/language/operators.js)
- [Functions](/javascript/language/functions.js)
- [Strict Mode](/javascript/language/strict-mode.js)
- [Using (`this`) keyword](/javascript/language/using-this-keyword.js)
- [Asynchronous JavaScript](/javascript/language/asynchronous.js)
- [Classes](/Documents/javascript/languages/classes.md)
- [Generator](/javascript/language/generator.js)
- [Modules](/Documents/javascript/languages/modules.md)

## DOM

In Javascript, when we refer to the DOM we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript, adding new tags, modifying or deleting others, changing their HTML attributes, adding classes, changing the text content, etc.

- [The Subject Document](/javascript/dom/subject-document.js)
- [Select DOM Elements](/javascript/dom/select-dom-elements.js)
- [Manage DOM Attributes](/javascript/dom/manage-dom-attributes.js)
- [CSS Management](/javascript/dom/css-management.js)
- [Content in DOM Elements](/javascript/dom/content-in-dom-element.js)
- [Navigate through DOM elements](/javascript/dom/navigate-through-dom-element.js)
- [Create elements in the DOM](/javascript/dom/create-element-in-the-dom.js)
- [Modifying Elements](/javascript/dom/modifying-elements.js)
- [Event Handler](/javascript/dom/event-handler.js)
- [Browser Object Model](/javascript/dom/browser-object-model.js)

## APIS

- Asynchronous JavaScript And XML (AJAX)
- API-REST

### Asynchronous JavaScript And XML (AJAX)

#### [XMLHttpRequest (XMR)](/JavaScript/Working-with-APIs/AJAX/XMLHttpRequest/)

XMLHttpRequest (XHR) is a special JavaScript object that allows asynchronous HTTP requests (AJAX) to be made natively from JavaScript.

#### [Fetch](/JavaScript/Working-with-APIs/AJAX/Fetch/)

Fetch is the name of a new API for Javascript with which we can make asynchronous HTTP requests using promises and in a way that makes the code a little simpler.

```js
const promise = fetch("/robots.txt");

promise.then(function (response) {
  /* ... */
});
```

#### [Axios](/JavaScript/Working-with-APIs/AJAX/Axios/)

Promise-based library for making requests in Node or in browsers.
