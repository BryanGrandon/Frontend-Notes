# JavaScript

## All About Variables

Variables are containers for storing data

- To declare variables, we use one of the `var`, `let`, or `const` keywords.
- To assign a value, we use the `=` followed by the value.

```js
// Declared
let declaredVariable;

// Assig
declaredVariable = "value";

// Both
let variable = "value";
```

### Hoisting

- Lexical environment
  - Stores variables and functions in memory
- Temporal Dead Zone
  - Cannot access "variables" before initialization

### [Variable Naming Rules](/JavaScript/Archives/Lenguage/all-about-variables/naming-rules.js)

- 64 available characters
- Read only variable ( `SNAKE_CASE` )
- Common variables ( `camelCase` )
- Methods and Functions ( `camelCase` )
- Class and Construction function ( `PascalCase` )
- Private variables ( `_name` )
- Omit parameters ( `( _, i )` )
- DOM elements ( `$user` )

### [Variables Scopes](/JavaScript/Archives/Lenguage/all-about-variables/scopes.js)

- Global scope
  - It can be accessd from anywhere within the same JavaScript code
- Function scope
  - Variables declared inside a function can only be used inside that same function
- Block scope
  - Variables declared within a block cannot be accessd outside of that block

## [Data Type](/JavaScript/Archives/Lenguage/data-types/)

### Primitive Types

- [Number](/JavaScript/Archives/Lenguage/data-types/primitive/number.js)
- [String](/JavaScript/Archives/Lenguage/data-types/primitive/string.js)
- [Bollean](/JavaScript/Archives/Lenguage/data-types/primitive/boolean.js)
- [Null](/JavaScript/Archives/Lenguage/data-types/primitive/null.js)
- [Undefined](/JavaScript/Archives/Lenguage/data-types/primitive/undefined.js)
- [BigInt](/JavaScript/Archives/Lenguage/data-types/primitive/bigint.js)
- [Symbol](/JavaScript/Archives/Lenguage/data-types/primitive/symbol.js)

### Objects

- [Object](/JavaScript/Archives/Lenguage/data-types/object/object.js)
- [Object.assign](/JavaScript/Archives/Lenguage/data-types/object/object-assign.js)
- [Object.defineProperty](/JavaScript/Archives/Lenguage/data-types/object/object-defineproperty.js)
- Built in Objects
  - [console object](/JavaScript/Archives/Lenguage/data-types/object/built-in-objects/console.object.js)
  - [Date object](/JavaScript/Archives/Lenguage/data-types/object/built-in-objects/date-object.js)
  - [Math object](/JavaScript/Archives/Lenguage/data-types/object/built-in-objects/math-object.js)

### Typeof Operator

- `typeof`

## Type Casting

### Implicit type casting

JavaScript es un lenguaje poco tipado y la mayoría de las veces los operadores convierten automáticamente un valor al tipo correcto.

```js
let age = 21; // number
console.log(typeof age);

let name = "Bryan"; // string
console.log(typeof name);
```

### Explicit type casting

Explicit type casting is normally done to make data compatible with other variables.

- `.toString()`
- `parseInt()`
- `parseFloat()`

### Type Comversions

- `String()`
- `Number()`
- `Boolean()`

## [Data Structures](/JavaScript/Archives/Lenguage/data-structures/)

### Index Collections

- [Array](/JavaScript/Archives/Lenguage/data-structures/indexed-collections/array.js)
- [Typed Array](/JavaScript/Archives/Lenguage/data-structures/indexed-collections/typed-array.js)

### Keyed Collections

- [Map](/JavaScript/Archives/Lenguage/data-structures/keyed-collections/map.js)
- [WeakMap](/JavaScript/Archives/Lenguage/data-structures/keyed-collections/weakmap.js)
- [Set](/JavaScript/Archives/Lenguage/data-structures/keyed-collections/set.js)
- [WeakSet](/JavaScript/Archives/Lenguage/data-structures/keyed-collections/weakset.js)

### Structure Data

- [JSON](/JavaScript/Archives/Lenguage/data-structures/structured-data/data.json)
- [Methods](/JavaScript/Archives/Lenguage/data-structures/structured-data/json-methods.js)

## Equality Comparisons

### Is Loosely Equal ( `==` )

```js
let option1 = 21 == "21"; // true
let option2 = 0 == -0; // true
```

### Is Strictly Equal ( `===` )

```js
let option1 = 21 === "21"; // fasle
let option2 = 0 === -0; // true
```

### Same Value ( `Object.is()` )

```js
let option1 = Object.is(21, "21"); // fasle
let option2 = Object.is(0, -0); // false
```

## Loops and Iteraions

### Loops

- [While](/JavaScript/Archives/Lenguage/loops-and-iterations/loops/while.js)
- [Do While](/JavaScript/Archives/Lenguage/loops-and-iterations/loops/do-while.js)
- [For](/JavaScript/Archives/Lenguage/loops-and-iterations/loops/for.js)

### Iterations

- [Break, Continue](/JavaScript/Archives/Lenguage/loops-and-iterations/iterations/break-continue.js)
- [For in](/JavaScript/Archives/Lenguage/loops-and-iterations/iterations/for-in.js)
- [For of](/JavaScript/Archives/Lenguage/loops-and-iterations/iterations/for-of.js)

## Control Flow

### Conditional statements

- [IF - ELSE](/JavaScript/Archives/Lenguage/control-flow/conditional-statements/if-else.js)
- [Switch](/JavaScript/Archives/Lenguage/control-flow/conditional-statements/switch.js)

