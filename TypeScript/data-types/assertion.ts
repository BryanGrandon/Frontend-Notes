/** As Const
 *  - The value must be treated as a read-only value.
 */

const onlyReadColors = ["red", "green", "blue"] as const;

/** As Type
 *  - Allows us to specify the data type, regardless of its inferred type.
 */

let specifyType_1: number;
specifyType_1 = 28;

let variableRandom = "string";
let specifyType_2 = variableRandom as string;
