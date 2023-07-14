/** Function Naming
 *    Functions must be short and do exactly one thing.
 *    A name should clearly describe what the function does.
 *
 *    - show  - get  - calc  - create  - check  - etc...
 */

function functionName(parameters) {
  console.log(parameters);
}
functionName();

// Return

function addition(number_1, number_2) {
  return number_1 + number_2;
}
let result = addition(29, 19);
console.log(result);

// Copy a functin to another variable

const sumar = addition;
console.log(sumar(2, 4));
