# 🪝 Custom Hooks Best Practices

Custom hooks should focus on a single responsibility.

Following the **Single Responsibility Principle (SRP)** makes hooks easier to:

- ♻️ Reuse
- 🛠️ Maintain
- 🧪 Test
- 🧠 Understand

---

## 📑 Table of Contents

- [Good Practice](#-good-practice)
- [Avoid](#-avoid)
- [Better Approach](#-better-approach)
- [Rule of Thumb](#-rule-of-thumb)
- [Exception](#️-exception)
- [A Good Hook Should](#-a-good-hook-should)

---

## ✅ Good Practice

A hook should handle:

- One specific logic
- One reusable behavior
- One clear responsibility

### Examples

```ts
useTheme()
useFetch()
useModal()
useDebounce()
```

---

## ❌ Avoid

Hooks that manage too many unrelated concerns.

**Bad Example**

```ts
useDashboard()
```

Handling:

- Fetching
- Auth
- Forms
- Filters
- Modals
- Animations

---

## ✅ Better Approach

Split responsibilities into smaller hooks:

```ts
useAuth()
useFilters()
usePagination()
useModal()
```

Then compose them when needed.

---

## 📌 Rule of Thumb

If you can’t describe the hook in one sentence, it’s probably doing too much.

## ⚠️ Exception

Some hooks can compose other hooks:

```ts
useCheckout()
```

Using internally:

```ts
useCart()
usePayment()
useShipping()
```

This is acceptable when the hook acts as a composition layer.

## 🔥 A Good Hook Should

- Have a clear purpose
- Be reusable
- Keep APIs simple
- Encapsulate logic

[🡨 Back](../../README.md#️-react)
