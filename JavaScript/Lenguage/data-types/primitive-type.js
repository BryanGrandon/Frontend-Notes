// ---- ---- Number ---- ---- //

const number = 25;

const wayOfWritingNumbers = {
  normal: 1000,
  normal_: 1_000,
  abbreviation: 1e3,
  hexadecimal: 0x3e8,
  binary: 0b1111101000,
  octal: 0o1750,
};
const nan = "Operations with what is not a number";
const isInfinity = [Infinity, 1e500];

// ---- ---- String ---- ---- //

const string = "Way of writing string";
const concatenation = "Hello" + "World";
const backtick = `String Content ${string}`;

let dynamicHtmlGeneration = `<p>Element HTML in JS</p> `;
const specialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

// ---- ---- Boolean ---- ---- //

const boolean = [true, false];
// Boolean values are also the result of comparisons
let value = 5 > 1;

// ---- ---- Null ---- ---- //

// Reference to a non-existent object
let nothing = null;
let empty = null;

// ---- ---- Undefined ---- ---- //

let unassignedValue;
let undefinedValue = undefined;

// ---- ---- Symbol ---- ---- //

const symbol = [Symbol("id"), Symbol("id")];
let isFalse = symbol[0] === symbol[1];
let description = symbol[0].description;

const symbolKeyFor = {
  sym: Symbol.for("name"),
  sym2: Symbol("id"),
};
let keyFor = Symbol.keyFor(sym);
