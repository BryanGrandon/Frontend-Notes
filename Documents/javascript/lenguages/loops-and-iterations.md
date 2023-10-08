# Loops and Iterations

Loops offer a quick and easy way to do something repeatedly.

## Loops

### The for loop

It’s commonly used to iterate over given sequences or iterate a known number of times and execute a piece of code for each iteration.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

- `For in`
- `For of`

### Do While statement

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.

The condition is evaluated after executing the statement.

```js
const conditional = 2 > 1;

do {
  console.log("Do While");
} while (conditional);
```

### While statement

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

The condition is evaluated before executing the statement.

```js
while (conditional) {
  console.log("While");
}
```

## Iterations

### Break

break statement, without a label reference, can only be used to jump out of a loop or a switch block.

```js
for (let i = 0; i < 100; i++) {
  if (i === 5) break;
  console.log(i);
}
```

### Continue

continue statement, with or without a label reference, can only be used to skip one loop iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

### Label

JavaScript label statements are used to prefix a label to an identifier. It can be used with break and continue statement to control the flow more precisely.

```js
label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
    console.log(x);
  }
  console.log(i);
}
```
