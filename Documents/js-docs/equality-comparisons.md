# Equality Comparisons

Comparison operators are used in logical statements to determine equality or difference between variables or values.

## Is Loosely Equal ( `==` )

The == operator does the type conversion of the operands before comparison.

```js
3 == "3" ? console.log(true) : console.log(false);
```

## Is Strictly Equal ( `===` )

The === operator compares the values and the data types of the operands.

```js
3 === "3" ? console.log(true) : console.log(false);
```

## Same Value ( `Object.is()` )

The Object.is() method determines whether two values are the same value.

```js
Object.is(3, "3") ? console.log(true) : console.log(false);
```
