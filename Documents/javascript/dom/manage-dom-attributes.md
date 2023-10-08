# Manage DOM attributes

HTML tags have certain attributes that define the behavior of the tag.

- [JS](/JavaScript/Document-Object-Model/attributes/script.js)
- [HTML](/JavaScript/Document-Object-Model/attributes/index.html)

## Get HTML Attributes

| Attributes            | What it does                                                                         |
| --------------------- | ------------------------------------------------------------------------------------ |
| `hasAttributes()`     | Indicates whether the element has HTML attributes.                                   |
| `hasAttribute(attr)`  | Indicates whether the element has the HTML attr attribute.                           |
| `getAttributeNames()` | Returns an array with the attributes of the element.                                 |
| `getAttribute(attr)`  | Returns the value of the attr attribute of the element or null if it does not exist. |

## Modify or Delete HTML attributes

| Attributes                     | What it does                                                               |
| ------------------------------ | -------------------------------------------------------------------------- |
| `setAttribute(attr, value)`    | Adds or changes the attr attribute to the value value of the HTML element. |
| `toggleAttribute(attr, force)` | Adds attr attribute if it does not exist, if it does exist, removes it.    |
| `removeAttribute(attr)`        | Removes the attr attribute from the HTML element.                          |
