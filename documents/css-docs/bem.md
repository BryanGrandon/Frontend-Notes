# BEM Architecture

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

```html
<!-- HTML -->
<div class="block">
  <div class="block__element">Elem 1</div>
  <div class="block__element block__element--modifier">Elem 2</div>
</div>
```

```css
/* CSS */
.block {
  color: red;
}
.block__element {
  color: orangered;
}
.block__element--modifier {
  color: orange;
}
```
