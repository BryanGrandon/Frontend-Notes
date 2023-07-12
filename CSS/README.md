# CSS Notes

Cascading Style Sheets (CSS), which allow us to add styles to HTML documents.

## [Selectors](/CSS/Archives/Selectors/)

### [Basic selector](/CSS/Archives/Selectors/basic-selectors.css)

- All element ( `*` )
- Element ( `div` )
- Class ( `.class` )
- Id ( `#id` )

### [Advanced selector](/CSS/Archives/Selectors/advanced-selectors.css)

- Descendant ( `.parent .child` )
- Direct descendant ( `.parent > .child` )
- Adjacent sibling ( `.child + .sibling` )
- Far sibling ( `.child ~ .sibling` )
- Have both classes ( `.class1.class2` )
- Atribute ( `[disabled]` )

### [Pseudo-classes](/CSS/Archives/Selectors/pseudo-classes.css)

- `:hover`
- `:active`
- `:link` `:visited`
- `:focus` `:required` `:valid` `:invalid`
- `:disabled`
- `:target`

### [Pseudo-class variations](/CSS/Archives/Selectors/psedo-classes-variations.css)

- `:first-of-type` `:last-of-type` `:nth-of-type`
- `:first-child` `:last-child` `:nth-child`

### [Pseudo Element](/CSS/Archives/Selectors/pseudo-element.css)

- `::first-letter`
- `::first-line`
- `::selection`
- `::before`
- `::after`

## [Fonts](/CSS/Archives/fonts.css)

| Font            | variables                                           |
| --------------- | --------------------------------------------------- |
| font-family     | `font`                                              |
| font-size       | `size`                                              |
| font-weight     | `bold`, `dolder`, `lighter`, `normal`, `100`, `900` |
| font-style      | `italic`, `oblique`, `normal`                       |
| text-align      | `left`, `right`, `center`, `justify`                |
| text-decoration | `overline`, `line-though`, `underline`, `none`      |
| text-transform  | `capitalize`, `uppercase`, `lowercase`              |
| letter-spacing  | `size`                                              |
| line-height     | `number`                                            |

## [Lengths](/CSS/Archives/lengths.css)

### Absolute length units

| Unit | Name        |
| ---- | ----------- |
| `in` | inches      |
| `cm` | centimetres |
| `mm` | milimetres  |
| `pt` | points      |
| `pc` | picas       |
| `px` | pixels      |

### Relative length units

| Unit   | Relative to                               |
| ------ | ----------------------------------------- |
| `em`   | Font-size of the element                  |
| `rem`  | Font size of the root element.            |
| `vw`   | 1% of the viewport's width.               |
| `vh`   | 1% of the viewport's height.              |
| `vmin` | 1% of the viewport's smaller dimension.   |
| `vmax` | 1% of the viewport's larger dimension.    |
| `%`    | Percentage relative to the parent element |

## [Colours](/CSS/Archives/colours.css)

- Keyword
- Hexadecimal
- RGB ( red, green, blue )
- HSL ( hue, saturation, lightness )
- Alpha ( 1-0, 0%-100% )

## [Box Model](/CSS/Archives/box-model.css)

| Name       | variables                         |
| ---------- | --------------------------------- |
| Padding    | `top`, `right` , `botton`, `left` |
| Margin     | `top`, `right` , `botton`, `left` |
| Width      | `max-width`, `min-width`          |
| Height     | `max-height`, `min-height`        |
| border     | `width`, `style`, `color`         |
| box-sizing | `border-box`, `content-box`       |

## [Position](/CSS/Archives/position.css)

- `static`
- `relative`
- `absolute`
- `fixed`
- `static`

## [Background](/CSS/Archives/background.css)

| Name                  | Variable                                      |
| --------------------- | --------------------------------------------- |
| background-color      | hexadecimal, keyword, `rgb()`, `hsl()`        |
| background-image      | `url("")`                                     |
| background-repeat     | `repeat-x`, `repeat-y`, `repeat`, `no-repeat` |
| background-position   | `position-x`, `position-y`                    |
| background-attachment | `fixed`, `scroll`                             |
| background-clip       | `border-box`, `content-box`, `padding-box`    |
| background-size       | `auto` , `contain`, `cover`                   |
| opacity               | 0 - 1 , 0% - 100%                             |

## [Display](/CSS/Archives/display.css)

- `block`
- `inline`
- `inline-block`
- `none`

### [Flex](/CSS/Archives/display-flex.css)

- `flex`
- `inline-flex`

| Name            | Variable                                                                            |
| --------------- | ----------------------------------------------------------------------------------- |
| flex-direction  | `row`, `row-reverse`, `column`, `column-reverse`                                    |
| flex-wrap       | `nowrap`, `wrap`, `wrap-reverse`                                                    |
| justify-content | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| align-items     | `flex-start`, `center`, `flex-end`, `strech`                                        |
| gap             | `size`                                                                              |

## Variables

```css
:root {
  --variable-color: #f00;
  --variable: 20px;
}

.class {
  color: var(--variable-color);
}
```
