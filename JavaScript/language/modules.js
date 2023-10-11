"use strict";
/*
    Modules encapsulate all sorts of code like functions and variables and expose all this to other files.
*/

// -------- Export -------- //

/** Named //
 * The name of the imported data is the one that allows us to import it to another file.
 * There may be multiple exports.
 */
export let variable = "variable";
export const array = [1, 2, 3, 4];
export const object = {
  id: 1,
  user: "Bryan",
  email: "@gmail.com",
};
export function forExport() {
  console.log(`Function Exported`);
}
// export {variable, object, array, forExport}

/** Default //
 * There can only be one export default.
 * Note that it is not possible to use var, let, or const with export default.
 */

export default function forExportDefault() {
  console.log(`Export Default`);
}

// -------- Import -------- //

// Export Default
import forExportDefault, {
  // Export
  array,
  forExport,
  object,
  variable,
} from "./export.js";

// Export
const obj = object;
console.log(obj);
let data = variable;
console.log(data);
const arr = array;
console.log(arr);
forExport("Bryan");

// Export Default
forExportDefault();
