# CSS Notes

## Selectors

### [Basic selector](/CSS/basic-selector.css)

- All element
- Element
- Class ( `.` )
- Id ( `#` )

### [Advanced selector](/CSS/advanced-selector.css)

- Descendant
- Direct descendant ( `>` )
- Adjacent sibling ( `+` )
- Far sibling ( `~` )
- Have both classes ( `.n.n` )
- Atribute ( `[]` )

### [Pseudo-classes](/CSS/pseudo-classes.css)

- `:hover`
- `:active`
- `:link`
- `:visited`
- `:focus`
- `:required`
- `:valid`
- `:invalid`
- `:disabled`
- `:target`
- `:first-of-type` `:last-of-type` `:nth-of-type`
- `:first-child` `:last-child` `:nth-child`

### [Pseudo element](/CSS/pseudo-element.css)

- `::first-letter`
- `::first-line`
- `::selection`
- `::before`
- `::after`

## [Fonts](/CSS/fonts.css)

- font-family: `font`
- font-size: `size`
- font-weight: `bold` `dolder` `lighter` `normal` `100` `900`
- font-style: `italic` `oblique` `normal`
- text-align: `left` `right` `center` `justify`
- text-decoration: `overline` `line-though` `underline` `none`
- text-transform: `capitalize` `uppercase` `lowercase`
- letter-spacing: `size`
- line-height: `number`

## Lengths

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

## [Colours](/CSS/colours.css)

- Keyword
- Hexadecimal
- RGB ( red, green, blue )
- HSL ( hue, saturation, lightness )
- Alpha ( 1-0, 0%-100% )

## [Box Model](/CSS/box-model.css)

- padding: `top` `right` `bottom` `left`
- margin: `top` `right` `bottom` `left`
- width: `max-width` `min-width`
- height: `max-height` `min-height`
- border: `width` `style` `color`
- box-sizing: `border-box` `content-box`

## Position

### `static`

The element is positioned according to the normal document flow.

### `relative`

The element is positioned according to the normal flow of the document, and then offset relative to itself, based on the values of top, right, bottom, and left. The offset does not affect the position of any other element.

### `absolute`

An element with position: absolute is removed from the normal document flow. It is automatically positioned at the starting point of its parent element.

### `fixed`

Fixed positioning causes an element to be positioned relative to the viewport. You tell it where to position the element, and it stays there while the user scrolls.

### `sticky`

Sticky positioning can be considered a hybrid of relative and fixed positioning.

## [Background](/CSS/background.css)

- background-color: `color`
- background-image: `url("")`
- background-repeat: `repeat-x` `repeat-y` `repeat` `no-repeat`
- background-position: `position-x` `position-y`
- background-attachment: `fixed` `scroll`
- background-clip: `border-box` `content-box` `padding-box`
- background-size: `auto` `contain` `cover`
- opacity: 0 - 1 , 0% - 100%

## Display

- `block`
- `inline`
- `inline-block`
- `none`

## [Flex](/CSS/display-flex.css)

- flex-direction: `row` `row-reverse` `column` `column-reverse`
- flex-wrap: `nowrap` `wrap` `wrap-reverse`
- justify-content: `flex-start` `center` `flex-end` `space-between` `space-around` `space-evenly`
- align-items: `flex-start` `center` `flex-end` `strech`
- gap: `size`

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
