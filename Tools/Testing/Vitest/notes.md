# 🧪 Vitest

Vitest is a fast and modern testing framework designed for frontend projects.
It is optimized for Vite, but it can also be used in projects without Vite.

## 📑 Table of Contents

- [Installation](#-installation)
- [Core Methods in Vitest](#-core-methods-in-vitest)
- [Test Structure](#-test-structure)
- [Assertions](#-assertions)
- [Mocks & control](#mocks--control)
- [Lifecycle Hooks](#️-lifecycle-hooks)
- [Parameterized Tests](#-parameterized-tests)

---

## 📦 Installation

```bash
npm install -D vitest
```

If you use Testing Library (React, Vue, etc.):

```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

---

## 🧩 Core Methods in Vitest

Vitest provides a simple and expressive API for writing tests.
These are the most important methods you will use on a daily basis.

---

## 🧠 Test Structure

### `describe()` — Context

Groups related tests under a shared context.

```TS
describe('sum function', () => {
  // related tests
})
```

Use nested describe() blocks to represent scenarios:

```TS
describe('auth service', () => {
  describe('login', () => {
    // login tests
  })
})
```

---

### `it()` / `test()` — Behavior

Defines a single test case that verifies behavior.

```TS
it('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5)
})
```

> [!TIP]
> Name your describe() blocks using what is being tested, not how it is implemented.

---

## 🔍 Assertions

`expect()`

Used to assert values and outcomes.

```TS
expect(result).toBe(10)
```

| Matcher        | Description            |
| -------------- | ---------------------- |
| `toBe()`       | Strict equality        |
| `toEqual()`    | Deep object comparison |
| `toBeTruthy()` | Truthy value           |
| `toBeFalsy()`  | Falsy value            |
| `toContain()`  | Contains a value       |
| `toThrow()`    | Throws an error        |

```TS
expect(user).toEqual({ name: 'John' })
```

---

`expect().toThrow()`

Asserts that a function throws an error.

```TS
expect(() => throwError()).toThrow()
```

Specific checks:

```TS
expect(() => throwError()).toThrow('Invalid input')
expect(() => throwError()).toThrow(Error)
```

> [!TIP]
> Always wrap the function call inside another function. \ Calling it directly would throw the error before the assertion runs.

---

## Mocks & control

`vi.fn()` — Mock functions

Creates a mock function to track calls and arguments.

const callback = vi.fn()
expect(callback).toHaveBeenCalled()

Used for:

- Callbacks
- Event handlers
- External dependencies

> [!TIP]
> Use `vi.fn()` when you care about how a function is used, not what it actually does.

---

`vi.spyOn()` — Spies

Observes a real function without changing its behavior.

```TS
const spy = vi.spyOn(console, 'log')
```

Used for:

- Logs
- Analytics
- Side effects

---

`vi.mock()` — Module mocking

Mocks an entire module to isolate dependencies.

```TS
vi.mock('./api', () => ({
  fetchUser: () => ({ name: 'Mocked User' }),
}))
```

Used for:

- API services
- External libraries
- Side-effect-heavy modules

---

`vi.restoreAllMocks()`

Restores all mocks and spies after each test.

```TS
afterEach(() => {
  vi.restoreAllMocks()
})
```

✔️ Prevents test leakage
✔️ Keeps tests isolated

---

## ⏱️ Lifecycle Hooks

`beforeEach()`

Runs setup logic before each test.

```TS
beforeEach(() => {
  // setup
})
```

Used for:

- Initializing mocks
- Preparing test data

---

`afterEach()`

Cleans up after each test.

```TS
afterEach(() => {
  // cleanup
})
```

Commonly used with vi.restoreAllMocks().

---

## 🔁 Parameterized Tests

`it.each()`

Runs the same test with multiple datasets.

```TS
it.each([
  [1, 2, 3],
  [2, 3, 5],
])('sum(%i, %i)', (a, b, result) => {
  expect(sum(a, b)).toBe(result)
})
```

✔️ Less duplication
✔️ Clear scenario coverage

---

[🡨 Back](../notes.md#-common-testing-tools)
