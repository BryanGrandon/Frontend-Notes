"use strict";
// It is a function that is passed as an argument

function modify(array, callback) {
  array.push("bryan");
  callback(array);
}

const names = ["catalina", "camila"];

modify(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});

// asynchronous

function modify2(array, callback) {
  array.push("andres");
  setTimeout(() => {
    callback(array);
  }, 3000);
}

modify2(names, (array) => {
  console.log(`Now the array is  ${array.length} elements`);
});
