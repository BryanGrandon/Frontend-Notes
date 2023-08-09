"use strict";

function sayHi(phrase = undefined) {
  console.log(`${this.name}: ${phrase}`);
}
let user = { name: "Bryan" };
let admin = { name: "Admin" };

// ---- ---- Call ---- ---- //

sayHi.call(user);
sayHi.call(user, "Call");

// ---- ---- apply ---- ---- //

sayHi.apply(admin);
sayHi.apply(admin, ["Apply"]);

// ---- ---- bind ---- ---- //

let object = {
  firstName: "Bryan",
  age: 21,

  greet(phrase = "Text not entered") {
    console.log(`${phrase} "${this.firstName}"`);
  },
};

let greet = object.greet.bind(object);
greet();

function userName() {
  console.log(this.firstName);
}

let forUser = userName.bind(object);
forUser();

// Partial functions

function multiplication(a, b) {
  return a * b;
}

let double = multiplication.bind(null, 2);
console.log(double(2));
console.log(double(3));

let triple = multiplication.bind(null, 3);
console.log(triple(2));
console.log(triple(3));
