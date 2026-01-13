# 🧱 HTML

HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It defines the structure, semantics, and organization of a page, serving as the foundation for styling (CSS) and behavior (JavaScript).

To start building solid websites, pages, or web applications, it is essential to understand the basic structure of an HTML document, its parts, and how they are organized.

---

## 📑 Table of Contents

- [HTML Structure](#-html-structure)
- [Header Labels](#-header-labels)
- [Textual](#-textual)
- [Grouping](#-grouping)
- [Multimedia](#-multimedia)
- [Formatting](#-formatting)
- [Link](#-link)
- [Semantic](#-semantic)

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

### Textual Tag:

`<h1> – <h6>`, `<p>`, `<span>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<mark>`, `<small>`, `<sub>`, `<sup>`, `<br>`, `<hr>` `<code>`, `<pre>`, `<blockquote>`, `<q>`, `<abbr>`, `<cite>`, `<time>`.

👉 **[View Textual examples](./examples/textual.html)**

---

## 🧩 Grouping

Grouping tags are used to **group and associate related content** within an HTML document. They help organize information logically, improving readability, structure, and accessibility.

### Grouping Tag:

`<div>`, `<p>`, `<main>`, `<hr>`, `<ol>`, `<ul>`, `<li>`, `<pre>`, `<blockquote>`, `<dl>`, `<dt>`,`<dd>`, `<figure>`, `<figcaption>`

👉 **[View Textual examples](./examples/grouping.html)**

---

## 🎬 Multimedia

HTML multimedia tags allow you to embed visual, audio, and interactive content directly into a web page, enhancing the user experience without relying on external plugins.

The main multimedia tags are `<img>`, `<audio>`, and `<video>`, used to embed images, audio, and video. Additional tags like `<iframe>`, `<source>`, `<track>`, `<canvas>`, and `<picture>` extend multimedia support with external content, multiple formats, subtitles, and graphics.

👉 **[View Textual examples](./examples/multimedia.html)**

---

## 📝 Formatting

Using HTML text tags correctly is essential for making information understandable to both users and machines. Learning how to apply these tags properly improves semantics, accessibility, and the overall structure of HTML markup.

### Grouping Tag:

`<a>`, `<strong>`, `<em>`, `<mark>`, `<b>`, `<i>`, `<u>`, `<s>`, `<span>`

👉 **[View Textual examples](./examples/formatting.html)**

---

## 🔗 Link

The `<a>` (anchor) tag is one of the most important HTML elements, as it allows you to connect documents and resources, forming the foundation of web navigation. Through links, users can access other web pages, files, images, videos, or specific sections within the same document.

To create a link, you must define:

- The resource URL using the href attribute.
- The link content, which can be text, images, or other elements.

Additionally, the `<a>` tag supports several attributes that control link behavior, such as target to open links in a new tab, title to provide additional information, and download to allow resource downloads.

---

## 🧠 Semantic

HTML5 focuses on providing semantic meaning to content rather than visual styling. The document structure defines the purpose and meaning of each part of the content, while its appearance is handled by CSS. This follows the principle of separating content from presentation, improving accessibility, SEO, and maintainability.

Semantic elements clearly describe their role within the page, making the markup easier to understand for both developers and assistive technologies.

| Tags        | Its function                                 |
| ----------- | -------------------------------------------- |
| `<h1>`      | Header level 1                               |
| `<h2>`      | Header level 2                               |
| `<h3>`      | Header level 3                               |
| `<h4>`      | Header level 4                               |
| `<h5>`      | Header level 5                               |
| `<h6>`      | Header level 6                               |
| `<header>`  | Header on a wed site or a section            |
| `<nav>`     | Represents a navigation                      |
| `<section>` | Represents a section of generic content      |
| `<article>` | Self explanatory section                     |
| `<footer>`  | footer of a website or a section             |
| `<aside>`   | represents supplemental or secondary content |
| `<address>` | represents a contact information             |

---

## Tables

## Forms

## Interactivity

---

[🡨 Back](../../README.md#️technologies--notes)
