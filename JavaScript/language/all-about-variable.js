// Variables are containers for storing data

// -------- var, let or const -------- //

var value1 = 10;
let value2 = "Andres";
const value3 = true;

// -------- Hoisting -------- //

/*
    JavaScript Hoisting refers to the process whereby the interpreter appears 
    to move the declaration of functions, variables, or classes to the top 
    of their scope, prior to execution of the code.

    - Lexical environment: Stores variables and functions in memory
    - Temporal Dead Zone: Cannot access "variables" before initialization
*/

// -------- Variable Scope -------- //

/** Global Scope ---- //
 * It can be accessed from anywhere within the same JavaScript code.
 */

var global = "Global scope";
{
  console.log(global);
}

/** Function scope ---- //
 * Variables declared inside a function can only be used inside that same function.
 */
function hi(name) {
  let greet = `Hello `;
  console.log(greet + name);
}
console.log(greet);

/** Block scope ---- //
 * Variables declared within a block cannot be accessed outside of that block.
 */
let block = "Block scope 1";
{
  let block = "Block scope 2";
  console.log(block);
}
console.log(block);
