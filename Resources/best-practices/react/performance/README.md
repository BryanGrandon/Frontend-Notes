# Performance

Optimize your React applications to improve loading speed, responsiveness, and overall user experience.

---

## 📑 Table of Contents

- [Image Optimization](#image-optimization)
- [Lazy Loading](#-lazy-loading)
- [Suspense](#-suspense)

<!-- Memoization -->
<!-- Code Splitting -->
<!-- Avoid Unnecessary Re-renders -->
<!-- List Rendering Optimization -->
<!-- Virtualization -->

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

### Useful Tools

- [Convert images to WebP](https://convertio.co/es/png-webp/)
- [Compress images](https://tinypng.com/)
- [Generate responsive images](https://squoosh.app/)

---

## 📦 Lazy Loading

Lazy loading improves performance by loading components only when they are needed.

This helps reduce the initial bundle size and speeds up page loading.

Example

```jsx
const SettingsPage = lazy(() => import('./SettingsPage'))
```

### Benefits

- Faster initial load
- Better performance
- Reduced bundle size
- Improved user experience

---

### Common Use Cases

- Routes/pages
- Heavy components
- Modals
- Charts
- Admin panels

> [!TIP]
> Use lazy loading for components that aren't needed right away in the initial render.

---

## ⏳ Suspense

Gracefully handles asynchronous UI states while components or data are loading.

Example

```html
<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>
```

---

### Common Use Cases

- Lazy-loaded components
- Route-based code splitting
- Asynchronous data fetching
- Displaying loading states
- Improving perceived performance

---

### Lazy Loading Example

```jsx
const Dashboard = lazy(() => import('./Dashboard'))

<Suspense fallback={<Loading />}>
    <Dashboard />
</Suspense>
```

---

### Best Practices

- Keep fallback UIs lightweight
- Use skeleton loaders for better UX
- Wrap only the necessary components
- Combine with `lazy()` for optimized bundle loading

---

[🡨 Back](../../README.md#️-react)
