let form = document.getElementById("rate-form");
let submitButton = document.querySelector("button");
let cards = document.querySelectorAll(".card");
let selectedRateSpan = document.getElementById("selected-rate");

console.log(selectedRateSpan);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let selectedRadio = form.querySelector('input[name="rate-number"]:checked');

  if (selectedRadio == null) return alert("Please, select an option...");

  selectedRateSpan.innerHTML = selectedRadio.value;

  cards[1].style.display = "flex";
  cards[0].style.display = "none";

  setTimeout(() => {
    cards[0].style.opacity = 0;
    cards[1].style.opacity = 1;
  }, 50);
});
