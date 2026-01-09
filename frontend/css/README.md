# ✨ CSS Notes

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## 📑 Table of Contents

- [CSS units](#-css-units)
- [Custom Properties](#-custom-properties)
- [Colors](#-colors)
- [Background properties](#️-background-properties)
- [Gradients](#-gradients)
- [Box model](#-box-model)
- [Border](#-border)
- [CSS Selector](#-css-selectors)
- [Pseudo-classes](#-pseudo-classes)
- [Pseudo-Element](#-pseudo-elements)
- [Fonts](#️-fonts)
- [Layouts](#-layouts)
- [User interface](#-user-interface)
- [Effects](#-effects)
- [Responsive](#-responsive)
- [Transformations and drawings](#-transformations-and-drawings)

---

## 📏 CSS units

CSS length values are defined by a number followed by a unit of measurement.

### Absolute Units

- `px` → Fixed size, precise control (icons, borders).

### Relative Units

- `rem` → Root font size (recommended for typography).
- `em` → Element font size.
- `%` → parent element size.

### Viewport Units

- `vw` → 1% of viewport width
- `vh` → 1% of viewport height

> [!TIP]
> Prefer `rem`, `%`, and viewport units for responsive layouts.

> [!NOTE]
> CSS includes more units, but they are rarely used today and are mainly for print, while modern layouts rely on relative and viewport units.

---

## 🔧 Custom Properties

CSS Custom Properties (commonly known as **CSS variables**) allow you to store reusable values—such as colors, fonts, or spacing—making stylesheets easier to maintain and more consistent.

```css
/* Variable names should be clear and consistent */

:root {
  --color-primary: #f00;
  --font-custom: 'JetBrains Mono', sans-serif;
}

.class {
  color: var(--color-primary);
  font-family: var(--font-custom);
}
```

---

## 🎨 Colors

Color plays a key role in web design. It affects readability, accessibility, branding, and the overall user experience.

| Type        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| Keyword     | Predefined color names (e.g., `red`).                          |
| Hexadecimal | Starts with `#`, followed by RGB values from `00` to `FF`.     |
| RGB         | Uses `rgb()` with values from `0` to `255`.                    |
| HSL         | Uses` hsl()` to define hue (0–360), saturation, and lightness. |

👉 **[View CSS color examples](./code/css-colors.css)**

---

### 🌫️ Alpha Channel

The alpha channel controls the transparency of a color.

- **Range:** `0` (fully transparent) → `1` (fully opaque)
- **Supported formats:**
  - Hexadecimal (with an additional two characters)
  - `rgba()`
  - `hsla()`

> [!TIP]
> Prefer `rgba()` or `hsla()` when working with transparency for better readability and control.

👉 **[View Alpha Channel examples](./code/alpha-channel.css)**

---

## 🖼️ Background Properties

The background property allows us to set backgrounds to improve the visual appearance of HTML elements.

| Property                | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `background-color`      | Sets a solid color as the element's background.                        |
| `background-image`      | Sets an image as the element's background.                             |
| `background-position`   | Sets the starting position of the background.                          |
| `background-repeat`     | Defines if/how the background image repeats.                           |
| `background-size`       | Defines the size of the background image.                              |
| `background-attachment` | Scrolls with page or fixed.                                            |
| `background-origin`     | Area used for positioning (`padding`, `border`, `content`) box.        |
| `background-clip`       | Area where background is visible (`padding`, `border`, `content`) box. |

> [!TIP]
> You can combine multiple properties into a single shorthand `background`.\
> **Order**: color image position/size repeat attachment origin clip.

👉 **[View Background Properties examples](./code/background-properties.css)**

---

## 🎨 Gradients

Gradients allow you to create smooth transitions between two or more colors.  
They are widely used for backgrounds, buttons, overlays, and UI elements.

### Types of Gradients

| Type                | Description                             |
| ------------------- | --------------------------------------- |
| **Linear Gradient** | Colors transition along a straight line |
| **Radial Gradient** | Colors radiate from a central point     |
| **Conic Gradient**  | Colors rotate around a center point     |

👉 **[View Gradients examples](./code/gradients.css)**

---

## 📦 Box Model

The **CSS Box Model** describes how elements are structured and spaced on a web page. Every HTML element is treated as a rectangular box composed of several layers that define its size and layout.

### 🧩 Box Model Parts

- **Content**: The inner area where text, images, or other elements are displayed.
- **Padding**: The space between the content and the border.
- **Border**: The line that wraps the padding and content.
- **Margin**: The outer space that separates the element from others.

Understanding how these parts interact is essential for controlling layout and spacing in CSS.

---

### 📐 CSS Dimensions

To define the size of an element, CSS provides the `width` and `height` properties. These determine how much horizontal and vertical space an element occupies.

```CSS
.box {
  width: 200px;
  height: 100px;
}
```

---

### 🌊 Overflow

The overflow property controls what happens when content exceeds the element’s defined dimensions.

```CSS
.box {
  overflow: hidden;
}
```

Common values include **hidden**, **scroll**, **auto**, and **visible**.

---

### 📏 box-sizing

Determines how the total size of an element is calculated.

| Value         | Includes Padding | Includes Border | Description      |
| ------------- | ---------------- | --------------- | ---------------- |
| `content-box` | ❌               | ❌              | Default behavior |
| `border-box`  | ✅               | ✅              | Easier layouts   |

> [!TIP]
> Using border-box helps avoid unexpected layout issues.

---

## 🔲 Border

CSS borders define the **outline of an element**, allowing control over thickness, style, and color. They can be applied globally or to individual sides (`border-top`, `border-bottom`, `border-left`, `border-right`).

The `border` property accepts **width**, **style**, and **color** values.

```css
.card {
  border: 2px solid #3b82f6;
}
```

> [!NOTE]
> Individual border properties can be targeted using:
> `border-width`, `border-style` and `border-color`.

👉 **[View border examples](./code/border.css)**

---

### 🔵 border-radius

The CSS `border-radius` property rounds the corners of an element's outer border. You can set a single radius to create circular corners or two radii to create elliptical corners.

```CSS
.card {
  border-radius: 1rem ; /* All corners */
}
```

> [!TIP]
> The syntax for a **single value** is the most commonly used in most modern interfaces.

> [!NOTE]
> You can specify each corner using **four values** in clockwise order:
> `top-left`, `top-right`, `bottom-right`, `bottom-left`.

👉 **[View border examples](./code/border.css)**

---

### 🖼️ border-image

CSS also allows you to use images as borders using the 9-slice technique.

| Property              | Description                     |
| --------------------- | ------------------------------- |
| `border-image-source` | Image used as the border        |
| `border-image-width`  | Defines how the image is sliced |
| `border-image-slice`  | Width of the image border       |
| `border-image-outset` | Extends the border outward      |

**shorthand**

```CSS
/* border-image: <source> <slice> <width> <outset> <repeat> */
.box {
  border-image: url(border.png) 30 / 10px / 5px stretch;
}
```

> [!TIP]
> The `border-image` works only if `border-style` is defined.

---

## 🧮 CSS Selectors

CSS selectors define **which elements** a set of CSS rules will apply to. They are a core part of how styles are matched and applied in the browser.

| Selector Type | Example          | Description                                    |
| ------------- | ---------------- | ---------------------------------------------- |
| HTML tag      | `div`            | Selects all elements by tag name               |
| ID            | `#page`          | Selects the element with the given ID          |
| Class         | `.primary`       | Selects all elements with the given class      |
| Mix           | `button.primary` | Selects `button` elements with class `primary` |

---

### 🧩 Attribute

CSS **attribute selectors** allow you to target elements based on the presence or value of an attribute. They are written using **square brackets `[ ]`**.

- **Basic Attribute Selectors**

  These selectors target elements by attribute presence or exact value, with optional combinator for precision.

- **Advanced Attribute Selectors**

  These selectors target elements by **matching parts of an attribute value** using pattern-matching operators.

👉 **[View Attributes examples](./code/attributes.css)**

---

### 🔗 CSS Combinator

CSS combinator define the **relationship between selectors**, allowing you to target elements based on their position in the DOM.

| Name                  | Symbol  | Example          | Selects                              |
| --------------------- | :-----: | ---------------- | ------------------------------------ |
| Descendant combinator | (space) | `#page div {}`   | Any descendant (any level)           |
| Child combinator      |   `>`   | `#page > div {}` | Direct child only (first level only) |
| Adjacent sibling      |   `+`   | `div + div {}`   | Next sibling element                 |
| General sibling       |   `~`   | `div ~ div {}`   | All following siblings               |
| Universal combinator  |   `*`   | `#page * {}`     | All descendant elements              |

---

### 🧠 Advanced Selector Logic

- **`:is( ... )`**

  Combines multiple selectors into one for cleaner and more readable CSS. Inherits the highest specificity of its arguments.

- **`:where( ... )`**

  Works like `:is()`, but always has **zero specificity**. Best for base styles, utilities, and resets that should be easy to override.

- **`:not( ... )`**

  Targets elements that **do not match** a selector. Useful for exclusions and edge cases in styling.

- **`:has( … )`**

  Selects elements **based on their children or descendants**. Enables parent-based styling without JavaScript.

👉 **[View Advanced selector logic examples](./code/advanced-selector-logic.css)**

---

## 🌀 Pseudo-Classes

Pseudoclasses in CSS are used to target HTML elements based on **specific behaviors or states** rather than just their type or class.

- ✨ Interaction, User actions (`:hover`, `:active`, `:focus`, `:focus-visible`).
- 🌐 Links & Location (`:link`, `:visited`, `:target`).
- 📐 Structural / Children (`:first-child`, `:last-child`, `:nth-child(n)`, `:nth-of-type(n)`).
- 📝 Forms manage input states (`:checked`, `:disabled`, `:enabled`, `:required`, `:valid`, `:invalid`).
- ⚡ Misc / State (`:empty`, `:fullscreen`).

> [!NOTE]
> There are many more CSS pseudo-classes available, but the ones listed here are the **most commonly used and practical** for everyday styling.

👉 **[View Pseudoclasses examples](./code/pseudo-classes.css)**

---

## 🧩 Pseudo-Elements

PseudoElements in CSS allow you to style **virtual or non-existent parts of an element**, creating effects or content that doesn't exist in the HTML.

- ✨ Generated Content purely with CSS (`::before`, `::after`).
- 📄Typography Style text at a finer level (`::first-line`, `::first-letter`).
- 🎯 Style selected or highlighted text (`::selection`).
- 🔹 List markers & input placeholders (`::marker`, `::placeholder`).

> [!NOTE]  
> There are many more CSS pseudo-elements available, but the ones listed here are the **most commonly used and practical** for everyday styling.

👉 **[View Pseudoclasses examples](./code/pseudo-elemento.css.css)**

---

## 🖋️ Fonts

Fonts are a key part of web design. Choosing and adjusting them correctly improves readability and user experience.

- Font properties (`font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`).
- Letter & line spacing (`letter-spacing`, `line-height`).

👉 **[View Fonts examples](./code/fonts.css)**

---

### Load custom fonts

Allows you to use local or downloaded fonts.

```CSS
@font-face {
  font-family: "MyFont";
  src: url("/fonts/my_font.woff2") format("woff2");
}

body {
  font-family: "MyFont", sans-serif;
}
```

---

## 📐 Layouts

Layouts are one of the most important parts of CSS, allowing you to build advanced user interfaces. Using Flex_box or Grid makes layout creation easier, but a solid understanding of CSS is still required.

- Display (`inline`, `block`, `inline-block`, `flex`, `grid`)

### Flex

### Grid

---

## 🪪 User interface

---

## ✨ Effects

---

## 📱 Responsive

---

## 🎨 Transformations and drawings

---

**[🡨 Back](../../README.md)**

---

## 🧱 Architecture

CSS architecture focuses on organizing styles using clear rules, conventions, and patterns to improve:

- Maintainability
- Scalability
- Readability
- Team collaboration

A solid architecture helps avoid conflicts, duplication, and unmanageable stylesheets as projects grow.

---

## 🧱 CSS Methodologies

CSS methodologies help structure styles in a consistent and predictable way, reducing conflicts and improving scalability.

- **BEM (Block, Element, Modifier)**  
  A naming convention that makes styles easier to understand and maintain.
- **ITCSS (Inverted Triangle CSS)**  
  Organizes styles from generic to specific, improving performance and clarity.
- **OOCSS (Object-Oriented CSS)**  
  Encourages reusable and modular CSS components.

### Block Element Modifier (BEM)

BEM is a naming methodology that helps create clear and structured CSS class names.

- Block: Independent, reusable component.
- Element: A part of a block that depends on it.
- Modifier: A variation of a block or element.

---

## 📱 Responsive Design

CSS enables responsive layouts that adapt to different screen sizes and devices using:

- Media queries
- Flexible layouts (Flexbox & Grid)
- Relative units (`rem`, `%`, `vw`, `vh`)

Responsive design is essential for accessibility and modern web experiences.

---

## 🧪 Modern CSS Features

Modern CSS includes powerful features that reduce the need for JavaScript:

- CSS Grid & Flexbox
- Custom properties (CSS variables)
- `:has()` selector
- Container queries
- Animations & transitions

---
