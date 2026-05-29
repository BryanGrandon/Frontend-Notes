# Performance

Optimize your React applications to improve loading speed, responsiveness, and overall user experience.

---

## 📑 Table of Contents

- [Image Optimization](#image-optimization)
- [Lazy Loading](#-lazy-loading)

<!-- Memoization -->
<!-- Code Splitting -->
<!-- Avoid Unnecessary Re-renders -->
<!-- List Rendering Optimization -->
<!-- Virtualization -->
<!-- Suspense -->

## 🖼️ Image Optimization

Optimize images to reduce loading times and improve performance.

- Use modern formats like **WebP** or **AVIF**
- Compress large images
- Use responsive images
- Lazy load offscreen images
- Avoid oversized assets

Example

```html
<img src="/images/example.webp" alt="Example" loading="lazy" />
```

---

### 🛠️ Useful Tools

- [Convert images to WebP](https://convertio.co/es/png-webp/)
- [Compress images](https://tinypng.com/)
- [Generate responsive images](https://squoosh.app/)

---

## 📦 Lazy Loading

Load components only when needed.

Example

```jsx
const SettingsPage = lazy(() => import('./SettingsPage'))
```

---

[🡨 Back](../../README.md#️-react)
