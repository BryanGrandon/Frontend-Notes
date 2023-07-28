# TypeScript Notes

## Introduction

### TypeScript and JavaScript

TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

### Running TypeScript

## TypeScript Types

### [Primitive Types](/TypeScript/data-types/primitive-types.ts)

- Boolean
- Number
- String
- Void
- Undefined
- Null

### Object Types

- [Interface](/TypeScript/data-types/object-types/interface.ts)
- [Class](/TypeScript/data-types/object-types/class.ts)
- [Enum](/TypeScript/data-types/object-types/enum.ts)
- [Arrays](/TypeScript/data-types/object-types/arrays.ts)
- [Tuples](/TypeScript/data-types/object-types/tuples.ts)

### Other Types

- Any
- Unknown
- Never

### [Assertions](/TypeScript/data-types/assertion.ts)

- As Const
- As Type
- As Any

## Type Inference

Type inference in TypeScript refers to the process of automatically determining the type of a variable based on the value assigned to it.

```ts
let number = 21;
let string = "Hello";
let isTrue = true;
```

## [Combining Types](/TypeScript/combining-types.ts)

In TypeScript, you can combine types using type union and type intersection.

- Type Union
- Type Intersection
- Type Aliases
- Keyof Operator

## Type Guards

Type guards are a way to narrow down the type of a variable.

- [Typeof Operator](/TypeScript/type-guards/typeof.ts)
- [Instanceof Operator](/TypeScript/type-guards/instanceof.ts)
- [Equality](/TypeScript/type-guards/equality.ts)
- [Truthiness](/TypeScript/type-guards/truthiness.ts)
- [Type Predicates](/TypeScript/type-guards/predicates.ts)
