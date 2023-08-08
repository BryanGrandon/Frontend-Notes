// Number Method

let decimal = 5.12345;
decimal = decimal.toFixed(2);

// String Methods

let string = "Hello World";

const accessing = {
  start: string[0],
  end: string.at(-1),
};
console.log(accessing);

const search = {
  exists: string.indexOf("Hello"), // not Exists = -1
  includes: string.includes("lo W"),
  startsWith: string.startsWith("Hel"),
  endsWith: string.endsWith("ld"),
};
console.log(search);

const change = (text) => {
  const lowerCase = text.toLowerCase();
  const upperCase = text.toUpperCase();

  let changeText = `toLowerCase:[${lowerCase}], toUpperCase:[${upperCase}]`;
  console.log(changeText);
};
change("TeXt");
