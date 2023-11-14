import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /*  JS
    - Create Element: React.createElement(element, attributes, what it contains)
    - Create Fragment: React.createElement(React.fragment, attributes, what it contains)
  */
}
const button = React.createElement("button", null, "Like");
const button2 = React.createElement("button", null, "Like");
const reactFragment = React.createElement(React.fragment, null, [
  button,
  button2,
]);

root.render(app);

{
  /*  JSX
    - Create Element: HTML
    - Create Fragment: <React.Fragment> or <></>
  */
}
root.render(
  <React.Fragment>
    <button>Like</button>
    <button>Like</button>
  </React.Fragment>
);
