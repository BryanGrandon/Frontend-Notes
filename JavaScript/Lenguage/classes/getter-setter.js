"use strict";
/**
 * get () {}
 *   Getter, the code executed to get obj.propName
 *
 * set (value) {}
 *   Setter, the code executed to set obj.propName = value
 */

// Class

class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("The name is short");
      return;
    }
    this._name = value;
  }
}
let user = new User("Bryan");
console.log(user.name);
console.log(user);

// Object

const userObj = {
  name: "Bryan",
  lastName: "Grandon",

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },

  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  },
};
console.log(userObj.fullName);
userObj.fullName = "Andres Correa";
console.log(userObj.name, userObj.lastName);

// DefineProperty

const userObj2 = {
  name: "Bryan",
  lastName: "Grandon",
};

Object.defineProperty(userObj2, "fullName", {
  get() {
    return `${this.name} ${this.lastName}`;
  },
  set(value) {
    [this.name, this.lastName] = value.split(" ");
  },
});

console.log(userObj2.fullName);
userObj2.fullName = "Alice Cooper";
console.log(userObj2.name, userObj2.lastName);
