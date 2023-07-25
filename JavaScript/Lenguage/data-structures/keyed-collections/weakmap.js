const weakMap = new WeakMap();

// Define the Value and the key has to be an object

let object = { name: "Bryan" };
weakMap.set(object, "...");

// Get of value

console.log(weakMap.get(object));

// Delete

weakMap.delete(object);

// Check if an empty element exists in the key

console.log(weakMap.has(object));