### Exception Handling

- [Try, Catch, Finally](/JavaScript/Archives/Lenguage/control-flow/exception-handling/try-catch-finally.js)
- [Throw](/JavaScript/Archives/Lenguage/control-flow/exception-handling/throw-statement.js)

## Operators

- [Arithmetic Operator](/JavaScript/Archives/Lenguage/operators/arithmetic-operator.js)
- [Comparison Operator](/JavaScript/Archives/Lenguage/operators/comparison-operator.js)
- [Logical Operator](/JavaScript/Archives/Lenguage/operators/logical-operator.js)
- [Ternary Operator](/JavaScript/Archives/Lenguage/operators/ternary-operator.js)
- [Bitwise Operator](/JavaScript/Archives/Lenguage/operators/bitwise-operator.js)

## Functions

- [Function](/JavaScript/Archives/Lenguage/functions/functions.js)
- [Function Parameter](/JavaScript/Archives/Lenguage/functions/function-parameter.js)
- [Arrow Function](/JavaScript/Archives/Lenguage/functions/arrow-functions.js)
- [IIFE](/JavaScript/Archives/Lenguage/functions/iife.js)
- [Arguments Object](/JavaScript/Archives/Lenguage/functions/arguments-object.js)
- Scope and Function Stack
  - [Closures](/JavaScript/Archives/Lenguage/functions/scope-and-function-stack/closures.js)
  - [Lexical Scoping](/JavaScript/Archives/Lenguage/functions/scope-and-function-stack/lexical-scoping.js)
  - [Recursion](/JavaScript/Archives/Lenguage/functions/scope-and-function-stack/recursion.js)

## Strict Mode

### Invoke strict mode

Strict mode applies to an entire script or to individual functions.

To invoke strict mode on a whole script, type exactly `"use strict";` before any other expression.

### Strict mode has several changes to the normal JavaScript semantics:

1. Remove some silent JavaScript bugs by changing them to throw errors.

2. Fixes bugs that make it difficult for JavaScript engines to perform optimisations: sometimes, code in strict mode can run faster than identical but non-strict code.

3. Prohibits certain syntax that is likely to be defined in future versions of ECMAScript.

### Sets an error in:

- Accidental creation of global variables
- Duplicate parameters
- Read-only attributes
- Non-extendable objects

## Using (`this`) keyword

- [In a Function](/JavaScript/Archives/Lenguage/this-keyword/this-in-function.js)
- [In Arrow Function](/JavaScript/Archives/Lenguage/this-keyword/this-in-arrow-function.js)
- [In a Method](/JavaScript/Archives/Lenguage/this-keyword/this-in-method.js)
- Explicit Binding
  - [Call](/JavaScript/Archives/Lenguage/this-keyword/explicit-binding/call.js)
  - [Apply](/JavaScript/Archives/Lenguage/this-keyword/explicit-binding/apply.js)
  - [Bind](/JavaScript/Archives/Lenguage/this-keyword/explicit-binding/bind.js)

## Asynchronous JavaScript

- [setTimeout](/JavaScript/Archives/Lenguage/asynchronous/settimeout.js)
- [setInterval](/JavaScript/Archives/Lenguage/asynchronous/setinterval.js)
- [Event Loop](/JavaScript/Archives/Lenguage/asynchronous/event-loop.js)
- [Callback](/JavaScript/Archives/Lenguage/asynchronous/callback.js)
- [Promise](/JavaScript/Archives/Lenguage/asynchronous/promise.js)
- [Async Await](/JavaScript/Archives/Lenguage/asynchronous/async-await.js)

## Classes

- [Class](/JavaScript/Archives/Lenguage/classes/class.js)
- [Getter and Setter](/JavaScript/Archives/Lenguage/classes/getter-setter.js)
- [Inherence](/JavaScript/Archives/Lenguage/classes/)

### Additional

- Protected properties are usually prefixed with the underscore `_`.
- Privates should start with `#`. They are only accessible from inside the class.
- [Static](/JavaScript/Archives/Lenguage/classes/additional/static.js)

## Generator

- [Generators](/JavaScript/Archives/Lenguage/generators/generators.js)

## Modules

- [Export](/JavaScript/Archives/Lenguage/modules/export.js)
- [Import](/JavaScript/Archives/Lenguage/modules/import.js)
- [In HTML](/JavaScript/Archives/Lenguage/modules/index.html)

## Dev Tools

| DevTools      | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `Element`     | Allows you to view and manipulate the HTML and CSS of the page. |
| `Console`     | Allows you to execute JavaScript code.                          |
| `Source`      | Shows us the source code by domain.                             |
| `Network`     | Displays all requests made by the browser to remote servers.    |
| `Performance` | Overall site and CPU performance.                               |
| `Memory`      | Performance and memory allocation.                              |
| `Application` | application, storage, bacground service, frames.                |

### Debuggin

- Source
  - The resource zone showing the list of files
  - The resource zone showing the file code
  - The information and control zone

#### Breakpoints (interruption points)

A breakpoint is a code point where the `debugger` will automatically pause JavaScript execution.

While the code is paused, we can examine the current variables,
execute commands in the console, etc. In other words, we can debug.

#### Pause and look around

- Watch
  - returns the current value of any expression.
- Call Stack
  - displays nested calls in the chain.
- Scope
  - active variables.

#### Logging

To write something to the console, there is the console.log
function.

If we have enough logging in our code, we can then see what is
happening in our log, without the debugger.
