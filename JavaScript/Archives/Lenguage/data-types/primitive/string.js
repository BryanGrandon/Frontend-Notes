/** Create string
 *  - " "
 *  - ' '
 *  - ` `
 */

// Concatenation

console.log("Hello" + "World");

// Interpolate

let user = "Bryan";
let backticks = `The user is ${user}`;
console.log(backticks); // The user is Bryan

let dynamicHtmlGeneration = `<ul>
    <li></li>
    <li></li>
</ul>`;

// Special characters

const stecialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

// Property

const length = "Hello world".length;
console.log(length);

// Methods

let testText = "User and id";

const accessing = {
  start: testText[0],
  end: testText.at(-1),
};
console.log(accessing);

const search = {
  exists: testText.indexOf("and"),
  notExists: testText.indexOf("coffee"),

  includes: testText.includes("er a"),
  startsWith: testText.startsWith("Use"),
  endsWith: testText.endsWith("d id"),
};
console.log(search);

// To Lowercase and uppercase

const change = (text) => {
  let changeText = `toLowerCase:[${text.toLowerCase()}], toUpperCase:[${text.toUpperCase()}]`;
  console.log(changeText);
};
change("TeXt");

// Trim

console.log("   spaces  ".trim());
