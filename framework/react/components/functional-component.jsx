{
  /*
    - Must return a react element.
    - Must begin with a capital letter ( PascalCase ).
    - Can receive values if necessary ( props ).
  */
}

import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Button(text) {
  return <button className="btn">{text}</button>;
}
root.render(<Button text="Start" />);
