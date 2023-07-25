let user = {
  name: "Bryan",
  lastName: "Moreno",
  toString() {
    return this.name.toUpperCase();
  },
};

// Writable

Object.defineProperty(user, "name", {
  writable: false, // not rename value
});

// Enumerable

Object.defineProperty(user, "toString", {
  enumerable: false, // not iterable
});
for (let key in user) console.log(key);

// Configurable

Object.defineProperty(user, "lastName", {
  configurable: false, // not delete
});

// Object.defineProperties

const user_2 = {
  name: "Cecilia",
  lastName: "Correa",
};

Object.defineProperties(user_2, {
  name: { value: "Cecilia", writable: false },
  lastName: { value: "Correa", writable: false },
});

// Clone object and properties

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(clone);
