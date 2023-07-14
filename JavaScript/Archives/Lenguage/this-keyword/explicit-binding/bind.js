"use strict";

let user = {
  firstName: "Bryan",
  age: 21,

  greet(phrase = "Text not entered") {
    console.log(`${phrase} "${this.firstName}"`);
  },
};

let greet = user.greet.bind(user);
greet();

function userName() {
  console.log(this.firstName); // Bryan
}

let forUser = userName.bind(user);
forUser();

// Parcial functions

function multiplication(a, b) {
  return a * b;
}

let double = multiplication.bind(null, 2);
console.log(double(2)); // 4
console.log(double(3)); // 6

let triple = multiplication.bind(null, 3);
console.log(triple(2)); // 6
console.log(triple(3)); // 9
