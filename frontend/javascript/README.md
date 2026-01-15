# 📘 JavaScript.

JavaScript is an interpreted programming language primarily used on the client-side (front-end) to add dynamic, interactive, and functional behavior to web pages. It allows developers to manipulate the DOM, handle events, validate forms, and communicate with servers without reloading the page.

JavaScript works alongside HTML (structure) and CSS (presentation), forming the core technologies of the modern web.

- [The Document Object Model (DOM)](/docs/dom.md) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.

---

## 📑 Table of Contents

- [Strict mode](#-strict-mode)
- [Data type](#-data-type)
- [Data structure](#️-data-structure)
- [Loops and Iterations](#-loops-and-iterations)
- [Control flow](#-control-flow)
- [Operator](#-operator)
- [Function](#-function)
- [Using (this) keyword](#-using-this-keyword)
- [Asynchronous JavaScript](#-asynchronous-javascript)
- [Classes](#-classes)
- [Generator](#️-generator)
- [Modules](#-modules)

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

---

### Primitive data types

Primitive data types represent immutable values and are stored directly in memory. Once created, their values cannot be modified—only replaced.

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

👉 **[View Primitive type examples](./examples/primitive-type.js)**

---

### Non-primitive data type (object)

Non-primitive data types store a reference to their value in memory. This means the variable points to the location where the data is stored rather than storing the value itself.

- Object
- Array
- Maps / WeakMaps
- Sets / WeakSets

---

### Built-in Objects (Extra)

JavaScript also provides several built-in objects that extend functionality and simplify common tasks:

- Date
- Math
- Console

👉 **[View Built-in Objects examples](./examples/built-in-objects.js)**

---

> [!NOTE]
> Understanding the difference between primitive and reference types is essential for mastering concepts like comparison, memory management, and performance in JavaScript.

---

## 🗂️ Data Structure.

In computer science, a data structure is a way to organize, manage, and store data efficiently, enabling fast access, modification, and iteration of information.

JavaScript provides several built-in data structures that help developers handle complex data in a structured and predictable way.

- Array
- Keyed Collection
- JavaScript Object Notion (JSON)

> [!TIP]
> Choosing the right data structure can significantly improve performance, readability, and maintainability of your JavaScript code.

👉 **[View Extra type examples](./examples/data-structure.js)**

---

## 🔁 Loops and Iterations

Loops provide a quick and efficient way to execute a block of code repeatedly as long as a specified condition remains true. They are fundamental for tasks such as iterating over arrays, processing data, and automating repetitive actions.

- For
- While
- Do While

---

## 🔀 Control Flow.

By default, JavaScript code is executed sequentially, from the first line of a file to the last. However, this flow can be altered using control flow structures, which allow programs to make decisions, repeat actions, or handle unexpected situations.

The most common control flow mechanisms are **conditionals**, **loops**, and **exception handling**.

### Conditional statements.

Conditional statements are used to control the execution of code based on logical conditions. They allow the program to decide which block of code should run.

- If / Else
- Switch.

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

## 🧠 Function.

Functions allow us to reuse code and organize logic into self-contained, reusable blocks. A function is executed every time it is invoked and is typically designed to perform a specific task.

- Function expressions.
- Arrow Function.
- Immediately Invoked Function Expression. `(function(){})()`

### Scope and Function Stack.

Scope defines the context in which variables and functions are accessible. The visibility of a variable or function depends on where it is declared within the code.

- The `closures` is when we call a function within another function.
- The `lexical scope` is when you declare a function inside another function and call it.
- The `recursion` is when the function is able to call itself.

> [!TIP]
> Mastering functions and scope is key to writing clean, maintainable, and scalable JavaScript code.

---

## 🔑 Using (this) keyword

In JavaScript, the `this` keyword behaves differently compared to many other programming languages. Instead of always referring to the current object, its value depends on how and where a function is invoked.

The behavior of `this` also varies between strict mode and non-strict mode, which can lead to unexpected results if not well understood.

- In anonymous function
- In arrow function
- Explicit binding

> [!TIP]
> Misunderstanding this is a common source of bugs. Prefer arrow functions for callbacks and use explicit binding when the context must be guaranteed.

---

## ⏳ Asynchronous JavaScript

Asynchronous programming allows JavaScript to execute long-running tasks without blocking the main thread. This makes applications responsive, enabling them to handle user interactions, timers, and network requests while other operations are still in progress.

- setTimeout
- setInterval

---

### Event Loops

JavaScript uses a runtime model based on the Event Loop, which coordinates the execution of synchronous code, asynchronous tasks, and events.

- Callback.
- Promises.
- Async / Await.

---

## 🧱 Classes

Classes are templates for creating objects. They encapsulate data (properties) and behavior (methods) into a single, reusable structure, making code more organized and easier to maintain.

- Inheritance
- Additional
- Prototypes
- Classes
- Getter / Setter
- Prototype

> [!TIP]
> While classes provide a familiar syntax, understanding prototypes helps you better grasp how JavaScript handles inheritance and object behavior under the hood.

👉 **[View Classes examples](./examples/classes.js)**

---

## ⚙️ Generator

Generators are special functions in JavaScript that allow you to pause and resume execution, making them ideal for working with iterators and sequences of values.

They implement the iterator protocol, which enables easy iteration using constructs like the for...of loop

- function\*
- yield

> [!TIP]
> Generators are useful for handling large data sets, creating custom iterators, and managing complex iteration logic in a clean and efficient way.

---

## 📦 Modules.

Modules allow you to encapsulate code—such as variables, functions, and classes—inside separate files and expose only what is necessary to other parts of an application. This promotes better organization, reusability, and maintainability.

- Export.
- Import.

> [!TIP]
> Using modules helps avoid global scope pollution and makes large JavaScript projects easier to scale and maintain.

---

[🡨 Back](../../README.md)
