# 🟦 TypeScript

TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code.

TypeScript adds static typing to JavaScript, enabling better tooling, improved code quality, and easier maintenance—especially in large-scale applications.

---

## 📑 Table of Contents

- [Data type](#-data-types)
- [Type](#-type)
- [Interfaces](#-interfaces)
- [Classes](#-classes)
- [Generic](#-generics)

---

## 📦 Data types

In TypeScript, data types define the kind of value a variable can hold. This helps write safer and more predictable code by catching errors at compile time instead of runtime.

TypeScript extends JavaScript with a static type system, making code easier to understand, maintain, and scale.

---

### Basic Types

TypeScript includes several primitive data types:

- string
- number
- boolean
- null
- undefined
- void

These types represent simple values and are the foundation of the type system.

---

### Advanced Types

To describe more complex data structures, TypeScript provides advanced and utility types such as:

| Data Type | Description                                         |
| --------- | --------------------------------------------------- |
| `void`    | Used when a function does not return a value.       |
| `any`     | Allows any value (disables type safety).            |
| `arrays`  | Lists of values with the same type.                 |
| `enums`   | Named constants representing a fixed set of values. |
| `tuples`  | Arrays with fixed types per position.               |
| `unknown` | Safer alternative to `any` for unknown values.      |
| `never`   | Used for functions that never return.               |

---

## 🧩 Type

Type aliases do not create new types; instead, they provide an alternative name for an existing type. They are defined using the `type` keyword and can reference any valid TypeScript type, including primitive types, objects, unions, and more.

Type aliases help improve readability and maintainability by giving meaningful names to complex types.

```ts
type Programmer = {
  name: string
  technology: string[]
}
```

---

## 📐 Interfaces

In TypeScript, an interface defines a contract that an object must follow. It specifies the structure and types of an object’s properties, helping ensure consistency and type safety across your codebase.

Interfaces are commonly used to describe object shapes and are especially useful in large applications.

```ts
interface Client {
  name: string
  address: string
}
```

---

## 🧱 Classes

In TypeScript, classes are used to create reusable object blueprints. They exist both at compile time and runtime, providing structure and behavior to your code.

- Allow property initialization and method implementation
- Enable the creation of class instances
- Support object-oriented programming concepts

---

### Access control keywords

TypeScript provides access modifiers to control the visibility of class members.

| Access Modifier | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `public`        | Default modifier. Members are accessible from anywhere.              |
| `private`       | Members cannot be accessed outside the containing class.             |
| `protected`     | Similar to `private`, but accessible within derived (child) classes. |
| `readonly`      | Prevents a property from being modified after initialization.        |

---

## 🧬 Generics

Generics in TypeScript allow you to write reusable functions, classes, and objects that work with multiple data types instead of being limited to a single one.

The type variable T is commonly used to represent a placeholder type and can be applied wherever a type annotation is required.

```ts
function identity<T>(value: T): T {
  return value
}
```

---

[🡨 Back](../../README.md)
