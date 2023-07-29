// Set the type of data to be output by the function
function getNumber(): number {
  return Math.floor(Math.random() * 100);
}
console.log("Random: " + getNumber());

// set the type of data to be entered to the function
function pritPosition(position: { lat: number; long: number }) {
  console.log(`LAT: ${position.lat} LOG: ${position.long}`);
}

pritPosition({ lat: 3, long: 55 });

/* Void
    - void represents the return value of functions which don’t return a value */

function isAFunctionVoid(): void {
  console.log("don't return a value");
}
