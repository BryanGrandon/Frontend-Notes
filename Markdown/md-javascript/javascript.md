# JavaScript Notes

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

- Lexical environment: _Stores variables and functions in memory_
- Temporal Dead Zone: _Cannot access "variables" before initialization_

### Variable Naming Rules

- 64 available characterss: _lowercase_, _uppercase_, _number ( do not use at start)_
- Read only variable ( **SNAKE_CASE** ): _We know its value before executing the program_
- Common variables ( **camelCase**): _Boolean: is, has_, _other data type: Nouns with abjective_
- Methods and Functions ( **camelCase** ): _Infinitive verbs_, _What action does the function perfom?_
- Class and Construction function ( **PascalCase** ): _Usually nouns and adjectives._
- Private variables ( **\_name**)
- Omit parameters ( **( \_ , i )** )
- DOM elements ( **$user** )

### Variables Scopes

- Global scope: _It can be accessd from anywhere within the same JavaScript code_
- Function scope: _Variables declared inside a function can only be used inside that same function_
- Block scope: _Variables declared within a block cannot be accessd outside of that block_

## [Data Type](/JavaScript/Lenguage/data-types/)

### Primitive Types

- [Number](/JavaScript/Lenguage/data-types/primitive/number.js)
- [String](/JavaScript/Lenguage/data-types/primitive/string.js)
- [Boolean](/JavaScript/Lenguage/data-types/primitive/boolean.js)
- [Null](/JavaScript/Lenguage/data-types/primitive/null.js)
- [Undefined](/JavaScript/Lenguage/data-types/primitive/undefined.js)
- [BigInt](/JavaScript/Lenguage/data-types/primitive/bigint.js)
- [Symbol](/JavaScript/Lenguage/data-types/primitive/symbol.js)

### Objects

- [Object](/JavaScript/Lenguage/data-types/object/object.js)
- [Object.assign](/JavaScript/Lenguage/data-types/object/object-assign.js)
- [Object.defineProperty](/JavaScript/Lenguage/data-types/object/object-defineproperty.js)
- Built in Objects
  - [Console object](/JavaScript/Lenguage/data-types/object/built-in-objects/console.object.js)
  - [Date object](/JavaScript/Lenguage/data-types/object/built-in-objects/date-object.js)
  - [Math object](/JavaScript/Lenguage/data-types/object/built-in-objects/math-object.js)

### Typeof Operator

- `typeof`

```js
console.log(typeof 21);
```

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

## Data Structures

### Index Collections

- [Array](/JavaScript/Lenguage/data-structures/indexed-collections/array.js)
- [Typed array](/JavaScript/Lenguage/data-structures/indexed-collections/typed-array.js)

### Keyed Collections

- [Map](/JavaScript/Lenguage/data-structures/keyed-collections/map.js)
- [weakMap](/JavaScript/Lenguage/data-structures/keyed-collections/weakmap.js)
- [Set](/JavaScript/Lenguage/data-structures/keyed-collections/set.js)
- [weakSet](/JavaScript/Lenguage/data-structures/keyed-collections/weakset.js)

### Structure Data

- [JSON](/JavaScript/Lenguage/data-structures/structured-data/data.json)
- [Methods](/JavaScript/Lenguage/data-structures/structured-data/json-methods.js)

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

- [While](/JavaScript/Lenguage/loops-and-iterations/loops/while.js)
- [Do while](/JavaScript/Lenguage/loops-and-iterations/loops/do-while.js)
- [For](/JavaScript/Lenguage/loops-and-iterations/loops/for.js)

### Iterations

- [Break, Continue](/JavaScript/Lenguage/loops-and-iterations/iterations/break-continue.js)
- [For in](/JavaScript/Lenguage/loops-and-iterations/iterations/for-in.js)
- [For of](/JavaScript/Lenguage/loops-and-iterations/iterations/for-of.js)

## Control Flow

### Conditional statements

- [IF - ELSE](/JavaScript/Lenguage/control-flow/conditional-statements/if-else.js)
- [Switch](/JavaScript/Lenguage/control-flow/conditional-statements/switch.js)

### Exception Handling

- [Try, Catch, Finally](/JavaScript/Lenguage/control-flow/exception-handling/try-catch-finally.js)
- [Throw](/JavaScript/Lenguage/control-flow/exception-handling/throw-statement.js)

## Operators

- [Arithmetic Operator](/JavaScript/Lenguage/operators/arithmetic-operator.js)
- [Comparison Operator](/JavaScript/Lenguage/operators/comparison-operator.js)
- [Logical Operator](/JavaScript/Lenguage/operators/logical-operator.js)
- [Ternary Operator](/JavaScript/Lenguage/operators/ternary-operator.js)
- [Bitwise Operator](/JavaScript/Lenguage/operators/bitwise-operator.js)

## Functions

- [Function](/JavaScript/Lenguage/functions/functions.js)
- [Function Parameter](/JavaScript/Lenguage/functions/function-parameter.js)
- [Arrow Function](/JavaScript/Lenguage/functions/arrow-functions.js)
- [IIFE](/JavaScript/Lenguage/functions/iife.js)
- [Arguments Object](/JavaScript/Lenguage/functions/arguments-object.js)
- Scope and Function Stack
  - [Closures](/JavaScript/Lenguage/functions/scope-and-function-stack/closures.js)
  - [Lexical Scoping](/JavaScript/Lenguage/functions/scope-and-function-stack/lexical-scoping.js)
  - [Recursion](/JavaScript/Lenguage/functions/scope-and-function-stack/recursion.js)

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

## Using ( `this` ) keyword

- [In a Function](/JavaScript/Lenguage/this-keyword/this-in-function.js)
- [In a Arrow Function](/JavaScript/Lenguage/this-keyword/this-in-arrow-function.js)
- [In a Methods](/JavaScript/Lenguage/this-keyword/this-in-method.js)
- Explicit Binding
  - [Call](/JavaScript/Lenguage/this-keyword/explicit-binding/call.js)
  - [Apply](/JavaScript/Lenguage/this-keyword/explicit-binding/apply.js)
  - [Bind](/JavaScript/Lenguage/this-keyword/explicit-binding/bind.js)

## Asynchronous JavaScript

- [setTimeout](/JavaScript/Lenguage/asynchronous/settimeout.js)
- [setInterval](/JavaScript/Lenguage/asynchronous/setinterval.js)
- [Event Loop](/JavaScript/Lenguage/asynchronous/event-loop.js)
- [Callback](/JavaScript/Lenguage/asynchronous/callback.js)
- [Promise](/JavaScript/Lenguage/asynchronous/promise.js)
- [Async Await](/JavaScript/Lenguage/asynchronous/async-await.js)

## Classes

- [Class](/JavaScript/Lenguage/classes/class.js)
- [Getter and Setter](/JavaScript/Lenguage/classes/getter-setter.js)
- [Inheritance](/JavaScript/Lenguage/classes/inheritance.js)

### Additional

- Protected properties are usually prefixed with the underscore `_`.
- Privates should start with `#`. They are only accessible from inside the class.
- [Class](/JavaScript/Lenguage/classes/additional/static.js)

## Generator

- [Generator](/JavaScript/Lenguage/generators/generators.js)

## Modules

- [Export](/JavaScript/Lenguage/modules/export.js)
- [Import](/JavaScript/Lenguage/modules/import.js)
- [In HTML](/JavaScript/Lenguage/modules/index.html)

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
