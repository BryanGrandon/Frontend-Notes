# Components

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.

## Class Components

All class based components are child classes for the Component class of ReactJS.

Although the class components are supported in React, it is encouraged to write functional components and make use of hooks in modern React applications.

## Functional components

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions.

[Example](/React/Component/function-component.jsx)

## Components Basics

### JSX

JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

### Props vs State

Props (short for “properties”) and state are both plain JavaScript objects.

While both hold information that influences the output of component render, they are different in one important way: props get passed to the component (similar to function parameters)whereas state is managed within the component (similar to variables declared within a function).

### Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

### Composition vs Inheritance

React has a powerful composition model, and it is recommended to use composition instead of inheritance to reuse code between components.
