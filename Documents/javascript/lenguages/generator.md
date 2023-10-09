# [Generator](/JavaScript/Lenguage/generators/generators.js)

Iterators and generators, introduced into JavaScript with ECMAScript 6, represent an extremely useful concept related to iteration in the language.

Iterators are objects, abiding by the iterator protocol, that allows us to easily iterate over a given sequence in various ways, such as using the for...of loop.

Generators, on the other hand, allow us to use functions and the yield keyword to easily define iterable sequences that are iterators as well.

```js
function* generate() {
  yield;
}
```