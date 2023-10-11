"use strict";
/*
    Asynchronous programming is a technique that enables your program to start a potentially
    long-running task and still be able to be responsive to other events while that task runs, 
    rather than having to wait until that task has finished.
*/

// -------- setTimeout -------- // (func|code, [delay], [arg1], [arg2], ...)
/* 
    The setTimeout runs a function after the specified period expires. 
    Times are declared in milliseconds.
*/

let user = "Bryan";
const f1 = (name) => {
  console.log(`Hello ${name}`);
};
let timerF1 = setTimeout(f1, 1000, user);
clearTimeout(timerF1);

let timer = setTimeout(
  (name) => {
    console.log(`Bye ${name}`);
  },
  1000,
  user
);

// -------- setInterval -------- // (func|code, [delay], [arg1], [arg2], ...)
/*
  setInterval() is similar to setTimeout, with one difference. Instead of executing the callback 
  function once, it will execute it forever, at the specified time interval
*/

let timerInterval = setInterval(() => {
  console.log("tick");
}, 2000);
setTimeout(() => {
  clearInterval(timerInterval);
  console.log("Stop");
}, 7000);

// -------- Event Loop -------- //
/* 
    Synchronous: The synchronous operation you wait for the result..
    Asynchronous: The asynchronous operation does not wait for the result. 
*/

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
// execution order -> 1, 3, 2

// -------- Callback -------- //
/*
    A callback function is a function passed into another function as an argument, 
    which is then invoked inside the outer function to complete some kind of routine or action.
*/

function modify(array, callback) {
  array.push("bryan");
  callback(array);
}
const names = ["catalina", "cecilia"];
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

// -------- Promise -------- //
/*
    Promises are a much better way to work with asynchronous code in JavaScript than 
    the old and error-prone callback approach.
*/

const callAnAPI = () => {
  return { data: "API" };
};
const promise = new Promise((resolve, reject) => {
  const data = callAnAPI();
  if (data) {
    resolve(data);
  } else {
    reject(Error("An error occurred"));
  }
});
promise
  .then((data) => {
    // Use the data
    console.log("the data is:", data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });

/* --- Example --- */

function elevationPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `mistake. The entered value '${value}' is not a number`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, Math.random() * 1000);
  });
}
elevationPromise(0)
  .then((obj) => {
    console.log("Start of promise");
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(1);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(2);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(3);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise(4);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return elevationPromise("s");
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    console.log("Finished promise");
  })
  .catch((err) => {
    console.error(err);
  });

// -------- Async / Await -------- //
/*
  async/await is a special syntax to work with promises in a more comfortable fashion. 
  We use async keyword to declare a async function that return a Promise, and the await keyword 
  makes a function wait for a Promise.
*/

function elevationPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `mistake. The entered value '${value}' is not a number`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, Math.random() * 1000);
  });
}

//  Async
async function asynchronousFunction() {
  try {
    console.log("Start Async Function");

    // await -> wait for the result
    let obj = await elevationPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await elevationPromise("5");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Finished Async Function");
  } catch (err) {
    console.error(err);
  }
}
asynchronousFunction();
