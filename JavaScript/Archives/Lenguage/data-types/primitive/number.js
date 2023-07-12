// More Ways To Write Number

const numbers = {
  normal: 1000,
  normal_: 1_000,
  abbreviation: 1e3,
  hexadecimal: 0x3e8,
  binary: 0b1111101000,
  octal: 0o1750,
};

for (let key of Object.values(numbers)) {
  console.log(key === 1000);
}

// Imprecise calculation

let isFinity = 1e500;
let decimal = 0.1 + 0.2;

// .toFixed()

let number = (1.23456).toFixed(2);
console.log(number);

/** NaN
 *  - Not a Number
 *  - Operations with what is not a number
 */

let notANumber = "strint" / 2;
console.log(notANumber);
