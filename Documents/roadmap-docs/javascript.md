# JavaScript Roadmap

### [All About Variables](/javascript/language/all-about-variable.js)

- Var, Let, Const
- Hoisting
- Variable Scope

### [Data Type](/javascript/language/data-types.js)

- Primitive Type
- Object
- Built in Objects

### [Type Casting](/javascript/language/type-casting.js)

- Explicit Type Casting
- Implicit Type Casting
- Type Conversions

### [Data Structure](/javascript/language/data-structure.js)

- Array
- Keyed Collection
- JSON

### [Equality Comparisons](/javascript/language/equality-comparisons.js)

- `==`, `===`, `Object.is()`

### [Loops](/javascript/language/loops.js)

- for, do while, while
- iterations

### [Control Flow](/javascript/language/control-flow.js)

- Conditional Statements
- Exception Handling

### [Operators](/javascript/language/operators.js)

- Arithmetic Operator
- Comparison Operator
- Logical Operator
- Ternary Operator
- Bitwise Operator

### [Functions](/javascript/language/functions.js)

- Function Expressions
- Arrow Function
- IIFE
- Arguments
- Closures
- Lexical Scoping
- Recursion

### [Strict Mode](/javascript/language/strict-mode.js)

- `use strict`

### [Using (`this`) keyword](/javascript/language/using-this-keyword.js)

- In a Function, Anonymous Function, Arrow Function
- In a Methods
- Explicit Binding

### [Asynchronous JavaScript](/javascript/language/asynchronous.js)

- setTimeout, setInterval
- Event Loop
- Callback, Promise
- Async Await

### [Classes](/Documents/javascript/languages/classes.md)

- Getter and Setter
- Inheritance
- Additional

## [Generator](/javascript/language/generator.js)

- `function*`
- `yield`

## [Modules](/Documents/javascript/languages/modules.md)

- Export
- Import

## DOM

In Javascript, when we refer to the DOM we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript, adding new tags, modifying or deleting others, changing their HTML attributes, adding classes, changing the text content, etc.

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
