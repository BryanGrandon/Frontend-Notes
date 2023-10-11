(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Error in the catch";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
})();

// Async - Await

(() => {
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
})();
