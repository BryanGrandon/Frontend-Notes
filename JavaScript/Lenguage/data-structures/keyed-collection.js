// -------- Map -------- //

const map = new Map();

// Define the Key and its Value
map.set("key", "value");
map.set("keyDelete", 23);
map.set("element", "Admin");

let checkIfAElementExistsMap = map.has("Element");
let getOfValueMap = map.get("key");
let sizeMap = map.size;
map.delete("keyDelete");

// Iteration

for (const key of map) {
  console.log(key);
}

map.clear();

// -------- weakMap -------- //

const weakMap = new WeakMap();

// Define the Value and the key has to be an object
let object = { name: "Bryan" };

weakMap.set(object, "...");

// -------- Set -------- //

const set = new Set();

set.add(4);
set.add(4);
set.add(4);
// Does not support repeated values

const arr = [1, 2, 3];

set.add(2);
set.add(false);
set.add(arr);

let checkIfAElementExistsSet = set.has(false);
set.delete(false);
let setSize = set.size;

// Iteration

for (const key of set) {
  console.log(key);
}

set.clear();

// -------- weakSet -------- //

const weakSet = new WeakSet();

const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };

weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);
