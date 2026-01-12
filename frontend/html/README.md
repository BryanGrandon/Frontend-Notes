# 🧱 HTML

HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It defines the structure, semantics, and organization of a page, serving as the foundation for styling (CSS) and behavior (JavaScript).

To start building solid websites, pages, or web applications, it is essential to understand the basic structure of an HTML document, its parts, and how they are organized.

---

## 📑 Table of Contents

- [HTML Structure](#-html-structure)
- [Header Labels](#-header-labels)
- [Textual](#-textual)

---

## 📄 HTML Structure

An HTML document must be well-formed so the browser can read and process it correctly. To achieve this, it requires a clearly defined initial structure, with certain **mandatory HTML elements** and some recommended best practices.

In general, an HTML document can be divided into the following core parts:

- **Page structure** – The overall organization of the document
- **DOCTYPE** – Declares the document type and HTML version
- **`<head>` element** – Contains metadata and document configuration
- **`<body>` element** – Holds the visible content of the page

---

## 🧠 Header labels

The `<head>` tag contains the document’s **metadata** and defines relationships with external resources. Its content is not displayed on the page but is essential for correct behavior, accessibility, and SEO.

- The `<title>` tag defines the title of the document and is **mandatory** in every HTML page. Its content appears in the browser tab and is used by search engines.

- **Metadata** elements provide information about the document, such as character encoding, viewport settings, and descriptions. These elements help search engines understand and index the page correctly.

- The `<link>` tag is used to establish relationships with external documents or resources, such as stylesheets, icons, or fonts.

---

## 🏷️ Metadata

In general, the `<meta>` tag uses the `name` and `content` attributes. Depending on the value assigned to `name`, a corresponding value must be provided in `content`.

These tags are placed inside the `<head>` element of the HTML document and are used to define important information about the page.

### 📌 Common metadata types

- **Character encoding**
- **Theme color**
- **social media**
- **SEO / Google**
- **Responsive design**
- **HTTP simulation**

👉 **[View Metadata type examples](./examples/metadata.html)**

---

<!-- External resource -->

## 📝 Textual

Textual tags structure and give meaning to content written in HTML, making it easier for browsers, search engines, and assistive technologies to understand.

These tags are responsible for representing **headings**, **paragraphs**, **emphasis**, **quotations**, **code fragments**, and other textual elements. When used correctly, they improve readability, **accessibility**, and **maintainability**, while separating content structure from visual presentation, which is handled by CSS.

👉 **[View Textual examples](./examples/textual.html)**

---

## Grouping

## Multimedia

## Format

## Link

## Semantic

HTML5 focuses on providing semantic meaning to content rather than visual styling. The structure defines purpose and meaning, while appearance is handled by CSS, following the principle of separating content from presentation.

## Text semantic

## Tables

## Forms

## Interactivity

---

[🡨 Back](../../README.md#️technologies--notes)
