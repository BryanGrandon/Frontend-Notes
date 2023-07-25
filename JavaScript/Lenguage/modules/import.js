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
