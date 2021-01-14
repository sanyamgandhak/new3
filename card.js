// const cards = document.querySelector(".card__inner");

// cards.addEventListener("click", function (e) {
//   this.classList.toggle('is-flipped');
// });

// cards.forEach((card) => card.addEventListener("click", e));


const cards = document.querySelectorAll(".card__inner");

function flipcard() {
  this.classList.toggle('is-flipped');
};

cards.forEach((card) => card.addEventListener("click", flipcard));