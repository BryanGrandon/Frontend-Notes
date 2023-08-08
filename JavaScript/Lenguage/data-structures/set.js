// ---- ---- Set ---- ---- //

const set = new Set();

set.add(4);
set.add(4);
set.add(4);
// Does not support repeated values

const arr = [1, 2, 3];

set.add(2);
set.add(false);
set.add(arr);

let checkIfAElementExists = set.has(false);
set.delete(false);
let setSize = set.size;

// Iteration

for (const key of set) {
  console.log(key);
}

set.clear();

// ---- ---- weakSet ---- ---- //

const weakSet = new WeakSet();

const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };

weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);
