// Fetch is the name of a new API for Javascript with which we can make asynchronous HTTP requests using promises and in a way that makes the code a little simpler.
// Async - Await

const $fetchAsync = document.getElementById("fetch-async"),
  $fragment = document.createDocumentFragment();

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((e) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
      $fragment.appendChild($li);
    });

    $fetchAsync.appendChild($fragment);
  } catch (error) {
    $fetchAsync.innerHTML = `Error ${error.status} : ${error.statusText}`;
  }
}
getData();
