import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* Functional Component   
      Properties ara an object, this allows us to destructure it.
        UserCard({name, married,points,address})
  */
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
