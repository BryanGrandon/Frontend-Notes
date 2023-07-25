"use strict";
/* ( this ) in JavaScript is a keyword that refers to the object 
  form which a function is called and is context sensitive */

function isAFunction() {
  console.log(this); // undefined
}

isAFunction();

// anonymous function

this.name = "Global";

const obj = {
  name: "obj",

  print: function () {
    console.log(this.name);
  },
};
obj.print();
