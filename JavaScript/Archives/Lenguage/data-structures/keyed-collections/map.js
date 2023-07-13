const map = new Map();

// Define the Key and its Value

map.set("key", "value");
map.set(0, "Admin");
map.set(false, 15);

// Check if an empty element exists in the key

console.log(map.has("key"));
console.log(map.has(false));

// Get of value

console.log(map.get("key"));
console.log(map.get(0));

// Delete(key)

map.delete(false);

// Map Size

console.log(map.size);

// Iteration

for (const key of map) {
  console.log(key);
}

// Map Clear

map.clear();
console.log(map);
