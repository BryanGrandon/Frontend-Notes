"use strict";

class Human {
  constructor(country, languaje) {
    this.country = country;
    this.languaje = languaje;
  }
}
const human1 = new Human("Chile", "Español");
console.log(human1);

// Inheritance

class Staff extends Human {
  constructor(country, languaje, name, age) {
    super(country, languaje); // Human constructor element
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
