import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* -------- Functional Component -------- */
  {
    /** Characteristics
     * Must return a react element.
     * Must begin with a capital letter ( PascalCase ).
     * Can receive values if necessary ( props ).
     */
  }
}

function Button(text) {
  return <button className="btn">{text}</button>;
}
root.render(<Button text="Start" />);

{
  /* -------- Class Components -------- */
  {
    /** Characteristics
     * Must extend React.Components.
     * Must have a render() method to return a JSX element.
     * Can receive values if necessary ( props ).
     */
  }
}

class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
