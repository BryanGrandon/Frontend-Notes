# 📘 JavaScript.

JavaScript is an interpreted programming language primarily used on the client-side (front-end) to add dynamic, interactive, and functional behavior to web pages. It allows developers to manipulate the DOM, handle events, validate forms, and communicate with servers without reloading the page.

JavaScript works alongside HTML (structure) and CSS (presentation), forming the core technologies of the modern web.

---

## 📑 Table of Contents

- [Strict mode](#-strict-mode)
- [Data type](#-data-type)

---

## 🔒 Strict mode

Strict mode is a special mode in JavaScript that enables a more restrictive and secure execution context. It helps developers write cleaner code by turning silent errors into explicit ones and preventing the use of unsafe or deprecated features.

To enable strict mode, add the following statement at the beginning of a script or function:

```js
'use strict'
```

When enabled, JavaScript performs stricter parsing and error handling during runtime.

> [!NOTE]
> Strict mode is recommended for modern JavaScript development, especially in large projects or collaborative environments.

---

## 🧩 Data type

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

> [!NOTE]
> Understanding the difference between primitive and reference types is essential for mastering concepts like comparison, memory management, and performance in JavaScript.

---

### Primitive data types

Primitive data types represent immutable values and are stored directly in memory. Once created, their values cannot be modified—only replaced.

- String, Number, Boolean, Null, Undefined, Symbol.

👉 **[View Primitive type examples](./examples/primitive-type.js)**

---

### Non-primitive data type (object)

Non-primitive data types store a reference to their value in memory. This means the variable points to the location where the data is stored rather than storing the value itself.

- Object, Array, Maps / WeakMaps, Sets / WeakSets.

---

### Built-in Objects (Extra)

JavaScript also provides several built-in objects that extend functionality and simplify common tasks:

- Date, Math, Console.

👉 **[View Extra type examples](./examples/extra-type.js)**

---

[🡨 Back](../../README.md)
