# 🌬️ Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework that provides low-level, composable utility classes to build modern user interfaces directly in your markup.

Instead of writing custom CSS, you apply predefined classes that represent individual CSS properties, allowing for faster development, consistent design, and highly maintainable code.

---

## 📑 Table of contents

- [Sizing](#-sizing)
- [Layout](#-layout)
- [Pseudo-classes](#-pseudo-classes)
- [Typography](#️-typography)
- [Backgrounds](#-backgrounds)
- [Transitions and Animation](#️-transitions-and-animation)
- [Transforms](#-transforms)

---

## 📏 Sizing

Tailwind CSS provides multiple ways to control element sizing using utility classes. Sizes can be numeric, named, keyword-based, or fractional, depending on the use case.

### Negative values

Negative values are applied by prefixing the class with `-`.

```HTML
<div class="absolute top-2"></div>    <!-- top: 0.5rem -->
<div class="absolute -top-2"></div>   <!-- top: -0.5rem -->
```

### Small sizes (spacing scale)

Use a numeric scale where each step is a multiple of `0.25rem`.

```HTML
<div class="w-0" /> <!-- width: 0 -->
<div class="w-4" /> <!-- width: 1rem -->
```

### Medium sizes (named scale)

Use predefined size names similar to clothing sizes.

| Nomenclature | Size  |
| ------------ | ----- |
| `xs`         | 20rem |
| `sm`         | 24rem |
| `md`         | 28rem |
| `lg`         | 32rem |
| `xl`         | 36rem |
| `2xl`        | 42rem |
| `3xl`        | 48rem |

```HTML
<div class="w-lg"></div> <!-- CSS: width: 32rem -->
```

### Large & dynamic sizes

Use keywords for flexible or container-based sizing.

| Size     | CSS           |
| -------- | ------------- |
| `none`   | none          |
| `auto`   | auto          |
| `full`   | 100%          |
| `screen` | 100vw / 100vh |
| `min`    | min-content   |
| `max`    | max-content   |

```HTML
<div class="w-screen-lg"></div> <!-- CSS: width: 1024px -->
```

Use fractions to define a portion of the available space.

```HTML
<div class="w-1/4"></div> <!-- CSS: width: 25% -->
```

---

## 🧱 Layout

### Breakpoints

Breakpoints allow you to apply utility classes conditionally based on screen size using responsive prefixes.

| breakpoint | CSS                                |
| ---------- | ---------------------------------- |
| `sm:`      | @media (min-width: 640px) { ... }  |
| `md:`      | @media (min-width: 760px) { ... }  |
| `lg:`      | @media (min-width: 1024px) { ... } |
| `xl:`      | @media (min-width: 1200px) { ... } |
| `2xl:`     | @media (min-width: 1536px) { ... } |

### visibility

Control element visibility without affecting layout flow.

- `visible` → shows the element
- `invisible` → hides the element while keeping its space

```HTML
<div class="visible"></div> <!-- CSS: visibility: visible; -->
<div class="invisible"></div> <!-- CSS: visibility: hidden; -->
```

---

## 🧪 Pseudo-classes

Pseudo-classes are applied by prefixing the utility with the desired state, followed by the property to modify.

```HTML
<div class="hover:w-20"></div>  <!-- CSS: @:hover { width: 5rem } -->
<div class="active:scale-95"></div> <!-- CSS: @:active { scale: 0.95 } -->
```

Each pseudo-class must be explicitly defined for the utility it modifies, allowing precise control over element states.

---

## ✍️ Typography

Tailwind CSS offers utility classes to control text style, size, alignment, transformation, and spacing with consistency and scalability.

### Font Size

| Tailwind class | CSS                                        |
| -------------- | ------------------------------------------ |
| `text-xs`      | font-size: 0.75rem; line-height: 1rem;     |
| `text-sm`      | font-size: 0.875rem; line-height: 1.25rem; |
| `text-base`    | font-size: 1rem; line-height: 1.5rem;      |
| `text-lg`      | font-size: 1.125rem; line-height: 1.75rem; |
| `text-xl`      | font-size: 1.25rem; line-height: 1.75rem;  |

### Letter spacing

Default Letter Spacing Classes
Tailwind provides a set of descriptive utility classes for common letter spacing needs:

| Tailwind class     | Property                  | Description                 |
| ------------------ | ------------------------- | --------------------------- |
| `tracking-tighter` | letter-spacing: -0.05em;  | Tighter spacing (negative). |
| `tracking-tight`   | letter-spacing: -0.025em; | Tight spacing (negative).   |
| `tracking-normal`  | letter-spacing: 0em;      | Normal spacing (default).   |
| `tracking-wide`    | letter-spacing: 0.025em;  | Wide spacing.               |
| `tracking-wider`   | letter-spacing: 0.05em;   | Even wider spacing.         |
| `tracking-widest`  | letter-spacing: 0.1em;    | Widest spacing.             |

---

## 🎨 Backgrounds

Tailwind CSS provides a set of utilities to control background behavior, color, positioning, size, and gradients directly from your markup.

### Background Attachment

Controls how a background image behaves when scrolling.

Use `bg-{value}`.

```HTML
<div class="bg-fixed"></div> <!-- background-attachment: fixed -->
```

### Background Color

Sets the background color using Tailwind’s color palette.

Use `bg-{color}-{shade}`.

```HTML
<div class="bg-red-500"></div>
```

### Background position

Controls the position of a background image.

Use `bg-{position}`.

```HTML
<div class="bg-center"></div> <!-- background-position: center -->
```

### Background size

Defines how the background image is scaled.

Use `bg-{size}`.

```HTML
<div class="bg-cover"></div> <!-- background-size: cover -->
```

### Gradient colors

Create background gradients by defining start and end colors.
Use `from-{color}` and `to-{color}`.

```HTML
<div class="bg-gradient-to-r from-blue-600 to-red-600"></div>
```

---

## 🎞️ Transitions and Animation

Tailwind CSS provides utilities to easily add transitions and animations without writing custom CSS.

### Transition

Use the `transition` utility to enable CSS transitions. You can target specific properties by extending the class name.

```HTML
<div class="transition"></div>
```

Available transition properties:

- `transition-none`
- `transition-all`
- `transition-colors`
- `transition-opacity`
- `transition-shadow`
- `transition-transform`

```HTML
<div class="transition-colors"></div> <!-- background-color, border-color, color, fill, stroke; -->
```

By default, Tailwind applies:

```CSS
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
```

### Transition-duration

Control how long the transition lasts using `duration-{ms}`.

```HTML
<div class="duration-200"></div> <!-- transition-duration: 200ms; -->
```

### Transition-timing-function

Defines the easing curve of the transition.

| Tailwind class | CSS                                                       |
| -------------- | --------------------------------------------------------- |
| `ease-linear`  | transition-timing-function: linear;                       |
| `ease-in`      | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| `ease-out`     | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| `ease-in-out`  | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

### Transition delay

Add a delay before the transition starts using `delay-{ms}`.

```HTML
<div class="daley-150"></div> <!-- transition-delay: 150ms; -->
```

### Animation

Apply predefined CSS animations using `animate-{type}`.

| Tailwind Class   | CSS                                                        |
| ---------------- | ---------------------------------------------------------- |
| `none`           | animation: none;                                           |
| `animate-spin`   | animation: spin 1s linear infinite;                        |
| `animate-ping`   | animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;    |
| `animate-pulse`  | animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; |
| `animate-bounce` | animation: bounce 1s infinite;                             |

---

## 🔄 Transforms

Tailwind CSS provides transform utilities to scale, rotate, and move elements using composable classes.

### Scale

Control the size of an element using `scale-{value}`.

```HTML
<div class="scale-90"></div> <!-- scale: 0.9 -->
```

Scale elements independently on each axis using:

```HTML
<div class="scale-x-100"></div> <!-- scaleX: 1 -->
<div class="scale-y-50"></div>  <!-- scaleY: 0.5 -->
```

### Rotate

Rotate an element by specifying the rotation degree.

```HTML
<div class="rotate-10"></div>   <!-- rotate: 10deg -->
<div class="-rotate-100"></div> <!-- rotate: -100deg -->
```

### Translate

Move elements along the X or Y axis using translate utilities.

Values follow the spacing scale.

```HTML
<div class="translate-x-4"></div> <!-- translateX: 1rem -->
<div class="translate-y-2"></div> <!-- translateY: 0.5rem -->
```

---

[🡨 Back](../README.md)
