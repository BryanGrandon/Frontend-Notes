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
  - Exact ( `=` )
  - Has ( `~=` )
  - Exact or prefix ( `|=` )
  - Ends in ( `$=` )
  - Begins with ( `^=` )
  - Contains ( `*=` )

### [Pseudo-classes](/CSS/Archives/Selectors/pseudo-classes.css)

- `:hover`
- `:link`
- `:visited`
- `:active`
- `:focus`
- `:required`
- `:valid`
- `:invalid`
- `:disabled`
- `:target`

### [Pseudo-class variations](/CSS/Archives/Selectors/psedo-classes-variations.css)

- `:first-of-type`
- `:last-of-type`
- `:nth-of-type`
- `:first-child`
- `:last-child`
- `:nth-child`

### [Pseudo Element](/CSS/Archives/Selectors/pseudo-element.css)

- `::first-letter`
- `::first-line`
- `::selection`
- `::before`
- `::after`

## [Fonts](/CSS/Archives/fonts.css)

- `font-family:` | font |
- `font-size:` | size |
- `font-weight:` | bold | dolder | lighter | normal | 100 | 900 |
- `font-style:` | italic | oblique | normal |
- `text-align:` | left | right | center | justify |
- `text-decoration:` | overline | line-though | underline | none |
- `text-transform:` | capitalize | uppercase | lowercase |
- `letter-spacing:` | size |
- `line-height:` | number |
