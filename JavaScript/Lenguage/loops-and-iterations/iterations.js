// ---- ---- Break, Continue, label ---- ---- //

// Break

for (let i = 0; i < 100; i++) {
  if (i === 5) break;
  console.log(i);
}

// Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Label

label: for (let i = 0; i < 5; i++) {
  for (let x = 1; x <= 3; x++) {
    if (x === 3) break label;
    console.log(x);
  }
  console.log(i);
}

// ---- ---- For In ---- ---- //

const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in object) {
  console.log(key);
  console.log(object[key]);
}

// ---- ---- For Of ---- ---- //

const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}
