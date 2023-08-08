// ---- ---- Object ---- ---- //

const object = {
  key: "value",
  keyDelete: "value",
};
const objectMethod = {
  access: object.key,
  add: (object.key = "value"),
  delete: delete object.keyDelete,
  existingProperty: "key" in object,
};
const forObject = {
  keys: Object.Keys(object),
  values: Object.values(object),
  entries: Object.entries(object),
};

// ---- ---- Assign ---- ---- //

const cloneObject = Object.assign({}, object);

// ---- ---- Object.defineProperty() ---- ---- //

Object.defineProperty(object, "key", {
  writable: false, // Not rename value
  enumerable: false, // Not iterable
  configurable: false, // Not delete
});

Object.defineProperties(object, {
  key: { value: "Value", writable: true },
});

// Clone object and properties

let cloneObjectAndProperties = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(object)
);
