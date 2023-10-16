import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
{
  /* -------- Component Basic -------- */
}
{
  /* JavaScript XML */
}
{
  /** JS
   * Create element -> ( element, attributes, what it contains );
   * Create Fragment -> ( React.fragment, attributes, what it contains );
   */
}
const button = React.createElement("button", null, "Like");
const button2 = React.createElement("button", null, "Like");
const button3 = React.createElement("button", null, "Like");

const app = React.createElement(React.Fragment, null, [
  button,
  button2,
  button3,
]);
root.render(app);
{
  /** JSX
   * Create element -> html
   * Create Fragment -> <React.Fragment>
   */
}
root.render(
  <React.Fragment>
    <button>Like</button>
    <button>Like</button>
    <button>Like</button>
  </React.Fragment>
);

{
  /* Properties (props) */
}
function UserCard(props) {
  return (
    <section>
      <h3>Name: {props.name}</h3>
      <p>Married: {props.married}</p>
      <p>Points: {props.points}</p>
      <p>street: {props.address.street} </p>
      <p>city: {props.address.city} </p>
    </section>
  );
}
{
  /* Add properties (props) as attributes */
}
root.render(
  <>
    <UserCard
      name="Bryan"
      married={false}
      points={[99, 33, 3, 22.2]}
      address={{ address: "123 Main Street", city: "New York" }}
    />
  </>
);

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
