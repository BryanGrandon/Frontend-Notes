class Person_1 {
  public zone = "Quinta Normal";
  protected city = "Santiago";
  private country = "Chile";

  constructor() {}

  greet(): void {
    console.log(`Hello`);
  }
}

class Employee_1 extends Person_1 {
  constructor(
    private readonly id: number,
    private name: string,
    private dept: string
  ) {
    super();
    this.showInfo();
  }

  private showInfo(): void {
    console.log(`${this.name} ${this.zone} ${this.city}`);
  }
}

const emp = new Employee_1(24, "Bryan", "sales");
