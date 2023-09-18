# TypeScript Notes

TypeScript has additional code creation features not found in JavaScript:

- Declaration of variable types
- Interfaces
- Types
- Functions
- Class
- Generic
- Type assertion
- Access to external libraries

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

### [Type of Collections](/TypeScript/declaration-of-variable-types/collections.ts)

- Arrays
- Tuples

## Interfaces and Types

In TypeScript we can use Type and Interface to describe the structure of objects.

- [Difference](/TypeScript/interface/interface-and-type.ts)
- [Type of property](/TypeScript/interface/type-of-property.ts)
- [Extends](/TypeScript/interface/extends.ts)

## [Functions](/TypeScript/functions.ts)

They're how you build up layers of abstraction, mimicking classes, information hiding, and modules.

- Set the type of data to be entered to the function.
- Set the type of data to be output by the function.

### Parameters

- Compulsory Parameters
- Optional parameters
- Predetermined parameters
- Parameters of REST
- Parameters of deconstructed object

## [Class](/TypeScript/class.ts)

Classes allow common object-oriented patterns to be expressed in a standard way, making features such as inheritance more readable and interoperable.

- They exist at compile time and during runtime.
- We can initialize properties and implement methods
- Create instances of such a class

### Access control keywords

| Access Modifier | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `public`        | if you do not specify an access modifier, the default is public.                                                         |
| `private`       | If you modify the member with the private keyword, it cannot be accessed from outside the containing class.              |
| `protected`     | It is similar to the private modifier, with the difference that it can access protected elements within derived classes. |
| `readonly`      | read-only modifier                                                                                                       |

## [Generic](/TypeScript/generic.ts)

Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type.

The type variable "T" can be used whenever a type annotation is needed.

## Type assertion

| Types    | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| As Const | The value must be treated as a read-only value.                      |
| As Type  | Allows us to specify the data type, regardless of its inferred type. |

## Access to external libraries

Modules provide a way to organize and classify code, allowing you to group related code
together.

- tsconfig.json: `"moduleResolution": "node"`

### [Export and import of module components](/TypeScript/modules/)

```ts
// export element
export function greet(user: string): string {
  return `Hello ${user}`;
}
export const PI = 3.14;
// OR -> export { greet, PI };
```

```ts
// import { <component name> } from '<module name>'
// import { <component name> as <new name> } from '<module name>'
// import * as <variable name> from '<module name>'

import { greet, PI } from "./export";
```
