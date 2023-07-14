// Default Params

function subtraction(number1, number2) {
  return number1 - number2;
}
console.log(subtraction(4, 8));

// Rest Params ...

function addition(...args) {
  let variable = 0;
  for (let arg of args) {
    variable += arg;
  }
  return variable;
}
console.log(addition(2, 4, 6, 8));
