import { useEffect, useState } from "react";

{
  /*
    Hooks are a React API that allows us to have state, and other React features, in components created with a function

    - useState.
    - useEffect.
    - useContext.
  */
}

{
  /* 
    useState:

    useState hook is used to manage the state of a component in functional components. Calling useState returns an array with tho elements: 
    the current state value and a function to update the state.
  */
}

const [state, setState] = useState(initialState);

function CounterS() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Click here!
      </button>
    </>
  );
}

{
  /*
    useEffect:

    useEffect is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate,
    but it only runs when the component (or some of its props) changes and during the initial mount.
  */
}

function CounterE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter has been updated`);
  }, [count]);

  return (
    <>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}
