// Loops offer a quick and easy way to do something repeatedly.

// -------- Loops -------- //

// For //
const array = ["string", 34, true];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Do While //
const conditional = false;
do {
  console.log("Do While");
} while (conditional);

// While //
conditional = true;
while (conditional) {
  console.log("While");
  conditional = false;
}

// -------- Iterations -------- //

// Break //
for (let i = 0; i < 100; i++) {
  if (i === 5) break;
  console.log(i);
}

// Continue //
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Label //
label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
    console.log(x);
  }
  console.log(i);
}
