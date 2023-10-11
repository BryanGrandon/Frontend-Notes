"use strict";
/*
    Classes are a template for creating objects. They encapsulate data with code to work on that data.
*/

class MyClass {
  constructor() {}
  method1() {}
  method2() {}
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

// -------- Getter Setter -------- //
/**
 * get () {}
 *   Getter, the code executed to get obj.propName
 *
 * set (value) {}
 *   Setter, the code executed to set obj.propName = value
 */

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
let user2 = new User("Bryan");
console.log(user2.name);
console.log(user2);

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
userObj.fullName = "Brays Moure";
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

// -------- Inheritance -------- //
class Human {
  constructor(country, language) {
    this.country = country;
    this.language = language;
  }
}
const human1 = new Human("Chile", "Español");
console.log(human1);

// Inheritance
class Staff extends Human {
  constructor(country, language, name, age) {
    super(country, language); // Human constructor element
    this.name = name;
    this.age = age;
  }
}
const human2 = new Staff("Chile", "Español", "Bryan", 21);
console.log(human2);

// Instanceof
console.log(human1 instanceof Human);
console.log(human1 instanceof Staff);

console.log(human2 instanceof Human);
console.log(human2 instanceof Staff);

/** Additional //
 * Protected properties are usually prefixed with the underscore _.
 * Privates should start with #. They are only accessible from inside the class.
 */

// inside (static)
class User_1 {
  static staticMethod() {
    console.log(this === User_1);
  }
}
User_1.staticMethod();

// outside (function)
class User_3 {}
User_3.staticMethod = function () {
  console.log(this === User_2);
};
User_3.staticMethod();

// Example
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
const articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2119, 11, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title);
