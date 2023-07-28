/** As Cost
 *  - The value must be treated as a read-only value.
 */

const colors = ["red", "green", "blue"] as const;
// colors[0] = "violet"; // Error

/** As Type
 *  - Allows us to specify the data type, regardless of its inferred type.
 */

let num = 21;
// let str = num as string; // str is now of type string, even though num is a number

/** As Any
 *  - any is a special type in TypeScript that represents a value of any type.
 */

let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = "Hello, world!";
anyValue = true;
