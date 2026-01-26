// Type alias for a primitive type
type UserID = number

let id: UserID = 101
let anotherId: number = id // ✔️ Compatible (same underlying type)

// -------------------------------------
// Object type alias
// -------------------------------------

type Programmer = {
  name: string
  technologies: string[]
  experienceYears?: number // optional property
}

const dev1: Programmer = {
  name: 'Bryan',
  technologies: ['TypeScript', 'JavaScript', 'Node.js'],
  experienceYears: 3,
}

const dev2: Programmer = {
  name: 'Ana',
  technologies: ['Python', 'Django'],
}

console.log(dev1, dev2)

// -------------------------------------
// Union types with aliases
// -------------------------------------

type status = 'success' | 'error' | 'loading'

let operationStatus: status = 'success'
// operationStatus = "pending"; // ❌ Error: not assignable

// -------------------------------------
// Alias with arrays
// -------------------------------------

type TechStack = string[]

const stack: TechStack = ['React', 'TypeScript', 'PostgreSQL']

// -------------------------------------
// Alias with functions
// -------------------------------------

type Logger = (message: string) => void

const log: Logger = (message) => {
  console.log('[LOG]:', message)
}

log('Type aliases improve readability')

// -------------------------------------
// Key takeaway
// -------------------------------------

// Programmer is NOT a new type,
// it is just a readable name for an object shape.
// TypeScript uses structural typing, so this is valid:

const anotherDev = {
  name: 'Carlos',
  technologies: ['Go', 'Docker'],
}

const assignDev: Programmer = anotherDev // ✔️ Same structure
