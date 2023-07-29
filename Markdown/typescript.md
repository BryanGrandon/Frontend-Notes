# TypeScript Notes

## Introduction

### TypeScript and JavaScript

TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

### Running TypeScript

```
tsc --init
```

tsconfig.json

- target: "ES6", or as needed
- rootDir: "./src"
- outDir: "./dist"

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

## Type Compositin

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
