# Characteristics

SASS is a CSS preprocessor compatible with all versions of CSS.

```bash
# Install with Node JS
npm install -g sass

# Compilation
sass --Watch src/sass:public/css
```

## Variables

```scss
$color-main: #ccc;

body {
  background: $color-main;
}
```

## Nesting

```html
<section class="box">
  <h2>Title</h2>
  <p>Relate text</p>
</section>
```

```scss
.box {
  h2 {
    color: red;
    font-family: Arial;
  }

  p {
    font-family: sans-serif;
    text-decoration: underline;
  }
}
```

## Modules

- `main.scss`
- `_other.scss`

```scss
// main

@use "_other";
```

## Mixins

```scss
@mixin customized-box($fund: withe) {
  width: 300px;
  height: 100px;
  background-color: $fund;
  border: 1px solid #666;
}

.box {
  @include customized-box($fund: #ccc);
}
```

## Operators

```scss
p {
  font-size: 10px + 20px;
  font-size: 25px - 5px;
  font-size: 20px / 2;
  font-size: 5px * 3;
}
```
