// ---- Type Union
// The union operator | is used to combine two or more types into a single type that represents all the possible types.

type stringOrNumber = string | number;

let value_1: stringOrNumber = "hello";
value_1 = 42;

// ---- Type Intersection
// The intersection operator & is used to intersect two or more types into a single type that represents the properties of all the types.

interface A {
  a: string;
}

interface B {
  b: number;
}

type AB = A & B;
let value_2: AB = { a: "hello", b: 42 };

// ---- Type Aliases
// A Type Alias in TypeScript allows you to create a new name for a type.

type Name = string;
type Age = number;
type User_1 = { name: Name; age: Age };

const user_1: User_1 = { name: "John", age: 30 };

// ---- Keyof Operator
// The keyof operator in TypeScript is used to get the union of keys from an object type.

interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"

const key: UserKeys = "age";
