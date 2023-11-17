import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* ---- JSX ---- */
  /* 
    React uses JSX to declare what to render. JSX is a JavaScript extension that allows you to write code that is visually closer to HTML,
    which improves the readability of the code and makes it easier to understand.
  */
}
{
  /*  JS - element, attributes, what it contains - React.fragment, attributes, what it contains */
}
const button = React.createElement("button", null, "Like");
const button2 = React.createElement("button", null, "Like");
const reactFragment = React.createElement(React.fragment, null, [
  button,
  button2,
]);
root.render(reactFragment);
{
  /*  JSX - Create Element: HTML - Create Fragment: <React.Fragment> or <></> */
}
root.render(
  <React.Fragment>
    <button>Like</button>
    <button>Like</button>
  </React.Fragment>
);

{
  /* ---- Props ---- */
  /* 
    Props are the properties of a component. 
    They are data that are passed from one component to another.
  */
}
const UsingProps = (props) => {
  return (
    <section>
      <h3>Name: {props.name}</h3>
      <section>
        <p>street: {props.address.street} </p>
        <p>city: {props.address.city} </p>
      </section>
    </section>
  );
};
{
  /* Add properties (props) as attributes */
}
root.render(
  <>
    <UsingProps
      name="Bryan"
      address={{ street: "123 Main Street", city: "New York" }}
    />
  </>
);

{
  /* ---- Conditional Rendering ---- */
  /* 
    Use JavaScript operators like 'if' or the 'conditional operator' to create elements representing the current state, and let React update the UI to match them.
  */
}
{
  /* If else*/
}
const getFoodI = (isVegetarian) => {
  if (isVegetarian) return "tofu";
  else return "fish";
};
{
  /* Ternary operator */
}
const getFoodT = (isVegetarian) => {
  return isVegetarian ? "tofu" : "fish";
};
