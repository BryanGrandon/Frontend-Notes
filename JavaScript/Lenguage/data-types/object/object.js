let createObject = {};

// Add ( object.key = value )

createObject.user = "Bryan";
createObject.isAdmin = true;
let age = 21;
createObject.age = age;

// Access to ( object.key )

console.log(createObject.user);
console.log(createObject);

// update value ( object.key = newValue )

createObject.age = 25;

// Delete ( delete object.key )

delete createObject.isAdmin;

// Existing property

let existingProperty = "user" in createObject;

// Copy the reference

const reference = createObject;
reference.name = "Andres";
console.log(createObject.name);

/** FOR
 *  - Object.Keys()
 *  - Object.Values()
 *  - Object.Entries()
 */

for (let key of Object.keys(reference)) {
  console.log(key);
}
for (let value of Object.values(reference)) {
  console.log(value);
}
for (let entries of Object.entries(reference)) {
  console.log(entries);
}
