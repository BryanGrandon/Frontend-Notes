# 🧩 Feature Based Structure

The Feature-Based Structure is a way of organizing projects designed to scale efficiently as they grow.

Instead of organizing by file type (components, utils, etc.), it organizes by features (functional modules).

---

## 📑 Table of Contents

- [When to use it](#-when-to-use-it)
- [Core Concept](#-core-concept)
- [Key Rule](#-key-rule)
- [Example Structure](#️-example-structure)
- [Shared Code](#-shared-code)
- [Advantages](#-advantages)
- [Disadvantages](#-disadvantages)

---

## 📌 When to Use It

Best for:

- Medium to large applications
- Projects with multiple features
- Apps expected to grow over time

---

## 🚀 Core Concept

Each feature (module) contains everything it needs to work independently:

- Components
- Hooks
- Services
- Styles
- Tests

Everything lives in one place.

---

## 🧠 Key Rule

Features should NOT depend on each other

- Do not import code from other features
- Only use:
  - Internal feature code
  - Shared code

---

## 🗂️ Example Structure

```bash
src/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── authSlice.ts
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── productsSlice.ts
│
├── shared/
│   ├── components/
│   ├── utils/
│   └── hooks/
```

---

## 🔁 Shared Code

When multiple features need the same logic:

Use a `shared` folder

Examples:

- Reusable UI components
- Utility functions
- Global hooks

---

## ✅ Advantages

- Scales well for large projects
- Modular and maintainable
- Easy to understand and navigate
- Fewer cross-dependencies

---

## ❌ Disadvantages

- Requires good planning
- Can feel complex at the beginning

---

[🡨 Back](../../notes.md#scalable-structure)
