# 🧩 Minimal Feature Based

The minimal feature-based structure organizes code by features instead of file types.
Each feature contains everything it needs (components, hooks, services), keeping related code together.

> [!NOTE]
> It is a great step up from file-type structure when your project starts to grow.

---

## 📑 Table of Contents

- [Example Structure](#-example-structure)
- [Pros](#-pros)
- [Cons](#-cons)

---

## 📁 Example structure

```bash
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   │
│   ├── anime/
│   │   ├── components/
│   │   └── services/
│
├── components/      # shared/global components
├── utils/
└── App.jsx
```

---

### ✅ Pros

- Better organization by feature
- Easier to scale than file-type structure
- Keeps related code together

---

### ❌ Cons

- Requires more planning
- Can be confusing at first

---

[🡨 Back](../../notes.md#-project-structure)
