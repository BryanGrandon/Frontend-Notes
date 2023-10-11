/*
    A Data structure is a format to organize, manage and store data in a way that allows efficient 
    access and modification. JavaScript has primitive (built-in) and non-primitive (not built-in) 
    data structures.
*/

// -------- Array -------- //
/*
    The arrays it stores multiple values and elements in one variable.
*/

const arrayString = ["Apple", "Banana", "Orange"];
const accessArray = {
  start: arrayString[0],
  end: accessArray.at(-1),
};
arrayString[1] = "Lemon"; // Rename or Replace
let numberOfElements = arrayString.length;
const otherArray = [true, { name: "Andres" }, 32];

// Array Methods //
array = [1, 2, 3, 4];

const deleteElement = {
  start: array.shift(),
  end: array.pop(),
};
const addElement = {
  start: array.unshift(0),
  end: array.push(5),
};
const methodMap = array.map((x) => x + 10);
const filter = array.filter((x) => x > 3);

const forEach = array.forEach((e, i) => {
  console.log(`${e} index: ${i} `);
});

const some = array.some((x) => x > 3);
const every = array.every((x) => x > 3);

const order = [1, 3, 2, 4, 6, 5];
const arrOrder = order.sort((a, b) => (a > b ? 1 : -1));
const arrOrder2 = order.sort((a, b) => (a > b ? -1 : 1));

const reverse = array.reverse();

// -------- Keyed Collection -------- //
/*
    Keyed collections are data collections that are ordered by key not index. They are associative 
    in nature. Map and set objects are keyed collections and are iterable in the order of insertion.

    - Map:	Maps are used to store a collection of elements defined by a key and value.
    - Set:	Sets allow us to store collections of information, specifically values that will not be repeated.
*/

// Map //
const map = new Map();

// Define the Key and its Value
map.set("key", "value");

const methodsMapOrSet = {
  checkIfAElementExistsMap: map.has("key"),
  size: map.size,
  delete: map.delete("key"),
  clear: map.clear(),
};

let getOfValueMap = map.get("key");

// weakMap //
const weakMap = new WeakMap();
// Define the Value and the key has to be an object
let object = { name: "Bryan" };
weakMap.set(object, "...");

// Set //
const set = new Set();

const arr = [1, 2, 3];
set.add(2);
// Does not support repeated values
set.add(2);
set.add(arr);

// weakSet //
const weakSet = new WeakSet();

const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };
weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);

// -------- JavaScript Object Notion -------- //
/*
    JSON is a lightweight data interchange format. JSON is easy for users to read and write. 
    JSON is easy to parse and generate by machines.
*/

/** JSON supports the following data types:
 *  Objects { ... }
 *  Arrays [ ... ]
 *  Primitives:
 *    strings,
 *    numbers,
 *    boolean values true/false,
 *    null.
 */

const student = {
  name: "Bryan",
  age: 21,
  isAdmin: false,
  courses: ["html", "css", "js"],
  something: undefined,
};

// JSON.stringify(value, replacer, space)
let json = JSON.stringify(student, null, 2);
console.log(json);
