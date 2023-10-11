# Functional Components

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions.

```jsx
function Greetings(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

## characteristics

- Must return a react element.
- Must begin with a capital letter.
- Can receive values if necessary ( **props** ).
