const objectLiteral = [];

const array = ["Apple", { name: "Bryan" }, true];

// Array Access

console.log(array[1].name); // Bryan
console.log(array.at(-1)); // true

// Rename or replace

array[0] = "Lemon";
console.log(array[0]); // Lemon

// Elements Number

console.log(array.length); // 3

// Methods

array = [1, 2, 3, 4];

// Delete
array.shift(); // start
array.pop(); // end

// Add
array.unshift(0); // start
array.push(5); // end

// Map
const map = array.map((x) => x + 10);
console.log(map);

// Filter
const filter = array.filter((x) => x > 3);
console.log(filter);

// forEach
const forEach = array.forEach((e, i) => {
  console.log(`${e} index: ${i} `);
});

// Some / Every
const some = array.some((x) => x > 3);
console.log(some); // true

const every = array.every((x) => x > 3);
console.log(every); // false

// Order
const order = [1, 3, 2, 4, 6, 5];
const arrOrder = order.sort((a, b) => (a > b ? 1 : -1));
console.log(arrOrder);
const arrOrder2 = order.sort((a, b) => (a > b ? -1 : 1));
console.log(arrOrder2);

// Reverse
const reverse = array.reverse();
console.log(reverse);
