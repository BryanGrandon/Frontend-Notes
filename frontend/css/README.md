# ✨ CSS Notes

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## 📑 Table of Contents

- [CSS units](#-css-units)
- [CSS Custom Properties](#-css-custom-properties)
- [CSS Color](#-color--background)

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

## 🔧 CSS Custom Properties

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

## 🎨 CSS Colors

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

**[🡨 Back](../../README.md)**
