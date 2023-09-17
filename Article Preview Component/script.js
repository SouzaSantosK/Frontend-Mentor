const shareButton = document.getElementById("share");
const footer = document.querySelector("footer");

shareButton.addEventListener("click", () => {
  footer.classList.toggle("hidden");
});
