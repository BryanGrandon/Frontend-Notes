import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* The name of our components always has to be in PascalCase */
}

function TwitterFollowCard({ userName, name }) {
  return (
    <article>
      <header>
        <img
          src={`https://unavatar.io/${userName}`}
          alt={`Avatar ${userName}`}
        />
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button>Follow</button>
      </aside>
    </article>
  );
}

root.render(
  <>
    <TwitterFollowCard userName="midudev" name="Miguel Angel" />
    <TwitterFollowCard userName="mouredev" name="Brais Moure" />
  </>
);
