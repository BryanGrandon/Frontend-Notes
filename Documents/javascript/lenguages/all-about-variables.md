# All About Variables

Variables are containers for storing data

- To declare variables, we use one of the `var`, `let`, or `const` keywords.
- To assign a value, we use the ( `=` ) followed by the _value_.

```js
var value1 = 10;

let value2 = "Juan";

const value3 = true;
```

## Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes to the top of their scope, prior to execution of the code.

- Lexical environment
  - Stores variables and functions in memory
  ***
- Temporal Dead Zone
  - Cannot access "variables" before initialization

## Variables Scopes

- Global scope
  - It can be accessed from anywhere within the same JavaScript code
  ***
- Function scope
  - Variables declared inside a function can only be used inside that same function
  ***
- Block scope
  - Variables declared within a block cannot be accessed outside of that block

```js
// Global scope
var global = "Global scope";
{
  console.log(global);
}
```

```js
// Function scope
function hi(name) {
  let greet = `Hello `;
  console.log(greet + name);
}
console.log(greet);
```

```js
// Block scope
let block = "Block scope 1";
{
  let block = "Block scope 2";
  console.log(block);
}
console.log(block);
```
