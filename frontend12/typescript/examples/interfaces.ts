// =====================================
// 📐 Interfaces - Examples
// =====================================

// Basic interface
interface Client {
  name: string
  address: string
}

// Object that follows the interface contract
const client1: Client = {
  name: 'Bryan',
  address: 'Av. 123',
}

console.log(client1)

// -------------------------------------
// Optional properties
// -------------------------------------

interface ClientWithContact {
  name: string
  address: string
  email?: string // optional
  phone?: string // optional
}

const client2: ClientWithContact = {
  name: 'Ana',
  address: 'North Street 456',
}

console.log(client2)

// -------------------------------------
// Readonly properties
// -------------------------------------

interface ClientReadonly {
  readonly id: number
  name: string
}

const client3: ClientReadonly = {
  id: 1,
  name: 'Carlos',
}

// client3.id = 2; ❌ Error: Cannot assign to 'id' because it is read-only

// -------------------------------------
// Interfaces with methods
// -------------------------------------

interface ClientService {
  getClientInfo(): string
}

const clientService: ClientService = {
  getClientInfo() {
    return 'Client information retrieved'
  },
}

console.log(clientService.getClientInfo())

// -------------------------------------
// Interface extension
// -------------------------------------

interface Person {
  name: string
}

interface PremiumClient extends Person {
  membershipLevel: 'gold' | 'silver' | 'bronze'
}

const premiumClient: PremiumClient = {
  name: 'Lucia',
  membershipLevel: 'gold',
}

console.log(premiumClient)

// -------------------------------------
// Key takeaway
// -------------------------------------

// Interfaces:
// ✔ Define object structure
// ✔ Improve consistency and type safety
// ✔ Can be extended
// ✔ Are ideal for public APIs and large codebases
