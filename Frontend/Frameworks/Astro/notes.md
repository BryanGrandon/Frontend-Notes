# 🚀 Astro

Astro is a modern framework for building fast, optimized, and content-focused websites. Its main goal is to ship less JavaScript to the browser, improving performance and user experience.

Astro is ideal for landing pages, blogs, documentation, and static sites, while still allowing you to integrate frameworks like React, Vue, Svelte, or Solid when needed.

---

## 📑 Table of Contents

- [What is Astro?](#-what-is-astro)
- [Key Features](#️-key-features)
- [Astro Island](#-astro-islands)
- [Project Structure](#-project-structure)
- [Getting started](#-getting-started)
- [When to use Astro](#-when-to-use-astro)

---

## 🌟 What is Astro?

Astro is a Static Site Generator (SSG) and modern web framework that prioritizes performance by design. Unlike traditional frameworks, Astro renders HTML on the server and only sends JavaScript when it is truly necessary.

---

## ⚙️ Key Features

- ⚡ Zero JavaScript by default
- 🏝️ Islands Architecture
- 🧱 Framework-agnostic (React, Vue, Svelte, Solid, etc.)
- 📦 Automatic optimization
- 🧠 Easy to learn
- 🌐 SEO-friendly

---

## 🧩 Astro Islands

The Astro Islands concept allows only interactive components to load JavaScript, while the rest of the page remains static HTML.

👉 Result: better performance and smaller bundle size

Example:

- Header → Static HTML
- Interactive button → JavaScript
- Content → Static HTML

> [!TIP]
> Use Islands only for interactive components (buttons, modals, forms). Avoid wrapping large sections of the page in islands to preserve performance benefits.

---

## 📁 Project Structure

Basic Astro project structure:

```text
src/
├── components/
├── layouts/
├── pages/
│   └── index.astro
├── styles/
public/
astro.config.mjs
```

> [!NOTES]
> Use `layouts/` to avoid repeating headers, footers, and meta tags across pages.

---

## 🚀 Getting Started

Install Astro and create a new project:

```bash
   npm create astro@latest
   cd my-astro-project
   npm run dev
```

Open in the browser:

```text
http://localhost:4321
```

---

## 📦 When to Use Astro

Astro is a great choice when you need:

- 📄 Content-driven websites
- 📝 Blogs and documentation
- 🚀 Maximum performance
- 🌍 Strong SEO
- 🧩 Partial use of frontend frameworks

> [!IMPORTANT]
> Astro may not be the best choice for highly interactive dashboards or apps that behave like full SPAs.

---

[🡨 Back](/README.md#️technologies--notes)
