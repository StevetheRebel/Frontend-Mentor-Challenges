const tips = document.querySelectorAll(".tip");

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    removeActive();
    tip.classList.toggle("active");
  });
});

function removeActive() {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
}
