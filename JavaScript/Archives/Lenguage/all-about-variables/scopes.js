/** VAR
 *  - Global scope */

{
  var global = true;
}
console.log(global);

/** LET
 *  - Block scope */

let block = false;
{
  let block = true;
}
console.log(block);

/** Const
 *  - Block scope */

const blockConst = false;
{
  const blockConst = true;
}
console.log(blockConst);
blockConst = false; // Assigment to constant variable

// Function Scope:

function scope() {
  let functionScope = true;
  console.log(functionScope);
}
console.log(functionScope); // Error
