// ---- ---- Function ---- ---- //

function selectName(parameters) {
  console.log(parameters);
}
selectName("21");

// Return

function addition(n1, n2) {
  return n1 + n2;
}
let result = addition(6, 9);

// Copy a function to another variable

const copy = addition;
let resultCopy = copy(2, 4);

// ---- ---- Function expressions ---- ---- //

const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
anonymousFunction();

// ---- ---- ArrowFunction ---- ---- //

const arrowFunction = (coffee = true) => {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
arrowFunction();

// ---- ---- Immediately Invoked Function Expression ( IIFE ) ---- ---- //

(function () {
  console.log(`Hello`);
})();

// Arrow function
let user = "andres";

((x) => {
  console.log(`Hello ${x}`);
})(user);

// ---- ---- Arguments ---- ---- //

function argument(a, b, c) {
  console.log(arguments[1]);
}
argument(1, 2, 3);
