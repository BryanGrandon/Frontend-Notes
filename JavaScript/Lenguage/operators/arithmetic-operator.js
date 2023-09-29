const math = {
  addition: " + ",
  subtraction: " - ",
  multiplication: " * ",
  division: " / ",
  exponentiation: " ** ",
};

// Modulus

function modulus(n1, n2) {
  return `( ${n1} % ${n2} = ${n1 % n2} )`;
}
console.log(modulus(6, 2)); // 1

// Increment

let increase = 0;
console.log(increase++); // 0
console.log(++increase); // 2

// Decrement

let decrease = 0;
console.log(decrease--); // 0
console.log(--decrease); // -2
