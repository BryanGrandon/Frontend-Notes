// Function expressions

const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};

anonymousFunction();
anonymousFunction(false);

// Arrow Functions

const arrowFunction = (coffee = true) => {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};

arrowFunction();
arrowFunction(false);
