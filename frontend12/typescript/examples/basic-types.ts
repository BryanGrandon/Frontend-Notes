// -------------------------------------
// Basic Types
// -------------------------------------

// string
let username: string = 'Bryan'
console.log('Username:', username)

// number
let age: number = 25
let price: number = 19.99
console.log('Age:', age, 'Price:', price)

// boolean
let isActive: boolean = true
console.log('Is active:', isActive)

// null
let selectedItem: null = null
console.log('Selected item:', selectedItem)

// undefined
let notAssigned: undefined = undefined
console.log('Not assigned:', notAssigned)

// void (usually used in functions)
function logMessage(message: string): void {
  console.log('Message:', message)
}

logMessage('Hello TypeScript')

// -------------------------------------
// Advanced Types
// -------------------------------------

// any (disables type safety - use with caution)
let dynamicValue: any = 'Hello'
dynamicValue = 42
dynamicValue = true
console.log('Any value:', dynamicValue)

// unknown (safer alternative to any)
let userInput: unknown = 'TypeScript'

if (typeof userInput === 'string') {
  console.log('User input length:', userInput.length)
}

// arrays
let numbers: number[] = [1, 2, 3, 4, 5]
let names: Array<string> = ['Ana', 'Luis', 'Carlos']

console.log('Numbers:', numbers)
console.log('Names:', names)

// tuples (fixed length and fixed types per position)
let user: [number, string, boolean]
user = [1, 'Admin', true]

console.log('User tuple:', user)

// enums (named constants)
enum Role {
  ADMIN,
  USER,
  GUEST,
}

let currentRole: Role = Role.ADMIN
console.log('Current role:', currentRole)

// enums with custom values
enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
  LOADING = 'loading',
}

let requestStatus: Status = Status.SUCCESS
console.log('Request status:', requestStatus)

// never (functions that never return)
function throwError(message: string): never {
  throw new Error(message)
}

// Uncomment to see the behavior
// throwError("Something went wrong");

// -------------------------------------
// Combined Example
// -------------------------------------

type Product = {
  id: number
  name: string
  price: number
  available: boolean
}

const productList: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, available: true },
  { id: 2, name: 'Mouse', price: 25, available: false },
]

productList.forEach((product): void => {
  console.log(`Product: ${product.name} - $${product.price} - Available: ${product.available}`)
})
