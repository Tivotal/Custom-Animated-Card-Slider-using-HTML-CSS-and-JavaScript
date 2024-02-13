/* Created by Tivotal */

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.onclick = function () {
  let cards = document.querySelectorAll(".card");

  document.querySelector(".slider").appendChild(cards[0]);
  loadCards();
};

prev.onclick = function () {
  let cards = document.querySelectorAll(".card");

  document.querySelector(".slider").prepend(cards[cards.length - 1]);
};
