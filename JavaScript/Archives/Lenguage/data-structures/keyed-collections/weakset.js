const weakSet = new WeakSet();

const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };
const obj_3 = { name: "obj 3" };

// Add only objects

weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);

// Check if an empty element exists in the key

console.log(weakSet.has(obj_1)); // true
console.log(weakSet.has(obj_3)); // false

console.log(weakSet);
