// In TypeScript, a class is a blueprint for creating objects with specific properties and methods.

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

const myCar = new Car("nissan", "GTR", 2020);
myCar.drive();
