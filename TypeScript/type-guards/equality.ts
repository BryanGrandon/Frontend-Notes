// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types.

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

example("hello", "world");
example("hello", true);
example(21, "world");

example("string", "string");
