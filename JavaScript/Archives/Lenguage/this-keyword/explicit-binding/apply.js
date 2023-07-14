"use strict";

function sayHi(phrase = undefined) {
  console.log(`${this.name}: ${phrase}`);
}
let user = { name: "Bryan" };
let admin = { name: "Admin" };

sayHi.apply(admin);
sayHi.apply(admin, ["Hello"]);
