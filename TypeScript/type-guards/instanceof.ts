// The instanceof operator is a way to narrow down the type of a variable.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(new Date());
// logValue("string");
