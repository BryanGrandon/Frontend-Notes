(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let json = res.data;

      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(`Catch ${err}`);
      $axios.innerHTML = `Error ${err.response.status} : ${err.response.statusText}`;
    });
})();

// Async - Await

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((e) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (error) {
      $axiosAsync.innerHTML = `Error ${error.response.status} : ${error.response.statusText}`;
    }
  }
  getData();
})();
