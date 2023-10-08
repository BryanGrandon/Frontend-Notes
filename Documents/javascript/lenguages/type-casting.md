# Type Casting

Type conversion (or typecasting) means the transfer of data from one data type to another.

**Implicit** conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.

The source code can also **explicitly** require a conversion to take place.

```js
// Explicit Type Casting

let number = parseInt("25.5");
let float = parseFloat("25.5");
let string = number.toString();
```

```js
// Implicit Type Casting
let number = "4" - "2";
```

## Type Conversions

- `String()`
- `Number()`
- `Boolean()`
