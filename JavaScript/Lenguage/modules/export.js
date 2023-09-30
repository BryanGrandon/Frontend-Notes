// -------- Export named -------- //

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

// export {variable, object, array, forExport}

// -------- Export default -------- //

export default function forExportDefault() {
  console.log(`Export Default`);
}
