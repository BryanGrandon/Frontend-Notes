// Basic class
class User {
  // public is the default
  public name: string

  // readonly property
  readonly id: number

  // private property
  private password: string

  constructor(id: number, name: string, password: string) {
    this.id = id
    this.name = name
    this.password = password
  }

  // public method
  greet(): string {
    return `Hello, ${this.name}`
  }
}

const user = new User(1, 'Bryan', '1234')
console.log(user.greet())
// user.password ❌ Error: private property
// user.id = 2 ❌ Error: readonly property

// -------------------------------------
// Inheritance and protected
// -------------------------------------

class Admin extends User {
  constructor(id: number, name: string, password: string) {
    super(id, name, password)
  }

  // protected members are accessible in child classes
  getRole(): string {
    return 'Admin'
  }
}

const admin = new Admin(2, 'Ana', 'admin123')
console.log(admin.getRole())

// -------------------------------------
// Key takeaway
// -------------------------------------

// ✔ Classes define structure and behavior
// ✔ Access modifiers control visibility
// ✔ Support object-oriented programming
