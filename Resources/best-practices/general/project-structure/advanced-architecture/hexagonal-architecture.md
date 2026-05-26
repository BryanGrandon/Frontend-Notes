# ⬡ Hexagonal Architecture

This architecture was introduced by Alistair Cockburn and focuses on separating business logic from external aspects such as the user interface, APIs, or databases.

---

## 📑 Table of Contents

- [When to use it](#-when-to-use-it)
- [How it works](#️-how-it-works)
- [Example Structure](#-example-structure)
- [Key Idea](#-key-idea)
- [Advantages](#-advantages)
- [Disadvantages](#️-disadvantages)
- [Recommendation](#-recommendation)

---

## 📌 When to Use It

Best for:

- Full-stack teams already using it
- Large and complex applications
- Projects with heavy business logic

---

## ⚙️ How It Works

The architecture is divided into layers with clear responsibilities:

---

### Domain (Core)

- Contains business logic
- Independent from frameworks and UI
- Examples:
  - Models
  - Services

This is the heart of the application

---

### Infrastructure (Adapters)

- Handles interaction with the outside world
- Examples:
  - UI components
  - HTTP clients
  - Repositories

These are replaceable implementations

---

## 📁 Example Structure

```bash
src/
│
├── domain/
│   ├── models/
│   │   └── User.js
│   │
│   └── services/
│       └── User.service.js
│
├── infrastructure/
│   ├── components/
│   │   ├── Avatar/
│   │   │   ├── Avatar.jsx
│   │   │   └── Avatar.test.js
│   │   │
│   │   └── UserProfile/
│   │       ├── UserProfile.jsx
│   │       └── UserProfile.test.js
│   │
│   ├── http/
│   │   ├── dto/
│   │   │   └── userDto.js
│   │   └── http.js
│   │
│   └── repositories/
│       └── user.repository.js
│
├── App.jsx
└── index.js
```

---

## 🔄 Key Idea

The domain does NOT depend on infrastructure

- ❌ Domain importing UI or API logic
- ✅ Infrastructure depends on the domain

This ensures:

- Better testability
- Easier maintenance
- Flexibility to change external tools

---

## ✅ Advantages

- Strong separation of concerns
- Highly testable
- Easy to swap implementations (API, UI, etc.)
- Great for complex applications

---

## ⚠️ Disadvantages

- Steep learning curve
- More boilerplate
- Can be overkill for small/medium projects

---

## 💡 Recommendation

If you're not familiar with this architecture, it might feel confusing at first.

For most frontend projects, approaches like:

- [Feature-Based Structure](../scalable-structure/feature-based-structure.md)
- [Atomic Design](../scalable-structure/atomic-design.md)

are usually more practical and easier to maintain.

---

[🡨 Back](../../notes.md#advanced-architecture)
