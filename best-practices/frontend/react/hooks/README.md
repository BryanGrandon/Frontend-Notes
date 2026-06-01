# 🪝Hooks best practices

Hooks are one of the most powerful features in React.\
Using them correctly improves readability, reusability, performance, and maintainability.

---

## 📑 Table of Contents

- [Custom Hooks](#-custom-hooks)
- [Hook Naming Conventions](#️-hook-naming-conventions)
- [Rules of Hooks](#-rules-of-hooks)
- [Single Responsibility Hooks](#-single-responsibility-hooks)
- [State Separation](#-state-separation)
- [Hook Composition](#-hook-composition)
- [Avoid Unnecessary Effects](#-avoid-unnecessary-effects)
- [useEffect Best Practices](#-useeffect-best-practices)
- [Dependency Management](#-dependency-management)
- [useMemo & useCallback](#-usememo--usecallback)
- [Testing Hooks](#-testing-hooks)
- [General Recommendations](#-general-recommendations)

---

## 🧩 Custom Hooks

Custom Hooks allow you to extract and reuse stateful logic across multiple components.

### Why use them?

- ♻️ Reuse logic without duplicating code
- 🛠️ Encapsulate complex behavior
- 🏗️ Compose multiple hooks into a single API
- 🧠 Simplify component code
- 📦 Improve maintainability and testing

---

### Example

```tsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)

  return { count, increment, decrement }
}
const { count, increment } = useCounter()
```

**Usage**

```tsx
const { count, increment, decrement } = useCounter()
```

---

### Good Use Cases

- Authentication logic
- API requests
- Form handling
- Local storage synchronization
- Window events and listeners
- Pagination and filtering

---

## 🏷️ Hook Naming Conventions

Clear and consistent naming makes hooks easier to understand, discover, and maintain.

### Rules

- `use` prefix
- Descriptive naming
- Naming by behavior
- Consistency across the project

---

### Recommended ✅

Follow consistent naming conventions so that hooks are easy to understand, locate, and maintain.

- useTheme()
- useAuth()
- useLocalStorage()
- useWindowSize()

---

### Not Recommended ❌

Avoid ambiguous or inconsistent names that make hook behavior confusing and harder to maintain.

- theme()
- authHook()
- storageManager()

---

## 📜 Rules of Hooks

The fundamental rules that ensure hooks work correctly and predictably in React.

### Rules

- Call hooks at the top level
- Never call hooks conditionally
- Only call hooks from React functions
- Use the React Hooks ESLint plugin

---

### Recommended ✅

Hooks are always called in the same order.

```tsx
function Profile() {
  const [user, setUser] = useState(null)

  return <div>{user?.name}</div>
}
```

---

### Not Recommended ❌

Calling hooks conditionally can break React's hook order.

```tsx
function Profile({ isLogged }) {
  if (isLogged) {
    const [user, setUser] = useState(null)
  }

  return null
}
```

---

## 🎯 Single Responsibility Hooks

Hooks should focus on one responsibility and do one thing well.

### Key Concepts

- Single Responsibility Principle (SRP)
- Small focused hooks
- Separation of concerns
- Avoiding giant hooks

---

### Recommended ✅

Keep hooks small and focused.

```tsx
function useTheme() {
  // theme logic
}

function useUser() {
  // user logic
}
```

---

### Not Recommended ❌

Avoid hooks that handle multiple unrelated responsibilities.

```tsx
function useAppManager() {
  // auth
  // theme
  // notifications
  // settings
  // analytics
}
```

---

## 🧠 State Separation

Keep state organized by separating unrelated concerns.

### Key Concepts

- Local vs global state
- Splitting unrelated state
- Derived state
- State organization

---

### Recommended ✅

Separate independent pieces of state.

```tsx
const [user, setUser] = useState(null)
const [theme, setTheme] = useState('light')
const [loading, setLoading] = useState(false)
```

---

### Not Recommended ❌

Grouping unrelated state into a single object.

```tsx
const [state, setState] = useState({
  user: null,
  theme: 'light',
  loading: false,
})
```

When the pieces of state are unrelated.

---

## 🧱 Hook Composition

Combine small hooks to create reusable and scalable abstractions.

### Key Concepts

- Better reusability
- Cleaner components
- Separation of concerns
- Easier maintenance

### Recommended ✅

Build larger abstractions from smaller hooks.

```tsx
function useUserProfile() {
  const user = useUser()
  const settings = useSettings()

  return { user, settings }
}
```

### Not Recommended ❌

Duplicating logic instead of composing existing hooks.

```tsx
function useUserProfile() {
  // user logic
  // settings logic
  // preferences logic
  // duplicated code
}
```

---

## 🚫 Avoid Unnecessary Effects

Use effects only for synchronizing with external systems.

### Key Concepts

- Simpler components
- Less state to manage
- Fewer re-renders
- Easier maintenance

---

### Not Recommended ❌

Using effects for derived values.

```tsx
const [fullName, setFullName] = useState('')

useEffect(() => {
  setFullName(`${firstName} ${lastName}`)
}, [firstName, lastName])
```

### Recommended ✅

Compute derived values directly during render.

```tsx
const fullName = `${firstName} ${lastName}`
```

Derived values usually don't need state or effects.

---

## ⚡ useEffect Best Practices

Write effects that are predictable, focused, and easy to maintain.

### Key Concepts

- Dependency arrays
- Cleanup functions
- Async effects
- Effect separation

---

### Cleanup

Clean up subscriptions, timers, and listeners.

```tsx
useEffect(() => {
  const id = setInterval(fetchData, 1000)

  return () => clearInterval(id)
}, [])
```

---

### Separate Effects

Use one effect per responsibility.

```tsx
useEffect(() => {
  document.title = title
}, [title])

useEffect(() => {
  fetchUser(userId)
}, [userId])
```

---

## 🔗 Dependency Management

Manage dependencies correctly to keep hooks predictable and up to date.

### Key Concepts

- Include all required dependencies
- Use stable references when needed
- Avoid stale closures
- Follow the exhaustive-deps rule

---

### Missing Dependency ❌

Effects should include every value they use.

```tsx
useEffect(() => {
  fetchUser(userId)
}, [])
```

---

### Recommended ✅

```tsx
useEffect(() => {
  fetchUser(userId)
}, [userId])
```

---

### Stable Callback

Use `useCallback` when a stable function reference is needed.

```tsx
const handleClick = useCallback(() => {
  saveUser(user)
}, [user])
```

---

## 🚀 useMemo & useCallback

Use memoization only when it provides a measurable benefit.

### Best Practices

- Memoize expensive computations
- Use stable references when needed
- Prevent unnecessary re-renders
- Avoid premature optimization

---

### useMemo

Memoize expensive calculations.

```tsx
const sortedUsers = useMemo(() => {
  return [...users].sort(compareUsers)
}, [users])
```

---

### useCallback

Memoize callbacks passed to memoized components.

```tsx
const handleSubmit = useCallback(() => {
  saveData(formData)
}, [formData])
```

---

### Not Recommended ❌

Don't memoize simple values or cheap computations.

```tsx
const name = useMemo(() => 'John', [])
```

No expensive computation, so memoization is unnecessary.

---

## 🧪 Testing Hooks

Best practices for testing custom hooks.

- Testing custom hooks
- Mocking dependencies
- Testing async behavior
- Isolated hook testing

---

## 🔥 General Recommendations

### Recommended ✅

- Keep hooks small and focused
- Reuse logic through custom hooks
- Follow the Rules of Hooks
- Use clear and descriptive names
- Separate unrelated concerns
- Keep hook APIs simple and predictable
- Use state and effects only when needed

---

### Not Recommended ❌

- Creating large, multi-purpose hooks
- Calling hooks conditionally
- Overusing `useEffect`
- Premature memoization
- Mixing unrelated responsibilities
- Designing overly complex APIs
- Storing derived values in state

---

> [!TIP]
> Good hooks are focused, reusable, predictable, and easy to test.

---

[🡨 Back](../README.md#-hooks)
