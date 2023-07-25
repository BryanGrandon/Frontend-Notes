/** Export named:
 *  - The name of the imported data is the one that allows us to import it to another file.
 *  - There may be multiple exports
 */

export let variable = "variable";

export const object = {
  id: 1,
  user: "Bryan",
  email: "@gmail.com",
};

export const array = [1, 2, 3, 4];

export function forExport() {
  console.log(`Function Exported`);
}

/** Export default
 *  - There can only be one export default
 *  - Note that it is not possible to use var, let, or const with export default.
 */

export default function forExportDefault() {
  console.log(`Export Default`);
}
