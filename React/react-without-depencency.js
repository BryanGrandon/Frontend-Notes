/** Import Library React and React-DOM
 * Vanilla JavaScript
 */
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

/** -------- HTML -------- //
 * <div id="app"></div>
 */

const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement);

/** Render
 * You cannot render HTML elements
 *  - root.render(<button>Like</button>);
 *
 * Only one element can be render
 * - root.render(button1, button2, button3)
 *
 * React.Fragment
 * - To render multiple elements without
 *
 */

const button = React.createElement("button", null, "Like");
const button2 = React.createElement("button", null, "Like");
const button3 = React.createElement("button", null, "Like");

const app = React.createElement(React.Fragment, null, [
  button,
  button2,
  button3,
]);

root.render(app);
