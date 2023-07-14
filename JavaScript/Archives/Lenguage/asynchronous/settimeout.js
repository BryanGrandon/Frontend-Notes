"use strict";
/** setTimeout(func|code, [delay], [arg1], [arg2], ...)
 *    Run the code once
 */

let user = "Bryan";

const f1 = (name) => {
  console.log(`Hello ${name}`);
};

let timerF1 = setTimeout(f1, 1000, user);

clearTimeout(timerF1);

let timer = setTimeout(
  (name) => {
    console.log(`Bye ${name}`);
  },
  1000,
  user
);
