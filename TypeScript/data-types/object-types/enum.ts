// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

enum Direction {
  Up = 1,
  Down,
  Left,
  Right = "Right",
}

console.log(Direction.Left);
console.log(Direction.Right);
