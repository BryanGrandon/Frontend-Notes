# 🧠 Best Practices

---

## 📑 Table of Contents

- [Project Structure](#-project-structure)
- [File Naming Conventions](#-file-naming-conventions)
- [Folder Naming Conventions](#-folder-naming-conventions)
  <!-- 🧩 Code Organization -->
  <!-- 🎨 UI / UX Guidelines -->
  <!-- ⚡ Performance Tips -->
  <!-- 🔒 Security Basics -->

---

## 📁 Project Structure

A good project structure helps keep your code clean, scalable, and easy to maintain.
That’s why it’s important to choose the right organization before starting.

👉 First, define:

- Project size
- Complexity
- Future scalability

This will help you choose the most suitable architecture.

---

### Simple Structure

For small projects (landing pages, portfolios, simple apps):

- 📦 [File-type structure](./project-structure/simple-structure/file-type.md)
- 🧩 [Minimal Feature-Based](./project-structure/simple-structure/minimal-feature-based.md)

---

### Scalable Structure

For medium-scale projects (dashboards, multi-feature apps):

- 🧩 Feature-based structure
- ⚛️ Atomic Design (optional, UI-focused)

---

### Advanced Architecture

For large projects (complex apps, SaaS, large teams):

- 🧠 Hexagonal Architecture (Ports & Adapters)

---

## 🗒️ File Naming Conventions

Naming your files correctly makes your code easier to read, maintain, and scale.

---

### 🔤 General Rules

- Use descriptive names
- Avoid unclear abbreviations (cmp, fn, etc.)
- Be consistent across the project
- Use English (industry standard)

---

### 🎨 Naming Styles

Different naming styles are used depending on the context:

- camelCase -> Functions, Variables, Utilities, Hooks (React)
- PascalCase -> Components (React, Vue, etc.), Classes, Pages/Views
- kebab-case -> General file names (JS projects), CSS/styles, config or static files
- snake_case -> Python files, backend code, scripts

---

### 🚫 Avoid

```bash
file1.js
test.js
data.js
component.js
```

These names don’t clearly describe their purpose.

> [!NOTE]
> If you can understand the file’s purpose just by its name → it’s a good name.

---

## 📁 Folder Naming Conventions

Proper folder naming improves organization and makes your project easier to navigate.

---

### 🔤 General Rules

- Use clear and descriptive names
- Stay consistent across the project
- Use English
- Avoid generic names (stuff, things, misc)

---

### 📁 Common Conventions

#### camelCase (recommended in React)

```bash
userProfile/
animeList/
authService/
```

Common in JavaScript/React projects

---

#### kebab-case (also widely used)

```bash
user-profile/
anime-list/
auth-service/
```

More readable, especially in larger projects

---

#### Avoid PascalCase for folders

```bash
UserProfile/ ❌
AnimeList/ ❌
```

Usually reserved for components or classes, not folders

---

[🡨 Back](/README.md#️-resources)
