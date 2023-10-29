// AJAX => Asynchronous JavaScript And XML //

// -------- XHR -------- //
// XMLHttpRequest (XHR) is a special JavaScript object that allows asynchronous HTTP requests (AJAX) to be made natively from JavaScript.

(ajaxXhr = () => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragmentXhr = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragmentXhr.appendChild($li);
      });

      $xhr.appendChild($fragmentXhr);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();

// -------- Fetch -------- //
// Fetch is the name of a new API for Javascript with which we can make asynchronous HTTP requests using promises and in a way that makes the code a little simpler.

(ajaxFetch = () => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragmentFetch = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragmentFetch.appendChild($li);
      });

      $fetchAsync.appendChild($fragmentFetch);
    } catch (error) {
      $fetchAsync.innerHTML = `Error ${error.status} : ${error.statusText}`;
    }
  }
  getData();
})();

// -------- Axios -------- //
// Promise-based library for making requests in Node or in browsers.
{
  /* In the HTML:
  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js" defer></script> 
  */
}

(ajaxAxios = () => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragmentAxios = document.createDocumentFragment();

  async function getDataAxios() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragmentAxios.appendChild($li);
      });

      $axiosAsync.appendChild($fragmentAxios);
    } catch (error) {
      $axiosAsync.innerHTML = `Error ${error.response.status} : ${error.response.statusText}`;
    }
  }
  getDataAxios();
})();
