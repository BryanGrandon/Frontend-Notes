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
