# Documnet Object Model (DOM)

## Document Element

| Tags       | Select element                |
| ---------- | ----------------------------- |
| document   | `window.document`, `document` |
| head       | `document.head`               |
| body       | `document.body`               |
| html       | `document.documentElement`    |
| title      | `document.title`              |
| link       | `documnet.link`               |
| image      | `document.image`              |
| form       | `documnet.form`               |
| css        | `document.styleSheets`        |
| javascript | `documnet.scripts`            |

## Element nodes

### ID

```js
const $id1 = document.getElementById("id1");
const $id2 = document.querySelector("id2");
```

### Class

```js
const $class = document.querySelector(".class");
// All elements of the class
const $allClass = document.querySelectorAll(".class");
```

### HTML tags

```js
const $ul = document.querySelector("ul");
// All elements of the html tag
const $allUl = document.querySelectorAll("ul");
```

## Attributes

To access

```js
const $point = document.querySelector(".point").href;
const $get = document.querySelector(".point").getAttribute("href");
```

Modify attribute value

```js
const $link = document.querySelector(".link");

$link.setAttribute("href", "htpps://www.google.com");
$link.setAttribute("target", "_blank");
$link.setAttribute("rel", "noopener");
```

Data-attributes

```js
const $description = document.querySelector(".description");
// Start with the data
$description.setAttribute("data-description", "Document Object Module");
console.log($description);
```

## Styles in variables

- [JS - Styles in variables](/JavaScript/Archives/DOM/styles-in-variables/script.js)
- [CSS - Styles in variables](/JavaScript/Archives/DOM/styles-in-variables/style.css)
- [HTML - Styles in variables](/JavaScript/Archives/DOM/styles-in-variables/index.html)

## Class CSS

- [JS - class CSS](/JavaScript/Archives/DOM/class-css/script.js)
- [CSS - class CSS](/JavaScript/Archives/DOM/class-css/style.css)
- [HTML - class CSS](/JavaScript/Archives/DOM/class-css/index.html)

## HTML text

- [JS - html-text](/JavaScript/Archives/DOM/html-text/script.js)
- [CSS - html-text](/JavaScript/Archives/DOM/html-text/style.css)
- [HTML - html-text](/JavaScript/Archives/DOM/html-text/index.html)

## Touring the dom

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

## Create Elements

- [JS - Create element](/JavaScript/Archives/DOM/create-elements/script.js)
- [CSS - Create element](/JavaScript/Archives/DOM/create-elements/style.css)
- [HTML - Create element](/JavaScript/Archives/DOM/create-elements/index.html)

## Template HTML

- [JS - Template html](/JavaScript/Archives/DOM/template-html/script.js)
- [CSS - Template html](/JavaScript/Archives/DOM/template-html/style.css)
- [HTML - Template html](/JavaScript/Archives/DOM/template-html/index.html)

## Modifying Elements

- .insertAdjacent:
  - .insertAdjacentElement(position, element)
  - .insertAdjacentHTML(position, html)
  - .insertAdjacentText(position, text)
- Position

  - beforebegin (previous brother)
  - afterend (next brother)
  - afterbegin (first son)
  - beforeend (last son)

- [JS - Modifying Elements](/JavaScript/Archives/DOM/modifying-elements/script.js)
- [CSS - Modifying Elements](/JavaScript/Archives/DOM/modifying-elements/style.css)
- [HTML - Modifying Elements](/JavaScript/Archives/DOM/modifying-elements/index.html)

## Event Handler

- [JS - Event handler](/JavaScript/Archives/DOM/event-handler/script.js)
- [HTML - Event handler](/JavaScript/Archives/DOM/event-handler/index.html)

## Event Delegation

- [JS - Event delegation](/JavaScript/Archives/DOM/event-delegation/script.js)
- [CSS - Event delegation](/JavaScript/Archives/DOM/event-delegation/style.css)
- [HTML - Event delegation](/JavaScript/Archives/DOM/event-delegation/index.html)

## Browser Object Model (BOM)

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
  lenght: history.length,
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
