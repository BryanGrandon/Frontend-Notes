import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* -------- JS -------- */
}

{
  /* Create element -> ( element, attributes, what it contains ); */
}
const button = React.createElement("button", null, "Like");
const button2 = React.createElement("button", null, "Like");
const button3 = React.createElement("button", null, "Like");

{
  /* Create Fragment -> ( React.fragment, attributes, what it contains ) */
}
const app = React.createElement(React.Fragment, null, [
  button,
  button2,
  button3,
]);

root.render(app);

{
  /* -------- JSX -------- */
}

root.render(
  <React.Fragment>
    <button>Like</button>
    <button>Like</button>
    <button>Like</button>
  </React.Fragment>
);

React.createElement("button", null, "Like");
