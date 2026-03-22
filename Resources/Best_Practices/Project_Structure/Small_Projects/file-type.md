# 📦 File Type Structure

The file type structure is the most common approach when starting with React.
It organizes files by their type (components, hooks, services, etc.) at the root level of the project.

> [!NOTE]
> It is ideal for small projects or beginners, as it is simple and easy to understand.

---

## 📑 Table of Contents

- [Example Structure](#-example-structure)
- [Recommended Improvement](#-recommended-improvement)
- [Pros](#-pros)
- [Cons](#-cons)

---

## 📁 Example Structure

```bash
components/
pages/
hooks/
services/
styles/
```

---

## 🚀 Recommended Improvement

A better way to scale this structure is to separate:

📦 Reusable components → components/
📄 Pages → pages/ (each with its own internal components)

This keeps the code more organized and makes it easier to manage larger projects.

### Example

```bash
src/
├── components/              # 📦 Reusable (global) components
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.test.js
│   ├── Avatar/
│   │   ├── Avatar.jsx
│   │   └── Avatar.test.js
│
├── pages/                   # 📄 Pages (features/views)
│   ├── Home/
│   │   ├── components/      # Components used ONLY in Home
│   │   │   └── Hero/
│   │   │       ├── Hero.jsx
│   │   │       └── Hero.test.js
│   │   └── Home.jsx
│   │
│   ├── UserProfile/
│   │   ├── components/      # Components used ONLY in UserProfile
│   │   │   └── UserCard/
│   │   │       ├── UserCard.jsx
│   │   │       └── UserCard.test.js
│   │   └── UserProfile.jsx
│
├── hooks/
├── services/
├── utils/
└── App.jsx
```

---

## ✅ Pros

- Easy to understand
- Quick to implement
- Great for beginners

---

## ❌ Cons

- Hard to scale
- Can become messy in large projects

---

[🡨 Back](../../notes.md#-project-structure)
