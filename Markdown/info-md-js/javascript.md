# JavaScript Notes

## All About Variables

Variables are containers for storing data

- To declare variables, we use one of the `var`, `let`, or `const` keywords.
- To assign a value, we use the `=` followed by the _value_.

### Hoisting

- Lexical environment: _Stores variables and functions in memory_
- Temporal Dead Zone: _Cannot access "variables" before initialization_

### Variables Scopes

- Global scope: _It can be accessed from anywhere within the same JavaScript code_
- Function scope: _Variables declared inside a function can only be used inside that same function_
- Block scope: _Variables declared within a block cannot be accessed outside of that block_

## Data Type

### [Primitive Type](/JavaScript/Lenguage/data-types/primitive-type.js)

- _Number_
- _String_
- _Boolean_
- _Null_
- _Undefined_
- _Symbol_

### [Object](/JavaScript/Lenguage/data-types/object-type.js)

- _Object.assign_
- _Object.defineProperty_

### [Built in Objects](/JavaScript/Lenguage/data-types/built-in-objects.js)

- _Console object_
- _Date object_
- _Math object_

### [Methods](/JavaScript/Lenguage/data-types/methods.js)

- _Number_
- _String_

## Type Casting

- _Implicit type casting_
- _Explicit type casting_

### Type Conversions

- `String()`
- `Number()`
- `Boolean()`

## Data Structures

### [Array](/JavaScript/Lenguage/data-structures/array.js)

The arrays it stores multiple values and elements in one variable.

- [Array Methods](/JavaScript/Lenguage/data-structures/array-methods.js)

### Keyed Collection

[Map](/JavaScript/Lenguage/data-structures/map.js)

Maps are used to store a collection of elements defined by a key and value.

[Set](/JavaScript/Lenguage/data-structures/set.js)

Sets allow us to store collections of information, specifically values that will not be repeated.

### [JavaScript Object Notion ( JSON )](/JavaScript/Lenguage/data-structures/data.json)

JSON is a lightweight data interchange format. JSON is easy for users to read and write. JSON is easy to parse and generate by machines.

- [Methods](/JavaScript/Lenguage/data-structures/json-method.js)

## Equality Comparisons

- Is Loosely Equal ( `==` )
- Is Strictly Equal ( `===` )
- Same Value ( `Object.is()` )

## Loops and Iterations

### [Loops](/JavaScript/Lenguage/loops-and-iterations/loops.js)

- Do While
- While
- For

### [Iterations](/JavaScript/Lenguage/loops-and-iterations/iterations.js)

- Break, Continue
- For in
- For of

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
