"use strict";
// Array
const array = ["element 1", "element 2"];
let [element_1, element_2] = array;
console.log(element_1, element_2);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);

// ...
let [name1, name2, ...others] = ["Bryan", "Andres", "Camila", "Sofia"];
console.log(others);

// Object
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;
console.log(title);

for (let [key, value] of Object.entries(options)) {
  console.log(`${key}: ${value}`);
}
