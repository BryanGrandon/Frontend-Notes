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
