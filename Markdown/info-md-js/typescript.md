# TypeScript Notes

The main feature of TypeScript is its type system. It can identify the data type of a variable or parameter using a type hint which describes the shape of an object, which provides better documentation and allows TypeScript to validate that the code works correctly.

## Installation of typescript

1. Download and install Node.js.
2. Test your installation in the terminal by typing `npm version`.
3. Install typescript by typing `npm install -g typescript` in the terminal.
4. Type `tsc` to confirm that TypeScript is installed.

## Running TypeScript

- Type `tsc --init`
- Modify tsconfig.json `target` `rootDir` `outDir`

## Declaration of variable types

### [Primitive types](/TypeScript/declaration-of-variable-types/primitive-types.ts)

- Number
- String
- Boolean
- Null
- Undefined
- enum
- Void

### [Type of Union](/TypeScript/declaration-of-variable-types/type-of-union.ts)

- Or ( `|` )
- And ( `&` )

### [Type of Collections]()

- Arrays
- Tuples

## [Basic Types](/TypeScript/data-types/basic-types.ts)

- string
- number
- boolean
- void

### Array

- number[]
- string[]

### Any

```ts
let myTypeAny: any = 24;
const arrAny: any[] = [21, "two", true];
```

### Tuples

```ts
const tuplePlayers: [string, number] = ["Hello", 35];
```

## Type Inference

```ts
let stringInference = "Hello world";
let numberInference = 23;
let booleanInference = true;
```

## Type Compositing

### Unions

```ts
let unions: string | number | null;
```

## Enums

```ts
enum Roles {
  User = 1,
  Admin,
  SuperAdmin,
}
```

## [Type assertion](/TypeScript/data-types/assertion.ts)

- as Type
- < type >
- as Const

## [Function](/TypeScript/data-types/function.ts)

```ts
function getNumber(): number {
  return Math.floor(Math.random() * 100);
}
```

## [Interface](/TypeScript/data-types/interface.ts)

- Is a definition of a code contract
- Only exists at compile time
- Are only used for type checking.
- extends Interface

## [Classes](/TypeScript/data-types/classes.ts)

- They exist at compile time and during runtime.
- We can initialize properties and implement methods
- Create instances of such a class

### Access control keywords

- public ( defauld )
- private
- protected -> Inheritance
- readonly

## Namespace

```ts
namespace Utility {
  export namespace Taxes {
    export function calculateIva(price: number): number {
      return price * 0.21 + price;
    }

    export function calculatePenaltyIva(price: number): number {
      return price * 0.3 + price;
    }
  }
}
```

```ts
/// <reference path="utility.ts" />

let utils = Utility.Taxes;

console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));
```

## [Modules](/TypeScript/modules/)

- tsconfig.json `"moduleResolution": "node"`
- Export
- Import

## [Generics](/TypeScript/generics/generic.ts)

Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type.

- < T >
