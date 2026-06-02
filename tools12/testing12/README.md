# 🧪 Testing

Testing is a fundamental practice in software development that ensures code works correctly and meets expected requirements. It helps catch bugs early, improve code quality, and make applications easier to maintain over time.

## 📑 Table of Contents

- [Why is testing important?](#-why-is-testing-important)
- [Types of testing](#-types-of-testing)
- [Common testing tools](#-common-testing-tools)
- [Key concepts](#-key-concepts)
- [Recommended project structure](#-recommended-project-structure)
- [Best practices](#-best-practices)
- [Common mistakes](#-common-mistakes)
- [Testing in Frontend Applications](#-testing-in-frontend-applications)

---

## 🎯 Why is testing important?

- 🛡️ Reduces bugs in production
- 🔄 Enables safe refactoring
- 📈 Improves code reliability and quality
- 🤝 Makes team collaboration easier
- 🧠 Documents application behavior

---

## 🧩 Types of testing

### Unit Testing

Tests individual functions or modules in isolation.

📌 Example: utility function

```TS
// formatPrice.ts
export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`
}
```

```TS
// formatPrice.test.ts
import { describe, it, expect } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('formats number as currency', () => {
    expect(formatPrice(10)).toBe('$10.00')
  })
})
```

> [!NOTE]
> Unit Testing focuses on isolated logic. These tests should not depend on UI, APIs, or external services, making them fast and reliable.

---

### Integration Testing

Verifies that multiple modules work correctly together.

📌 Example: API service + data handler

```TS
// userService.ts
export async function getUser() {
return { id: 1, name: 'John' }
}
```

```TS
// userProfile.ts
import { getUser } from './userService'

export async function getUserName() {
  const user = await getUser()
  return user.name
}
```

```TS
// userProfile.test.ts
import { describe, it, expect } from 'vitest'
import { getUserName } from './userProfile'

describe('User integration', () => {
  it('returns the user name from the service', async () => {
    const name = await getUserName()
    expect(name).toBe('John')
  })
})
```

> [!NOTE]
> Integration Testing validates how multiple modules work together. It ensures data flows correctly between services, utilities, or components

---

### End-to-End (E2E) Testing

Simulates real user behavior across the entire application.

- Cypress
- Playwright

> [!NOTE]
> End-to-End (E2E) Testing simulates real user behavior across the entire application. These tests provide high confidence but are slower to run.

---

## 🧪 Common testing tools

| Tool                    | Main use                       |
| ----------------------- | ------------------------------ |
| **[Vitest](./vitest/)** | Unit & Integration testing     |
| **Jest**                | General JavaScript testing     |
| **Cypress**             | Frontend E2E testing           |
| **Playwright**          | Cross-browser E2E testing      |
| **Testing Library**     | User-focused component testing |

---

## 🧠 Key concepts

- ✅ Test Case
  - A scenario that validates a specific behavior.

- 🧪 Test Suite
  - A group of related tests.

- 🔁 Mock
  - A simulated dependency used to isolate logic.

- 📊 Coverage
  - The percentage of code executed by tests.

---

## 📂 Recommended project structure

```text
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
├── utils/
│   └── formatDate.test.ts
└── tests/
    └── setup.ts
```

---

## 🧠 Best practices

- 🎯 Test behavior, not implementation
- ✨ Keep tests simple and readable
- 🧪 One test should fail for one reason only
- 🚫 Avoid complex logic inside tests
- 📝 Use clear and descriptive test names

---

## ❌ Common mistakes

- Testing everything without purpose
- Writing fragile, DOM-dependent tests
- Forgetting to update tests after refactoring
- Relying on real APIs or real data

---

## 🚀 Testing in Frontend Applications

- Frontend testing usually focuses on:
- User interactions
- Component rendering
- State and side effects
- Business logic

---

[🡨 Back](/README.md)
