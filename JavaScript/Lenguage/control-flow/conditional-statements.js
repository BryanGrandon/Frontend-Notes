// ---- ---- IF, ELSE IF, ELSE ---- ---- //

let value = 5;

// IF

if (value == 1) {
  console.log("IF");
}

// ELSE IF
else if (value == 2) {
  console.log("ELSE IF (1)");
} else if (value == 3) {
  console.log("ELSE IF (2)");
} else if (value == 4) {
  console.log("ELSE IF (3)");
}

// ELSE
else {
  console.log("Last option");
}

// ---- ---- Switch ----- ---- //

let option = Math.round(Math.random() * 3);
console.log(option);

switch (option) {
  case 1:
    console.log(`If the option is 1`);
    break;

  case 2:
    console.log(`If the option is 2`);
    break;

  case 3:
    console.log(`If the option is 3`);
    break;

  default:
    console.log(`option default`);
    break;
}
