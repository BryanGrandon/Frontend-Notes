"use strict";
function eventDelegation(e) {
  alert(`The origin of the click is ${e.target.className}`);
}

/* we set the event to the document HTML */

document.addEventListener("click", (e) => {
  if (e.target.matches(".event-delegation section")) {
    eventDelegation(e);
  }
  if (e.target.matches(".event-delegation a")) {
    alert("direct to another page");
    e.preventDefault();
  }
});
