import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

// If else
const getFoodI = (isVegetarian) => {
  if (isVegetarian) return "tofu";
  else return "fish";
};

// Ternary operator
const getFoodT = (isVegetarian) => {
  return isVegetarian ? "tofu" : "fish";
};
