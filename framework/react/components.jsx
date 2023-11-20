{
  /*
    A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.
    In react components are create using functions or classes.
  */
}
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
{
  /*  Functional Component.

    - Must return a react element.
    - Must begin with a capital letter ( PascalCase ).
  */
}
function GreetingsF(props) {
  return <h1>Hello, {props.name}</h1>;
}

{
  /* Props are the properties of a component. They are data that are passed from one component to another.*/
  /* Add properties (props) as attributes */
}
root.render(<GreetingsF name="Bryan"></GreetingsF>);

{
  /*  Class Component.

    - Must extend React.Components.
    - Must have a render() method to return a JSX element.
  */
}
class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
