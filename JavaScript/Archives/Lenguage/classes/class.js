"use strict";

class MyClass {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
}

// Example

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Use:

let user = new User("Bryan");
user.sayHi();

// Class Expression

let User_2 = class {
  sayHi() {
    console.log("Hello");
  }
};

new User_2().sayHi();

console.log(User_2);
