# 📄 Document Object Model (DOM)

In JavaScript, when we refer to the Document Object Model (DOM), we are talking about a tree-like structure that represents the HTML document.\
Through this structure, JavaScript can access, modify, create, or remove HTML elements, allowing web pages to be dynamic and interactive.

The DOM acts as a bridge between HTML and JavaScript, making it possible to manipulate content, styles, attributes, and events at runtime.

---

## 📑 Table of content

- [Document](#-document)
- [Select DOM element](#-select-dom-element)
- [Attributes manage](#-attributes-manager)
- [Class List](#-classlist)
- [Style variables](#-style-variables)
- [Insert element in DOM](#-insert-element-in-dom)
- [Walking the DOM](#-walking-the-dom)
- [Create element in the DOM](#-create-element-in-the-dom)
- [Modifying elements](#-modifying-elements)
- [Event handler](#-event-handler)
- [Browser Object Model](#-browser-object-model)

---

## 📄 Document

The Document interface represents the entire web page loaded in the browser.
It acts as the main entry point to the DOM, allowing JavaScript to access and manipulate all the content of the page.

In JavaScript, the DOM is accessed through the global `document` object, which belongs to the `window` object.

```js
const wd = window.document
const d = document
```

Both references point to the same object, since document is a property of window.

---

### What can we do with `document`?

- To access HTML tags
- Create and manipulate elements
- Access external or related documents

---

> [!NOTE]
> The document object is fundamental for DOM manipulation. Almost every interaction with the page starts from it.

---

## 🔎 Select DOM element

There are multiple ways to select DOM elements in JavaScript.
Each method is designed for a specific use case, depending on how the elements are identified in the HTML.

- Select an element that has an `id` attribute.
- Select an element that has a name in the `class` attribute.
- Select multiple elements that have a common name in the `class` attribute.

```js
document.getElementById('header') // Selects an element by id
document.querySelector('.card') // Selects the first element with class
document.querySelectorAll('.card') // Selects all elements with that class
```

> [!TIP]
> Prefer querySelector and querySelectorAll for modern JavaScript, as they work with any valid CSS selector.

---

## 🏷️ Attributes manager

Attribute manager methods allow us to check, read, modify, or remove the attributes of a DOM element.

These methods work directly with HTML attributes, such as `id`, `class`, `src`, `href`, `disabled`, etc.

| Method                      | Description                     |
| --------------------------- | ------------------------------- |
| `hasAttribute(attr)`        | Checks if an attribute exists   |
| `getAttribute(attr)`        | Returns the attribute value     |
| `setAttribute(attr, value)` | Creates or updates an attribute |
| `toggleAttribute(attr)`     | Toggles an attribute on/off     |
| `removeAttribute(attr)`     | Removes an attribute            |

> [!TIP]
> For classes, prefer `classList` (`add`, `remove`, `toggle`) instead of modifying the `class` attribute directly.

---

## 🎨 ClassList

The `classList` property allows us to add, remove, toggle, or replace CSS classes on an HTML element in a clean and safe way.

It is the recommended approach for working with classes instead of modifying the `class` attribute directly.

### 🔧 Common classList Methods

```js
element.classList.add('active') // Adds one or more classes
element.classList.remove('hidden') // Removes one or more classes
element.classList.toggle('open') // Adds or removes the class
element.classList.replace('old', 'new') // Replaces an existing class
```

> [!TIP] > `classList.toggle()` is very useful for interactive UI elements like menus, modals, and accordions.

---

## 🎨 Style variables

CSS variables (custom properties) can be read and modified dynamically using JavaScript.
This allows us to create flexible themes, dynamic styles, and reusable design systems.

| Method                         | Description                      |
| ------------------------------ | -------------------------------- |
| `setProperty(property, value)` | Sets or updates a CSS variable   |
| `getComputedStyle(element)`    | Returns all computed CSS styles  |
| `getPropertyValue(property)`   | Gets the value of a CSS variable |

> [!TIP]
> CSS variables are usually defined in :root to make them accessible across the entire document.

👉 **[View Style variables examples](../examples/dom/style-variables.js)**

---

## ➕ Insert element in DOM

JavaScript provides several ways to insert or update text and HTML content inside elements in the DOM.\
Each method behaves differently and should be chosen based on the use case.

> [!IMPORTANT]
> Use DOM methods (`createElement`, `append`) for complex structures

---

### Set Text Content

- `innerText`
  - Respects line breaks and visible spacing
  - Triggers reflow (depends on rendered content)
- `textContent`
  - Does not respect extra spaces or visual formatting
  - Faster and more predictable
  - Recommended for most cases

> [!IMPORTANT]
> Prefer `textContent` when inserting plain text

---

### Set HTML Content

- `innerHTML`: Inside element
- `outerHTML`: Element replacement

> [!IMPORTANT]
> Avoid using `innerHTML` with user-generated content (XSS risk)

---

👉 **[View Style variables examples](../examples/dom/insert-element-in-dom.js)**

---

## 🚶 Walking the DOM

The DOM allows us to navigate through elements and their relationships (parents, children, and siblings). Before manipulating an element, we first need to reach the correct DOM node.

---

### Children Elements

```js
const $children = $element.children // All child elements
const $firstChild = $element.firstElementChild // First child element
const $lastChild = $element.lastElementChild // Last child element
```

- Returns only element nodes (ignores text and comments)
- Useful for structured layouts

---

### Parent & Siblings

```js
const $parent = $element.parentElement // Parent element
const $previousSibling = $element.previousElementSibling // Previous sibling
const $nextSibling = $element.nextElementSibling // Next sibling
```

- Navigates horizontally and vertically in the DOM tree
- Safer than using parentNode when working with elements

---

### Get the Nearest Parent Element

```js
const $parent = $element.children[1].closest('section')
```

- closest() searches upwards in the DOM
- Stops at the first matching ancestor
- Very useful for event delegation

---

> [!TIP]
> Prefer Element-based properties (`children`, `parentElement`) instead of node-based ones (`childNodes`) for cleaner and more predictable results.

---

## 🧩 Create element in the DOM

JavaScript provides several methods to create, clone, and insert HTML elements or nodes into the DOM efficiently.

These methods allow you to build dynamic interfaces without writing HTML directly.

```js
// Creates a new HTML element
const $div = document.createElement('div')

// Creates a text node
const $text = document.createTextNode('Hello World')

// Adds a child node to a parent element
parent.appendChild($div)

// Creates a lightweight container for multiple nodes
const $fragment = document.createDocumentFragment()

// Clones a node or template from another document
const $clone = document.importNode($template, true)
```

> [!TIP] \
> `DocumentFragment` helps reduce reflows by inserting multiple elements into the DOM at once.

👉 **[View create element examples](../examples/dom/create-element-in-the-dom.js)**

---

## ✏️ Modifying elements

JavaScript provides methods to insert elements, HTML, or text at specific positions relative to an existing element.

These methods are efficient and avoid replacing existing content.

```js
$container.insertAdjacentElement(position, element) // Inserts an existing DOM element
$container.insertAdjacentHTML(position, html) // Inserts HTML as a string
$container.insertAdjacentText(position, text) // Inserts plain text
```

### Available Positions

| Position      | Description                                   |
| ------------- | --------------------------------------------- |
| `beforebegin` | Inserts before the element (previous sibling) |
| `afterend`    | Inserts after the element (next sibling)      |
| `afterbegin`  | Inserts inside, before the first child        |
| `beforeend`   | Inserts inside, after the last child          |

---

## ⚡ Event handler

Events are signals fired by the browser to notify JavaScript about user interactions or changes in the environment, such as clicks, keyboard input, form submission, or window resizing.

- Event whit attribute (onclick="" in HTML).
- Event with semantic handler.
- Multiple events.
- Remove event.
- Event delegation

> [!TIP]
> Event delegation reduces memory usage and works well with elements added dynamically to the DOM.

👉 **[View Event handler examples](../examples/dom/event-handler.js)**

---

## 🌐 [Browser Object Model](/dom/bom.js)

The Browser Object Model (BOM) is a collection of objects provided by the browser that allows JavaScript to interact with the browser environment, not just the document.

Unlike the DOM, the BOM focuses on the browser window and its behavior.

---

### Main BOM Objects

- `window` – The global browser window
- `location` – URL information and navigation
- `history` – Browser navigation history
- `navigator` – Browser and device information
- `screen` – Screen resolution and dimensions

---

### Summary

| Feature          | Description                |
| ---------------- | -------------------------- |
| resize           | Detect window size changes |
| scroll           | Detect scrolling           |
| load             | Page fully loaded          |
| DOMContentLoaded | HTML parsed                |
| location         | URL management             |
| history          | Navigation control         |
| navigator        | Browser info               |

> [!TIP]
> Use `DOMContentLoaded` for DOM manipulation and load when you need external resources like images or fonts.

👉 **[View BOM examples](../examples/dom/bom.js)**

---

[🡨 Back](../../README.md)
