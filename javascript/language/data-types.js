// Data type refers to the type of data that a JavaScript variable can hold.

// -------- Primitive Type -------- //
/*
  In JavaScript, a primitive value is a data that is not an object and has no methods or properties. 
  There are 7 primitive data types
*/

// String //
const string = "Way of writing string";
const concatenation = "Hello" + "World";
const backtick = `String Content ${string}`;
let dynamicHtmlGeneration = `<p>Element HTML in JS</p> `;
const specialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

// Number //
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

// BigInt //
const bigint = 14n;
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);

// Boolean // Boolean values are also the result of comparisons
const boolean = [true, false];
let value = 5 > 1;

// Null // Reference to a non-existent object
let nothing = null;
let empty = null;

// Undefined //
let unassignedValue;
let undefinedValue = undefined;

// Symbol //
const symbol = [Symbol("id"), Symbol("id")];
let isFalse = symbol[0] === symbol[1];
let description = symbol[0].description;
const symbolKeyFor = {
  sym: Symbol.for("name"),
  sym2: Symbol("id"),
};
let keyFor = Symbol.keyFor(sym);

// -------- Object -------- //
/*
    JavaScript object is a data structure that allows us to have key-value pairs; so we can have 
    distinct keys and each key is mapped to a value that can be of any JavaScript data type.
*/

const object = {
  key: "value",
  keyDelete: "value",
};
const objectMethod = {
  access: object.key,
  add: (object.key = "value"),
  delete: delete object.keyDelete,
  existingProperty: "key" in object,
};
const forObject = {
  keys: Object.Keys(object),
  values: Object.values(object),
  entries: Object.entries(object),
};

// Assign //
const cloneObject = Object.assign({}, object);

// Object.defineProperty() //
Object.defineProperty(object, "key", {
  writable: false, // Not rename value
  enumerable: false, // Not iterable
  configurable: false, // Not delete
});
Object.defineProperties(object, {
  key: { value: "Value", writable: true },
});

// Clone object and properties
let cloneObjectAndProperties = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(object)
);

// -------- Built in Objects -------- //
/*
    Built-in objects, or “global objects”, are those built into the language specification itself.
*/

// Console Object //
const consoleObject = [
  ".log",
  ".info",
  ".warn",
  ".error",
  ".clear",
  ".table",
  ".count",
  ".countReset",
  ".group",
  ".groupEnd",
  ".time",
  ".timeLog",
  ".timeEnd",
];

// Date Object //
let now = new Date();
let date = new Date(2000, 11, 19);
const componentsOfDate = {
  year: now.getFullYear(),
  month: now.getMonth(),
  day: { month: now.getDate(), week: now.getDay() },
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
  milliseconds: now.getMilliseconds(),
};

// Date string
now.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'
now.toDateString(); // 'Thu Mar 09 2023'
now.toLocaleString(); // '9/3/2023, 11:42:32'
now.toLocaleDateString(); // '9/3/2023'
now.toLocaleTimeString(); // '11:44:35'

// Math Object //
const methods = {
  floor: Math.floor(3.6),
  ceil: Math.ceil(3.1),
  round: Math.round(3.5),
  trunc: Math.trunc(3.5),
  squareRoot: Math.sqrt(25),
  cubeRoot: Math.cbrt(27),
  maxNumber: Math.max(3, 4, 5, 6),
  minNumber: Math.min(-2, 4, 2, 1),
  randomNumber: Math.random() * 10,
};
const properties = {
  PI: Math.PI,
  SQUARE_ROOT1_2: Math.SQRT1_2,
  SQUARE_ROOT2: Math.SQRT2,
  EULER: Math.E,
  NATURAL_LOGARITHM2: Math.LN2,
  NATURAL_LOGARITHM10: Math.LN10,
  THE_BASE_2_LOGARITHM_EULER: Math.LOG2E,
  THE_BASE_10_LOGARITHM_EULER: Math.LOG10E,
};

// ---- String Methods ---- //
const accessing = {
  start: string[0],
  end: string.at(-1),
};
console.log(accessing);

const search = {
  exists: string.indexOf("Hello"), // not Exists = -1
  includes: string.includes("lo W"),
  startsWith: string.startsWith("Hel"),
  endsWith: string.endsWith("ld"),
};
console.log(search);

const change = (text) => {
  const lowerCase = text.toLowerCase();
  const upperCase = text.toUpperCase();
  let changeText = `toLowerCase:[${lowerCase}], toUpperCase:[${upperCase}]`;
  console.log(changeText);
};
change("TeXt");
