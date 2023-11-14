# Components

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.

In react components are create using functions or classes.

## Components Basics

### [JSX](/framework/react/components/javascriptxml.jsx)

React uses JSX to declare what to render. JSX is a JavaScript extension that allows you to write code that is visually closer to HTML, which improves the readability of the code and makes it easier to understand.

### [Props](/framework/react/components/props.jsx)

Props are the properties of a component. They are data that are passed from one component to another.

### [Conditional Rendering](/framework/react/components/conditional-rendering.jsx)

Use JavaScript operators like **if** or the **conditional operator** to create elements representing the current state, and let React update the UI to match them.

## [Functional Component](/framework/react/components/functional-component.jsx)

- Must return a react element.
- Must begin with a capital letter ( PascalCase ).
- Can receive values if necessary ( props ).

## [Class Component](/framework/react/components/class-component.jsx)

- Must extend React.Components.
- Must have a render() method to return a JSX element.
- Can receive values if necessary ( props ).
