array = [1, 2, 3, 4];

const deleteElement = {
  start: array.shift(),
  end: array.pop(),
};

const addElement = {
  start: array.unshift(0),
  end: array.push(5),
};

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
const every = array.every((x) => x > 3);

// Order
const order = [1, 3, 2, 4, 6, 5];
const arrOrder = order.sort((a, b) => (a > b ? 1 : -1));
const arrOrder2 = order.sort((a, b) => (a > b ? -1 : 1));

// Reverse
const reverse = array.reverse();
console.log(reverse);
