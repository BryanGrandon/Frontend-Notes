// Cloning 1

const person_1 = {
  eyes: "brown",
  hair: "Black",
  skin: "skin-color-1",
};

const clon_1 = Object.assign({}, person_1);
console.log(clon_1);

// Cloning 2

const person_2 = {
  hair: "brown",
  skin: "skin-color-2",
};

const person_3 = {
  skin: "skin-color-3",
  height: 168,
};

const clon_2 = Object.assign({}, person_1, person_2, person_3);
console.log(clon_2);
