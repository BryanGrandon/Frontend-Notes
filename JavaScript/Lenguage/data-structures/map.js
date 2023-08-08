// ---- ---- Map ---- ---- //

const map = new Map();

// Define the Key and its Value
map.set("key", "value");
map.set("keyDelete", 23);
map.set("element", "Admin");

let checkIfAElementExists = map.has("Element");
let getOfValueMap = map.get("key");
let sizeMap = map.size;
map.delete("keyDelete");

// Iteration

for (const key of map) {
  console.log(key);
}

map.clear();

// ---- ---- weakMap ---- ---- //

const weakMap = new WeakMap();

// Define the Value and the key has to be an object
let object = { name: "Bryan" };

weakMap.set(object, "...");
