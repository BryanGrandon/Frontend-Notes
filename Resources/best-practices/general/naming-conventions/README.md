# 🏷️ Naming Conventions

Consistent naming conventions improve readability, maintainability, and scalability throughout the project. \
Clear names help developers quickly understand the purpose of
**files**, **folders**, **variables**, and **components**.

---

## 📑 Table of Contents

- [General Rules](#-general-rules)
- [Naming Conventions](#-naming-conventions)
- [Folder Names](#-folder-names)
- [Suggested Usage](#-suggested-usage)

---

## 🔤 General Rules

- Use clear and descriptive names
- Maintain consistency in naming conventions throughout the project
- Use English (industry standard)
- Prioritize readability over short names
- Avoid unnecessary abbreviations (`cmp`, `fn`, `tmp`, etc.)
- Names should describe the purpose, not the implementation

---

## 🎨 Naming Conventions

Different naming conventions are typically used depending on the context.

| Convention         | Common Use                                    | Example            |
| ------------------ | --------------------------------------------- | ------------------ |
| `camelCase`        | Variables, functions, hooks, utilities        | `getUserData.ts`   |
| `PascalCase`       | Components, classes, pages/views              | `UserProfile.tsx`  |
| `kebab-case`       | General files, routes, styles, configurations | `user-profile.css` |
| `snake_case`       | Python files, scripts, backend code           | `user_data.py`     |
| `UPPER_SNAKE_CASE` | Constants, environment variables              | `API_BASE_URL`     |

---

## 📁 Folder names

Folders should be simple, descriptive, and predictable.

### ✅ Recommended

- `components`
- `hooks`
- `services`
- `utils`
- `shared`

### 🚫 Avoid

- `stuff`
- `misc`
- `things`
- `random`

---

## 💡 Suggested Usage

| Use Case          | Recommended Convention      |
| ----------------- | --------------------------- |
| React Components  | `PascalCase`                |
| Pages / Views     | `PascalCase`                |
| Hooks             | `camelCase`                 |
| Utility Files     | `camelCase`                 |
| Folders           | `camelCase` or `kebab-case` |
| CSS / Style Files | `kebab-case`                |
| Constants         | `UPPER_SNAKE_CASE`          |

---

> [!IMPORTANT]
> 🚫 Avoid Generic Names. Eje: file1.js, data.js, newFolder, etc.

---

[🡨 Back](../../README.md)
