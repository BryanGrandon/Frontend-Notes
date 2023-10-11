/*
    Comparison operators are used in logical statements to determine equality or
     difference between variables or values.
*/

// -------- Is Loosely Equal -------- //

3 == "3" ? console.log(true) : console.log(false);

// -------- Is Strictly Equal -------- //

3 === "3" ? console.log(true) : console.log(false);

// -------- Same Value -------- //

Object.is(3, "3") ? console.log(true) : console.log(false);
