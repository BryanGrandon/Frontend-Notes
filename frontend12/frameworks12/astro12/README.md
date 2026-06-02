# 🚀 Astro

Astro is a modern framework for building fast, optimized, and content-focused websites. Its main goal is to ship less JavaScript to the browser, improving performance and user experience.

Astro is ideal for landing pages, blogs, documentation, and static sites, while still allowing you to integrate frameworks like React, Vue, Svelte, or Solid when needed.

---

## 📑 Table of Contents

- [What is Astro?](#-what-is-astro)
- [Key Features](#️-key-features)
- [When to use Astro](#-when-to-use-astro)
- [Getting started](#-getting-started)
- [Project Structure](#-project-structure)
- [Astro Island](#-astro-islands)
- [Astro Slot](#-astro-slots)

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

## 📁 Project Structure

Basic Astro project structure:

```text
src/
├── components/
│   └── Counter.jsx
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
astro.config.mjs
```

> [!NOTES]
> Use `layouts/` to avoid repeating headers, footers, and meta tags across pages.

---

## 🧩 Astro Islands

Astro Islands is a rendering pattern that allows you to ship JavaScript only to the components that actually need interactivity, while the rest of the page is delivered as static HTML.

This approach keeps pages lightweight, fast, and highly optimized by default.

👉 Result: better performance, faster load times, and smaller JavaScript bundles.

---

### How It Works

Astro renders the entire page as static HTML, then selectively hydrates only the interactive components on the client.

Example:

- Header → Static HTML
- Interactive button → JavaScript
- Content → Static HTML

---

### Common Mistake: Overusing Islands

Wrapping large sections (or entire pages) as islands defeats Astro’s performance benefits.

```ASTRO
<EntirePage client:load />
```

---

### Best Practice: Isolate Interactivity

Apply islands only where user interaction is required.

```ASTRO
<Navbar />
<Content />
<InteractiveButton client:load />
```

---

> [!TIP]
> Use Islands only for interactive components (buttons, modals, forms). Avoid wrapping large sections of the page in islands to preserve performance benefits.

---

## 🧩 Astro Slots

The `<slot />` element in Astro is used to define placeholders for content that will be passed from a parent component into a child component. Slots help you build reusable and flexible layouts without tightly coupling content and structure.

Slots work at build time, meaning they do not add JavaScript to the browser.

---

### Basic Usage

A simple layout component using a slot:

```ASTRO
<!-- Layout.astro -->
<main>
  <slot />
</main>
```

```ASTRO
<!-- Usage -->
<Layout>
  <p>Hello Astro</p>
</Layout>
```

---

### Named Slot

Astro supports named slots, allowing you to inject content into specific sections of a component.

```ASTRO
<!-- Layout.astro -->
<header><slot name="header" /></header>
<main><slot /></main>
```

```ASTRO
<!-- Usage -->
<Layout>
  <h1 slot="header">Blog</h1>
  <p>Post content</p>
</Layout>
```

---

### Best Practices

- 🧱 Use slots to create reusable layouts and components
- 📄 Keep content pages clean by delegating structure to layouts
- ⚡ Slots do not add JavaScript — they are always safe for performance
- 🧩 Prefer named slots when multiple content areas are needed

---

### Common Mistake

❌ Overusing props for large blocks of HTML:

```ASTRO
<Component content="<p>Large HTML block</p>" />
```

✅ Better approach:

```ASTRO
<Component>
  <p>Large HTML block</p>
</Component>
```

---

> [!TIP]
> If your component needs to control structure, use slots. \ If it only needs data, use props.

---

[🡨 Back](/README.md#️technologies--notes)
