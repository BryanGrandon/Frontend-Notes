import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

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
