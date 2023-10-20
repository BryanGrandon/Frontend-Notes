# CSS Roadmap

- [Basic Selector](/css/basic-selector.css)
- [Advanced Selector](/css/advanced-selector.css)
- [Pseudo Classes](/css/pseudo-classes.css)
- [Pseudo Element](/css/pseudo-element.css)
- [Fonts](/css/fonts.css)
- [Lengths](/css/length.css)
- [Colors](/css/colors.css)
- [Box Model](/css/box-model.css)
- [Position](/css/position.css)
- [Background](/css/background.css)
- [Display](/css/display.css)
- [Flex](/css/display-flex.css)
- [Variables](/css/variables.css)

## BEM ( Block Element Modifier )

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

```html
<div class="block">
  <div class="block__element">Elem 1</div>
  <div class="block__element">Elem 2</div>
  <div class="block__element block__element--modifier">Elem 3</div>
</div>
```

```css
.block {
  color: inherit;
}
.block__element {
  color: inherit;
}
.block__element--modifier {
  color: inherit;
}
```
