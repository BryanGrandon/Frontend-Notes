// Type predicates are functions that return a boolean value. They are used to narrow the type of a variable.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    console.log(x.toUpperCase());
  } else {
    console.log(x);
  }
}

example("Hello World");
example(21);
