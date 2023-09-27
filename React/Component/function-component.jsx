import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* The name of our components always has to be in PascalCase */
}

function Button(text) {
  return <button className="btn">{text}</button>;
}

root.render(<Button text="Start" />);
