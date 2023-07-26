# APIs Notes

## Asynchronous JavaScript And XML (AJAX)

### [XMLHttpRequest (XMR)](/JavaScript/Working-with-APIs/AJAX/XMLHttpRequest/)

XMLHttpRequest (XHR) is a special JavaScript object that allows asynchronous HTTP requests (AJAX) to be made natively from JavaScript.

### [Fetch](/JavaScript/Working-with-APIs/AJAX/Fetch/)

Fetch is the name of a new API for Javascript with which we can make asynchronous HTTP requests using promises and in a way that makes the code a little simpler.

```js
const promise = fetch("/robots.txt");

promise.then(function (response) {
  /* ... */
});
```

### [Axios](/JavaScript/Working-with-APIs/AJAX/Axios/)

Promise-based library for making requests in Node or in browsers.
