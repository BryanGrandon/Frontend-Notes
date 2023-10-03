# Document Object Model ( DOM ) Notes

![DOM](https://lenguajejs.com/javascript/dom/que-es/que-es-dom.png)

## The subject document

In Javascript, the way to access the DOM is through an object called document.

| Tags       | Select element                |
| ---------- | ----------------------------- |
| document   | `window.document`, `document` |
| head       | `document.head`               |
| body       | `document.body`               |
| html       | `document.documentElement`    |
| title      | `document.title`              |
| link       | `document.link`               |
| image      | `document.image`              |
| form       | `document.form`               |
| css        | `document.styleSheets`        |
| javascript | `document.scripts`            |

## Select DOM elements

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

## [Manage DOM attributes](/JavaScript/Document-Object-Model/attributes/)

HTML tags have certain attributes that define the behavior of the tag.

### Get HTML attributes

- `hasAttributes()`
- `hasAttribute(attr)`
- `getAttributeNames()`
- `getAttribute(attr)`

### Modify or delete HTML attributes

- `setAttribute(attr, value)`
- `toggleAttribute(attr, force)`
- `removeAttribute(attr)`

## CSS Management

### [Manipulating CSS classes](/JavaScript/Document-Object-Model/manipulating-css/)

Manipulating CSS classes of an HTML tag

- `.className`
- `.classList`
  - add
  - remove
  - toggle
  - replace

### [Styles in variables](/JavaScript/Document-Object-Model/style-variable/)

- `.setProperty`
- `getComputedStyle`
- `getPropertyValue`

## [Content in DOM elements](/JavaScript/Document-Object-Model/content-in-dom-element/)

- `.innerText`
- `.innerContent`
- `.innerHTML`
- `.outerHTML`

## Navigate through DOM elements

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

## [Create elements in the DOM](/JavaScript/Document-Object-Model/create-elements/)

There are a number of methods to efficiently create different HTML elements or nodes, which can make it very easy to create dynamic structures, using loops or defined structures.

### [Insert elements in the DOM](/JavaScript/Document-Object-Model/insert-element/)

## [Modifying Elements](/JavaScript/Document-Object-Model/modifying-elements/)

- .insertAdjacent:
  - .insertAdjacentElement(position, element)
  - .insertAdjacentHTML(position, html)
  - .insertAdjacentText(position, text)
- Position

  - `beforebegin` (previous brother)
  - `afterend` (next brother)
  - `afterbegin` (first son)
  - `beforeend` (last son)

## [Event Handler](/JavaScript/Document-Object-Model/event-handler/)

- `.onclick`
- `addEventListener("event", () => {})`

### [Event Delegation](/JavaScript/Document-Object-Model/event-delegation/)

## Browser Object Model ( BOM )

The BOM model includes access to all areas of the browser<

- alert()
- confirm()
- prompt()
- open()
- closed()
- print()

### .addEventListener()

- resize
- scroll
- load
- DOMContentLoaded

```js
const properties = {
  resize: {
    page: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    window: {
      width: window.outerWidth,
      height: window.outerHeight,
    },
  },
  scroll: {
    x: window.scrollX,
    y: window.scrollY,
  },
  load: {
    x: window.screenX,
    y: window.screenY,
  },
  DOMContentLoaded: {
    x: window.screenX,
    y: window.screenY,
  },
};
```

### Browser

```js
const locationURL = {
  all: location,
  origin: location.origin,
  protocol: location.protocol,
  host: location.host,
  hostname: location.hostname,
  port: location.port,
  href: location.href,
  hash: location.hash,
  search: location.search,
  pathname: location.pathname,
};

const historyObj = {
  all: history,
  length: history.length,
};

const navigatorObj = {
  all: navigator,
  connection: navigator.connection,
  geolocation: navigator.geolocation,
  mediaDevices: navigator.mediaDevices,
  onLine: navigator.onLine,
  serviceWorker: navigator.serviceWorker,
  storage: navigator.storage,
  usb: navigator.usb,
  userAgent: navigator.userAgent,
};
```
