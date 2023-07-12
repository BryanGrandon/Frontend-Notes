let isTrue = true;
let isFalse = false;

// Boolean values are also the result of comparisons

let isGreater = 4 > 1;
console.log(isGreater);

// Value Tending To True

const valuesTendingToTrue = {
  boolean: true,
  object: {},
  array: [],
  string: "string",
  number: 0.1,
  infinite: Infinity,
};

for (let key of Object.values(valuesTendingToTrue)) {
  if (key) console.log("Is true");
}

// Value Tending To False

const valuesTendingToFalse = {
  boolean: false,
  null: null,
  undefined: undefined,
  numberZero: 0,
  notANumber: NaN,
  stringEmpty: "",
};

for (let key of Object.values(valuesTendingToFalse)) {
  if (key) console.log("Is true");
  else console.log("Is false");
}
