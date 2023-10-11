/* 
    in JavaScript, the Control flow is a way of how your computer runs code from top to bottom.
    unless it hits any statement that changes the control flow of the program such as loops, 
    conditionals, etc.
*/

// -------- Conditional Statements -------- //

// IF, ELSE IF, ELSE //
let value = 5;

// if
if (value == 1) {
  console.log("IF");
}
// else if
else if (value == 2) {
  console.log("ELSE IF (1)");
} else if (value == 3) {
  console.log("ELSE IF (2)");
} else if (value == 4) {
  console.log("ELSE IF (3)");
}
// else
else {
  console.log("Last option");
}

// Switch //
let option = Math.round(Math.random() * 3);
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

// -------- Exception Handling -------- //

// try, catch, finally //
try {
  // code to evaluate
  errorInTry;
} catch (error) {
  // Catch any errors raised in the (try {})
  console.log(error);
} finally {
  //  It will be executed at the and of the try-case
  console.log(`finished code test`);
}

// throw //
function number(number) {
  if (isNaN(number)) throw new Error("Parameter is not a number!");
}
try {
  number("a");
} catch (e) {
  console.error(e);
}
