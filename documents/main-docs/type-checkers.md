# Type Checkers

## TypeScript

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Primitive types](/typescript/primitive-types.ts)
- [Type of Union](/typescript/type-of-union.ts)
- [Type of Collections](/typescript/collections.ts)
- [Interfaces and Types](/typescript/interface.ts)
- [Functions](/typescript/functions.ts)
- [Class](/typescript/class.ts)
- [Generic](/typescript/generic.ts)

### Type assertion

| Types    | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| As Const | The value must be treated as a read-only value.                      |
| As Type  | Allows us to specify the data type, regardless of its inferred type. |

### Access to external libraries

Modules provide a way to organize and classify code, allowing you to group related code
together.

- tsconfig.json: `"moduleResolution": "node"`

#### [Export and import of module components](/typescript/modules/)

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
