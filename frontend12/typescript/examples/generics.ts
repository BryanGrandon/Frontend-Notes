// =====================================
// 🧬 Generics - Examples
// =====================================

// Generic function
function identity<T>(value: T): T {
  return value
}

identity<string>('Hello')
identity<number>(42)
identity(true) // type inferred automatically

// -------------------------------------
// Generic with arrays
// -------------------------------------

function getFirstElement<T>(items: T[]): T {
  return items[0]
}

getFirstElement<number>([1, 2, 3])
getFirstElement<string>(['a', 'b', 'c'])

// -------------------------------------
// Generic interface
// -------------------------------------

interface ApiResponse<T> {
  data: T
  status: number
}

const userResponse: ApiResponse<string> = {
  data: 'User created',
  status: 201,
}

// -------------------------------------
// Generic class
// -------------------------------------

class MainStorage<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  getAll(): T[] {
    return this.items
  }
}

const numberStorage = new MainStorage<number>()
numberStorage.add(1)
numberStorage.add(2)

const stringStorage = new MainStorage<string>()
stringStorage.add('A')
stringStorage.add('B')

// -------------------------------------
// Key takeaway
// -------------------------------------

// ✔ Write reusable and flexible code
// ✔ Maintain type safety
// ✔ Avoid duplication
