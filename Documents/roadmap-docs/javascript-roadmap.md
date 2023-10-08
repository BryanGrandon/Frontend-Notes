# JavaScript Roadmap

- [All About Variables](/Documents/javascript/lenguages/all-about-variables.md)
- [Data Type](/Documents/javascript/lenguages/data-type.md)
- [Type Casting](/Documents/javascript/lenguages/type-casting.md)
- [Data Structure](/Documents/javascript/lenguages/data-structure.md)
- [Equality Comparisons](/Documents/javascript/lenguages/equality-comparisons.md)
- [Loops and Iterations](/Documents/javascript/lenguages/loops-and-iterations.md)
- [Control Flow](/Documents/js-docs/control-flow.md)
- [Operators](/Documents/javascript/lenguages/operators.md)
- [Functions](/Documents/javascript/lenguages/functions.md)
- [Strict Mode](/Documents/javascript/lenguages/strict-mode.md)
- [Using (`this`) keyword](/Documents/javascript/lenguages/using-this-keyword.md)
- [Asynchronous JavaScript](/Documents/javascript/lenguages/asynchronous-javascript.md)
- [Classes](/Documents/javascript/lenguages/classes.md)
- [Generator](/Documents/javascript/lenguages/generator.md)
- [Modules](/Documents/javascript/lenguages/modules.md)
- [Dev Tools](/Documents/javascript/lenguages/dev-tools.md)

## DOM

- [The Subject Document](/Documents/javascript/dom/the-subject-document.md)
- [Select DOM Elements](/Documents/javascript/dom/select-dom-elements.md)
- [Manage DOM Attributes](/Documents/javascript/dom/manage-dom-attributes.md)
- [CSS Management](/Documents/javascript/dom/css-management.md)
- [Content in DOM Elements](/Documents/javascript/dom/content-in-dom-elements.md)
- [Navigate through DOM elements](/Documents/javascript/dom/navigate-through-dom-elements.md)
- [Create elements in the DOM](/Documents/javascript/dom/create-elements-in-the-dom.md)
- [Modifying Elements](/Documents/javascript/dom/modifying-elements.md)
- [Event Handler](/Documents/javascript/dom/event-handler.md)
- [Browser Object Model](/Documents/javascript/dom/browser-object-model.md)

## APIS

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
