# Class Components

All class based components are child classes for the Component class of ReactJS.

```jsx
class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

## characteristics

- Must extend `React.Components`.
- Must have a `render()` method to return a JSX element.
- Can receive values if necessary ( **props** ).
