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
