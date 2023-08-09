"use strict";

// ---- ---- Function ---- ---- //

// ( this ) in JavaScript is a keyword that refers to the object form which a function is called and is context sensitive

function isAFunction() {
  console.log(this);
}
isAFunction();

// ---- ---- Anonymous Function ---- ---- //

this.name = "Global";

const object = {
  name: "obj",

  print: function () {
    console.log(this.name);
  },
};
object.print();

// ---- ---- Arrow Function ---- ---- // ( Not occupy )

const objArrow = {
  name: "obj arrow",

  print: () => {
    console.log(this.name);
  },
};
objArrow.print();

// ---- ---- Methods ---- ---- //

const user = {
  name: "Andres",
  age: 34,

  sayHi() {
    console.log(this.name);
    console.log(user.name);
  },
};
user.sayHi();

let admin = user;
user = null;

admin.sayHi();
