# ⚛️ React

React is an open-source JavaScript library for building user interfaces, especially single-page applications. It focuses on creating reusable components and efficiently updating the UI based on state changes.

---

## 📑 Table of Contents

- [Web Application Packager](#-web-application-packager)
- [Components](#-components)
- [Rendering](#-rendering)
- [Hooks](#-hooks)
- [State Management](#️-state-management)
- [Styling](#-styling)

---

## 📦 Web Application Packager

[Vite](https://vitejs.dev/) is a modern build tool designed to provide a fast and lightweight development experience for modern web applications.

It offers instant server start, lightning-fast hot module replacement, and excellent support for frameworks like React.

```bash
npm create vite@latest
# Project name: ?
# Select a framework: 'react'
# Select a variant: 'js + SWC' or 'ts + SWC'
cd name-project
npm install
npm run dev
```

> [!NOTE]
> An older alternative is [Create-React-App](https://create-react-app.dev/), which is now less recommended for new projects.

---

## 🧩 Components

A component is a reusable piece of code that renders part of the user interface. Components can receive data, manage their own state, and be composed together to build complex UIs.

```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>
}
```

---

### Key Rules

- Use PascalCase for component names to distinguish them from regular functions.
- A component must always return a React element.
- In React, [props](./examples/props.jsx) (short for properties) are used to pass data from parent components to child components.

---

## 🎨 Rendering

The Virtual DOM is a lightweight, in-memory representation of the real DOM. React uses it to efficiently update and render only the parts of the UI that change, improving performance.

---

### Lists and Keys

Keys help React identify which elements have been added, removed, or updated. They improve rendering efficiency when working with lists.

```jsx
<Component key={data.id} />
```

---

### Conditional Rendering

Conditional logic allows you to render different UI elements based on specific conditions.

```jsx
function Component({ age, name }) {
  // IF
  if (age < 18) {
    return <section>You are a minor.</section>
  }
  // Ternary operator
  return <section>{name ? name : 'User'} of legal age.</section>
}
```

---

## 🪝 Hooks

Hooks are a React API that let you use state and other React features inside function components, without writing class components.

- `useState` allows you to add and manage local state in a component.
- `useEffect` lets you synchronize a component with side effects or external systems.

```jsx
import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

---

## 🗂️ State Management

State management is a way to organize state and how data flows between your components.

### Context

The React Context API allows you to share data across the component tree without passing props manually at every level. It is commonly used for global state such as themes, user data, or configuration.

A context is created using createContext, wrapped around components with a Provider, and consumed using the useContext hook.

```jsx
import { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  return <AppContext.Provider value={{ number: 12, message: 'Hello' }}>{children}</AppContext.Provider>
}

export function Component() {
  const { number } = useContext(AppContext)
  return <h2>{number}</h2>
}
```

---

## 🎨 Styling

In modern React, there are multiple ways to style an application using CSS.

- `Inline CSS` can be applied directly to elements using style attributes.
- `CSS Modules` provide locally scoped styles, ensuring styles are only applied to the component where they are defined.

---

[🡨 Back](../../README.md)
