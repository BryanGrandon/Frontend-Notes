let id_1 = Symbol("id");
let id_2 = Symbol("id");

console.log(id_1 == id_2); // false
console.log(id_1.description); // id

// "Hidden" keys

const user = {
  name: "Bryan",
};
let id = Symbol("id");
user[id] = 1;
console.log(user[id]);

// Symbol.keyFor

let sym = Symbol.for("name");
let sym2 = Symbol("id");

console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // undefined
