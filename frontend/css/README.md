# ✨ CSS Notes

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## 📑 Table of Contents

- [CSS units](#-css-units)
- [Custom Properties](#-custom-properties)
- [Colors](#-colors)
- [Background properties](#️-background-properties)
- [Gradients](#-gradients)

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

👉 **[View Alpha Channel examples](./code/alpha-channel.css)**

> [!TIP]
> Prefer `rgba()` or `hsla()` when working with transparency for better readability and control.

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

👉 **[View Background Properties examples](./code/background-properties.css)**

> [!TIP]
> You can combine multiple properties into a single shorthand `background`.
> Order: 1.color 2.image 3.position/size 4.repeat 5.attachment 6.origin 7.clip.

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

**[🡨 Back](../../README.md)**
