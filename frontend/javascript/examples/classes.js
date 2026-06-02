'use strict'

/* =====================================
   BASIC CLASS
===================================== */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hello, my name is ${this.name}`
  }
}

const user = new Person('Alex', 25)
console.log(user.greet())

/* =====================================
   INHERITANCE
===================================== */

class Student extends Person {
  constructor(name, age, course) {
    super(name, age)
    this.course = course
  }

  study() {
    return `${this.name} is studying ${this.course}`
  }
}

const student = new Student('Maria', 20, 'JavaScript')
console.log(student.study())

/* =====================================
   ADDITIONAL FEATURES
   - Static method
===================================== */

class MathUtils {
  static sum(a, b) {
    return a + b
  }
}

console.log(MathUtils.sum(5, 3))

/* =====================================
   GETTER & SETTER
===================================== */

class Product {
  constructor(name, price) {
    this._price = price
    this.name = name
  }

  get price() {
    return `$${this._price}`
  }

  set price(value) {
    if (value < 0) {
      console.error('Price cannot be negative')
      return
    }
    this._price = value
  }
}

const phone = new Product('Phone', 500)
phone.price = 600
console.log(phone.price)

/* =====================================
   PROTOTYPES (CLASS UNDER THE HOOD)
===================================== */

class Animal {
  speak() {
    return 'Animal sound'
  }
}

// Adding a method via prototype
Animal.prototype.walk = function () {
  return 'Animal is walking'
}

const dog = new Animal()
console.log(dog.speak())
console.log(dog.walk())

/* =====================================
   PROTOTYPE CHAIN
===================================== */

console.log(dog.__proto__ === Animal.prototype) // true
console.log(Animal.prototype.__proto__ === Object.prototype) // true

/* =====================================
   CLASS VS PROTOTYPE FUNCTION
===================================== */

// Constructor function
function Car(brand) {
  this.brand = brand
}

Car.prototype.drive = function () {
  return `${this.brand} is driving`
}

const car = new Car('Tesla')
console.log(car.drive())
