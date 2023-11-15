# Rendering

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

## Component Life Cycle

React components have a lifecycle consisting of three phases: Mounting, Updating, and Unmounting along with several “lifecycle methods”
that you can override to run code at particular times in the process.

## List and Keys

When you render lists in React, you can use the key prop to specify a unique key for each item.
This key is used to identify which item to update when you want to update a specific item.

## Render Props

The term 'render props' refers to a technique for sharing code between React components using a prop whose value is a function.
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own its own render logic.

## Refs

Refs provide a way to access DOM nodes or React elements created in the render method.
In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props.

## Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: - React events are named using camelCase, rather that lowercase. - With JSX you pass a function as the event handler, rather than a string.

## High Order Components

A Higher-order component ( HOC ) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se.
They are a pattern that emerges from React's compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

Higher-order components are not commonly used in modern React code. In order to reuse logic, React hooks are mainly used now.
