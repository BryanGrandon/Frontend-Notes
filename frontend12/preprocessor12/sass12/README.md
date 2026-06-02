# 🎨 [Sass](https://sass-lang.com/)

**Sass (Syntactically Awesome Stylesheets)** is a powerful CSS preprocessor fully compatible with all versions of CSS. It extends the capabilities of CSS by adding features such as variables, mixins, modules, and functions, making stylesheets more maintainable, scalable, and easier to write.

Sass is widely used in modern web development to write cleaner and more efficient styles that are later compiled into standard CSS, ensuring full browser compatibility.

---

## 📑 Table of Content

- [Installation](#-installation)
- [Variables](#-variables)
- [Mixins](#-mixins)
- [Modules](#-modules)
- [Folder structure](#-folder-structure)

---

## 📦 Installation

To install Sass globally using npm, run:

```bash
npm install -g sass -D
```

---

## 🔧 [Variables](/Sass/variables.scss)

Variables in Sass allow you to store reusable values such as colors, fonts, or spacing.

They are declared using the $ symbol followed by the variable name.

```scss
$main-color: #ccc;
```

### 🗂️ Variable Maps (Array of Variables)

Maps allow you to group related values into a single structure.

```scss
$colors: (
  'white': #fff,
  'purple': #770af4,
);
```

You can later access these values using Sass functions like `map-get()`.

---

## ♻️ [Mixins](/Sass/mixins.scss)

Mixins work similarly to functions and allow you to reuse blocks of styles throughout your project. They can also accept parameters, making them flexible and powerful.

```scss
@mixin name {
  property: value;
  ...
}
```

### 📐 Mixins with Parameters

```scss
@mixin max-width($width) {
  max-width: $width;
  margin: auto;
}

// Usage example
.container {
  @include max-width(1400px);
}
```

---

## 📦 Modules

Sass includes built-in and user-defined modules that help organize styles and logic.
Modules are loaded using the @use rule and accessed via namespaces (or globally if specified).

```scss
@use '_mixins' as *;

div {
  @include flexBox(column, nowrap, normal, normal);
}
```

This approach improves maintainability and avoids global scope pollution.

---

## 🗂️ Folder structure

- 📂 **base/**

  Contains base styles such as resets, typography, and global styles.

- 📂 **layout/**

  Styles for main layout sections like header, footer, sidebar, and grid systems.

- 📂 **utilities/**

  Helper files including variables, mixins, and functions to speed up development.

- 📄 **main.scss**

  The main entry file that imports
  all partials and is compiled into CSS.

---

[🡨 Back](/README.md)
