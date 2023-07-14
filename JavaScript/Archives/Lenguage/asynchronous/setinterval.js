"use strict";
/** setInterval(func|code, [delay], [arg1], [arg2], ...)
 *   Run the code indefinitely
 */

let timerInterval = setInterval(() => {
  console.log("tick");
}, 2000);

setTimeout(() => {
  clearInterval(timerInterval);

  console.log("Stop");
}, 7000);
