{
  /** JSX => JavaScript XML
   * Use react-without-dependency.js
   * Use SWC The one who makes magic
   */
}

import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

{
  /** -------- HTML -------- //
   * <div id="app"></div>
   */
}

const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement);

root.render(
  <React.Fragment>
    <button>Like</button>
    <button>Like</button>
    <button>Like</button>
  </React.Fragment>
);
