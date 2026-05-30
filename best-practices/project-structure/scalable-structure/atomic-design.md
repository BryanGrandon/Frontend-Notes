# ⚛️ Atomic Design

After covering module-based structure and file-type structure, another common concept is Atomic Design.

Atomic Design is a design methodology for building design systems, created by Brad Frost and Dave Olsen. It is not exclusive to React, but it fits very well due to the component-based approach.

👉 Rather than being a full project structure, it is a pattern for organizing components that can be applied within your existing architecture.

---

## 📑 Table of Contents

- [When to use it](#-when-to-use-it)
- [Core Idea](#-core-idea)
- [Atomic Levels](#-atomic-levels)
- [Example Structure](#️-example-structure)
- [Advantage](#-advantages)
- [Disadvantages](#️-disadvantages)

---

## 📌 When to Use It

Best for:

Design systems
UI-heavy applications
Projects with reusable components

---

## 🧠 Core Idea

The main idea is to divide UI components into five hierarchical levels:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

---

## 🧩 Atomic Levels

---

### Atoms

The smallest building blocks of the UI.

Examples:

- Buttons
- Inputs
- Labels
- Icons

They cannot be broken down further.

---

### Molecules

Groups of atoms working together as a single unit.

Examples:

- Input + Label
- Search bar
- Form field

Simple combinations with a specific function.

---

### Organisms

More complex UI sections composed of molecules and atoms.

Examples:

- Navbar
- Card list
- Product section

They form distinct sections of the interface.

---

### Templates

Page layouts that define structure without real content.

Examples:

- Dashboard layout
- Product page layout

Focus on structure, not content.

---

### Pages

Final screens with real data.
Examples:

- Home page
- Product page with real data

This is what users actually see.

---

## 🗂️ Example Structure

```bash
src/
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
```

---

## ✅ Advantages

- Clear component hierarchy
- Promotes reusability
- Great for design systems
- Works perfectly with component-based frameworks

---

## ⚠️ Disadvantages

- Can feel abstract at first
- Not a full project structure by itself
- Requires discipline to maintain consistency

---

[🡨 Back](../../notes.md#scalable-structure)
