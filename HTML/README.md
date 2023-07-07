# HTML Notes

HTML (HyperText Markup Lenguage) it is a markup language that is used to create and structure the content of web pages.

## Document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## [Metadata](/HTML/metadata.html)

- Character encoding System
- Responsive design for wed page
- Title for the website (55 and 65 character)
- A website description for each HTML document
- Tab Website icon (img, links)
- Style of a CSS document

## Label Group

- Paragraph: ( `<p>` ) ( `<pre>` );
- Cites: ( `<blockquote>` );
- Lists: ( `ol` ) ( `ul` ) [ `li` ], ( `dl` ) [ `dt` ] [ `dd` ]
- Ilustraton Optional: ( `figure`) [ `figcaption` ]

## Label Text

- Strong Text ( `<strong>` )
- Emphasized Text ( `<em>` )
- Highlighted ( `<mark>`)
- Italica ( `<i>`)
- Bold ( `b` )
- Strikethrough ( `<s>` )
- link ( `a` ) target (`_blank`)
- span ( `<span>` )

## Content Types

### Image

```html
<img src="imageAddress.png" alt="Image Name" />
```

### Video

```html
<video src="videoAddress.mp4" controls></video>
```

### Audio

```html
<audio src="audioAddress.mp3" controls></audio>
```

## Label Table

- Create table ( `<table>` )
- Table title ( `<caption>` )
- Table header ( `<thead>` )
- Table row ( `<tr>` )
- Table head ( `<th>` )
- Table body ( `<tbody>` )
- Table data ( `<td>` )
- Table footer ( `<tfoot>` )

## Label Form

```html
<form action="">
  <fieldset>
    <legend>Fieldset name</legend>
    <label for="">Name input</label>
    <input type="" name="" id="" />

    <!-- Options -->
    <select name="" id="">
      <option value="option1">Opcion - 1</option>
      <option value="option2">Opcion - 2</option>
    </select>

    <input type="text" list="items" />
    <datalist id="items">
      <option value="1">Opcion 1</option>
      <option value="2">Opcion 2</option>
    </datalist>

    <!-- Button -->
    <button>Submit</button>
    <input type="submit" value="Submit" id="" />
  </fieldset>
</form>
```

## [Interactive](/HTML/interactive-tag.html)

- Dropdown ( `<details>` ) [ `<summary>` ]
- Dialog Window ( `<dialog>` )

## [Scripts](/HTML/metadata.html)

1. Defer attribute:
   - defer script execution to end of page load
2. Async attribute:
   - Run the script as soon as it is available

## [Semantic](/HTML/semaintic.html)

- Titles
- `<main>`
- `<div>`
- `<header>`
- `<section>`
- `<article>`
- `<footer>`
- `<aside>`
- `<address>`
