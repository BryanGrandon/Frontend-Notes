const set = new Set();

//  Add

set.add(4);
set.add(4);
set.add(4);

// Does not support repeated values
console.log(set);

const arr = [1, 2, 3];

set.add(2);
set.add(false);
set.add(arr);

// Check if an empty element exists in the key

console.log(set.has(false));
console.log(set.has(arr));

// Delete(value)

set.delete(false);

// Set Size

console.log(set.size);

// Iteration

for (const key of set) {
  console.log(key);
}

// Clear

set.clear();

// Arrays with Set

const array = [1, 2, 3, 1, 2, 3];
console.log([...new Set(array)]);
