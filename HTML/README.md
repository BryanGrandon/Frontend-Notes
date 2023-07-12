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

## [Metadata](/HTML/Archives/metadata.html)

- Character encoding System
- Responsive design for wed page
- Title for the website (55 and 65 character)
- A website description for each HTML document
- Tab Website icon (img, links)
- Style of a CSS document

## [Label Group](/HTML/Archives/label-group.html)

- `<p>`
- `<pre>`
- `<blockquote>`
- `<ol>`
  - `<li>`
- `<ul>`
  - `<li>`
- `<dl>`
  - `<dt>`, `<dd>`
- `<figure>`
  - `<figcaption>`

## [Label Text](/HTML/Archives/label-text.html)

| Tags       | Description     |
| ---------- | --------------- |
| `<strong>` | Strong Text     |
| `<em>`     | Emphasized Text |
| `<mark>`   | Highlighted     |
| `<i>`      | Italica         |
| `<b>`      | Bold            |
| `<s>`      | Strikethrough   |
| `<span>`   | Span            |
| `<cite>`   | Cites           |
| `<br>`     | Line Break      |
| `<hr>`     | Horizontal rule |
| `<a>`      | Link            |

## [Content Types](/HTML/Archives/content-type.html)

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

## [Interactive](/HTML/Archives/interactive-tag.html)

- Dropdown ( `<details>` ) [ `<summary>` ]
- Dialog Window ( `<dialog>` )

## [Scripts](/HTML/Archives/metadata.html)

1. `defer` attribute:
   - defer script execution to end of page load
2. `async` attribute:
   - Run the script as soon as it is available

## [Semantic](/HTML/Archives/semaintic.html)

- Titles
- `<main>`
- `<div>`
- `<header>`
- `<section>`
- `<article>`
- `<footer>`
- `<aside>`
- `<address>`
