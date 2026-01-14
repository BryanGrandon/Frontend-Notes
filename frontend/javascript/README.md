# 📘 JavaScript.

JavaScript is an interpreted programming language primarily used on the client-side (front-end) to add dynamic, interactive, and functional behavior to web pages. It allows developers to manipulate the DOM, handle events, validate forms, and communicate with servers without reloading the page.

JavaScript works alongside HTML (structure) and CSS (presentation), forming the core technologies of the modern web.

---

## 📑 Table of Contents

- [Strict mode](#-strict-mode)
- [Data type](#-data-type)
- [Data structure](#️-data-structure)
- [Loops and Iterations](#-loops-and-iterations)
- [Control flow](#-control-flow)
- [Operator](#-operator)

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

👉 **[View Built-in Objects examples](./examples/built-in-objects.js)**

---

## 🗂️ Data Structure.

In computer science, a data structure is a way to organize, manage, and store data efficiently, enabling fast access, modification, and iteration of information.

JavaScript provides several built-in data structures that help developers handle complex data in a structured and predictable way.

- Array, Keyed Collection, JavaScript Object Notion (JSON)

> [!TIP]
> Choosing the right data structure can significantly improve performance, readability, and maintainability of your JavaScript code.

👉 **[View Extra type examples](./examples/data-structure.js)**

---

## 🔁 Loops and Iterations

Loops provide a quick and efficient way to execute a block of code repeatedly as long as a specified condition remains true. They are fundamental for tasks such as iterating over arrays, processing data, and automating repetitive actions.

- For, While, Do While.

---

## 🔀 Control Flow.

By default, JavaScript code is executed sequentially, from the first line of a file to the last. However, this flow can be altered using control flow structures, which allow programs to make decisions, repeat actions, or handle unexpected situations.

The most common control flow mechanisms are **conditionals**, **loops**, and **exception handling**.

### Conditional statements.

Conditional statements are used to control the execution of code based on logical conditions. They allow the program to decide which block of code should run.

- If / Else, Switch.

### Exception Handling.

The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed.

- Proxies.

---

> [!TIP]
> Proper control flow improves application stability, readability, and error handling, especially in complex JavaScript projects.

---

## ➗ Operator

Operators allow you to manipulate values, perform calculations, and compare variables in JavaScript. They are fundamental building blocks used in expressions, conditionals, and logic flow.

JavaScript provides several categories of operators, each designed for specific operations.

- Arithmetic operator.
- Comparison operator.
- Logical operator.
- Ternary operator.

> [!TIP]
> Understanding how operators work together—especially comparison and logical operators—is essential for writing accurate conditional statements.

👉 **[View Operator examples](./examples/operator.js)**

---

[🡨 Back](../../README.md)
