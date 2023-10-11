/*
    Functions exist so that we can reuse code. They are blocks of code that are executed each time 
    they are invoked. Each function is usually written to perform a specific task.
*/

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

// Function expressions //
const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
anonymousFunction();

// ArrowFunction //
const arrowFunction = (coffee = true) => {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
arrowFunction();

// Immediately Invoked Function Expression ( IIFE ) //
(function () {
  console.log(`Hello`);
})();

// Arrow function
let user = "andres";
((x) => {
  console.log(`Hello ${x}`);
})(user);

// Arguments //
function argument(a, b, c) {
  console.log(arguments[1]);
}
argument(1, 2, 3);

// -------- Scope and Function Stack -------- //

// Closures //
function init() {
  let name = "Bryan";
  displayName(name);
}
function displayName(name) {
  console.log(name);
}
init();

// Lexical Scoping //
function lexical() {
  let name = "Andres";
  function scoping() {
    console.log(name);
  }
  scoping();
}
lexical();

// Recursion //
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdepartment of Object.values(department)) {
      sum += sumSalaries(subdepartment);
    }
    return sum;
  }
}
console.log(sumSalaries(company));
