function number(number) {
  if (isNaN(number)) throw new Error("Parameter is not a number!");
}

try {
  number("a");
} catch (e) {
  console.error(e);
}
