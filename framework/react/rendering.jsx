{
  /*
    The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
    and it is used to optimize the rendering of components in a React application.
  */
}
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* Component Life Cycle */
  /*
    React components have a lifecycle consisting of three phases: Mounting, Updating, and Unmounting along with several
    “lifecycle methods” that you can override to run code at particular times in the process.
  */
  /* List and Keys */
  /* 
    When you render lists in React, you can use the key prop to specify a unique key for each item.
    This key is used to identify which item to update when you want to update a specific item. 
  */
  /* Render Props */
  /* 
    The term 'render props' refers to a technique for sharing code between React components using a prop whose value is a function.
    A component with a render prop takes a function that returns a React element and calls it instead of implementing its own its own render logic.
 */
}

{
  /* Conditional Rendering */
  /*  
    Use JavaScript operators like 'if' or the 'conditional operator' to create elements representing the current state,
    and let React update the UI to match them.

    - If else.
    - Ternary operator.
  */
}

const getFoodIf = (isVegetarian) => {
  if (isVegetarian) return "tofu";
  else return "fish";
};

const getFoodTernary = (isVegetarian) => {
  return isVegetarian ? "tofu" : "fish";
};
