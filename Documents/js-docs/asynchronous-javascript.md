# Asynchronous JavaScript

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.

- Making HTTP requests using fetch()
- Accessing a user’s camera or microphone using getUserMedia()
- Asking a user to select files using showOpenFilePicker()

## [setTimeout](/JavaScript/Lenguage/asynchronous/settimeout.js)

The setTimeout runs a function after the specified period expires. Times are declared in milliseconds.

## [setInterval](/JavaScript/Lenguage/asynchronous/setinterval.js)

setInterval() is similar to setTimeout, with a difference. Instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):

## [Event Loop](/JavaScript/Lenguage/asynchronous/event-loop.js)

The Event Loop is one of the most important aspects to understand about Node.js. Why is this so important? Because it explains how Node.js can be asynchronous and have non-blocking I/O, it explains the “killer feature” of Node.js, which made it this successful.

## [Callback](/JavaScript/Lenguage/asynchronous/callback.js)

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## [Promise](/JavaScript/Lenguage/asynchronous/promise.js)

Promises are a much better way to work with asynchronous code in JavaScript than the old and error-prone callback approach.

## [Async Await](/JavaScript/Lenguage/asynchronous/async-await.js)

async/await is a special syntax to work with promises in a more comfortable fashion. We use async keyword to declare a async function that return a Promise, and the await keyword makes a function wait for a Promise.
