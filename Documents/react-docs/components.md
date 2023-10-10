# Components

Part of the user interface that is _stand-alone_ and _reusable_.

- **Stand-Alone**: Each component will have a certain status and a specific functionality.
- **Reusable**: Once defined, it can be used as many times as necessary.

## Functional components

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions.

JavaScript/ES6 function that returns a React element (JSX).

```jsx
function Greetings(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### characteristics

- Must return a react element.
- Must begin with a capital letter.
- Can receive values if necessary ( **props** ).

## Class Components

All class based components are child classes for the Component class of ReactJS.

ES6 class that returns a JSX element.

```jsx
class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### characteristics

- Must extend `React.Components`.
- Must have a `render()` method to return a JSX element.
- Can receive values if necessary ( **props** ).
