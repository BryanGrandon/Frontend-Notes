"use strict";

let user = {
  name: "Bryan",
  age: 21,

  sayHi() {
    console.log(this.name);
  },

  sayHi2() {
    console.log(user.name);
  },
};

user.sayHi();

user.sayHi2();

let admin = user;
user = null;

admin.sayHi();
admin.sayHi2();
