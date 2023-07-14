/* Synchronous: The synchronous operation you wait for the result..
Asynchronous: The asynchronous operation does not wait for the result. */

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// execution order -> 1, 3, 2
