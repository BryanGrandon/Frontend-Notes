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
- [Responsive](#-responsive-design)
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

---

### Flex

Flex is a flexible layout system designed to build one-dimensional layouts (row or column). It allows elements to adapt, align, and distribute space efficiently within a container.

Flex is especially useful for:

- Creating one-dimensional layouts.
- Building flexible and responsive structures.
- Designing complex layouts with simple rules.

**Flex container properties**

- Applied to the **parent element**: (`flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, `align-content`, `gap`)

**Flex item properties**

- Applied to the **child elements**: (`flex` (shorthand), `align-self`, `order`)

---

### Grid

Grid is a two-dimensional layout system designed to build layouts with rows and columns. It allows precise control over placement, alignment, and spacing of elements within a container.

Grid is especially useful for:

- Creating two-dimensional layouts (rows and columns).
- Building complex and structured page layouts.
- Designing responsive layouts with clear spatial control.

**Grid container properties**

- Applied to the **parent element**:  
  (`display`, `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `gap`, `justify-items`, `align-items`, `justify-content`, `align-content`)

**Grid item properties**

- Applied to the **child elements**:  
  (`grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`)

---

## 🪪 User interface

User Interface styles allow you to customize native browser elements such as cursors, scrollbars, tables, lists, and counters.

### Cursor

To change the mouse cursor, use the `cursor` property on the desired element.

| Value     | Description                        |
| --------- | ---------------------------------- |
| `default` | Default system cursor              |
| `pointer` | Indicates a clickable element      |
| `text`    | Text selection cursor              |
| `move`    | Indicates the element can be moved |
| `wait`    | Indicates the user should wait     |

### Scroll

Styling scrollbars helps match the browser UI with the site's look and feel, improving visual consistency.

| Property           | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `scrollbar-width`  | Sets the scrollbar size (`auto`, `thin`, `none`)               |
| `scrollbar-color`  | Sets the scrollbar and track colors                            |
| `scrollbar-gutter` | Reserves space to prevent layout shifts when scrollbars appear |

> [!NOTE]
> The `scroll-behavior` property enables smooth scrolling when applied to the `<html>` element and must be set to `smooth`.

---

## ✨ Effects

Visual effects enhance UI design by adding depth and emphasis. Shadows, filters, blend modes, masks, and clipping help create more attractive and readable interfaces.

---

### Shadow

Shadows applied to text (`text-shadow`) or elements (`box-shadow`) help improve readability and make interfaces more visually appealing.

```CSS
/* Parameters: Horizontal offset, Vertical offset. Blur radius, Spread radius (optional), Color, inset (optional, inner shadow) */
.card {
  text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.40);
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15) inset;
}
```

Multiple shadows can be applied by separating the values with commas.

> [!NOTE]
> The `drop-shadow()` filter is used with the `filter` property and creates shadows similar to `box-shadow` or `text-shadow`, making it ideal for transparent images or non-rectangular elements.

### Filters

CSS filters allow you to apply image-like effects (such as blur, brightness, or contrast) directly in the browser without permanently modifying the original image.

- **Filter properties**: (`filter`, `backdrop-filter`)
- **Common filter functions**: (`blur()`,`grayScale()`, `brightness()`, `contrast()`, `saturate()`, `opacity()`)

```CSS
.blur {
  filter: blur(4px);
}
.glass {
  backdrop-filter: blur(10px) saturate(1.2);
}
```

You can combine multiple filter functions into a single filter property to apply multiple visual effects at once.

> [!TIP]
> Use `filter` to apply visual effects directly to an element, and `backdrop-filter` to apply effects to the background behind an element.

---

## 📱 Responsive Design

Responsive Design in CSS allows interfaces to **adapt smoothly to different screen sizes, orientations, and user preferences**, ensuring a consistent and accessible experience across devices.

CSS provides several tools to achieve responsive layouts:

- **Media Queries** → Apply styles based on screen size or conditions
- **Media Features** → Target properties like width, height, orientation, or resolution
- **Flexible Layouts** → Build adaptable structures using **Flex** and **Grid**
- **Relative Units** → Use scalable units such as `rem`, `%`, `vw`, and `vh`
- **User Preferences** → Respect accessibility settings like `prefers-reduced-motion` and `prefers-color-scheme`

Responsive design is a core principle of modern web development, improving **usability, accessibility, and performance** on mobile, tablet, and desktop devices.

---

## 🔄 2D / 3D Transformations

**CSS transformations** allow you to visually modify an HTML element without affecting the document flow. They are applied using the `transform` property, which accepts one or multiple **transformation functions**, executed in the order they are defined.

---

### 2D Transformations

**2D transformations** modify elements along the **X** and **Y** axes.

- **2D Translation**. (`translate()`, `translateX()`, `translateY()`)
- **2D Scaling**. (`scale()`, `scaleX()`, `scaleY()`)
- **2D Rotation**. (`rotate()`)
- **2D Skewing**. (`skew()`, `skewX()`, `skewY()`)

---

### 3D Transformations

**3D transformations** add depth by using the **Z** axis, enabling more realistic effects.

- **3D Transformations**. ( `translateZ()`, `translate3d()`, `scaleZ()`, `scale3d()`, `rotateX()`, `rotateY()`, `rotateZ()`, `rotate3d()`)
- **Perspective**. (`perspective()`)

> [TIP]
> When working with 3D transforms, combine `perspective()` with `transform-style: preserve-3d` for more realistic depth effects.

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

## 🧪 Modern CSS Features

Modern CSS includes powerful features that reduce the need for JavaScript:

- CSS Grid & Flexbox
- Custom properties (CSS variables)
- `:has()` selector
- Container queries
- Animations & transitions

---
