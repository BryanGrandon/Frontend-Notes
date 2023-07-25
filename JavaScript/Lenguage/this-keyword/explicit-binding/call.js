"use strict";

function sayHi(phrase = undefined) {
  console.log(`${this.name}: ${phrase}`);
}
let user = { name: "Bryan" };
let admin = { name: "Admin" };

sayHi.call(user);
sayHi.call(user, "Hello");
