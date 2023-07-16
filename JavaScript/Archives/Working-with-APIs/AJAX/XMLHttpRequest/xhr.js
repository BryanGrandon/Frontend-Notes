const xhr = new XMLHttpRequest(),
  $xhr = document.getElementById("xhr"),
  $fragment = document.createDocumentFragment();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;

  if (xhr.status >= 200 && xhr.status < 300) {
    let json = JSON.parse(xhr.responseText);
    json.forEach((e) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
      $fragment.appendChild($li);
    });

    $xhr.appendChild($fragment);
  } else {
    console.log("Error");
    let message = xhr.statusText || "Error";
    $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
  }
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.send();
