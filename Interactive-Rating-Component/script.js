const btns = document.querySelectorAll(".rate");
const submit = document.getElementById("submit-btn");
const ratingContainer = document.getElementById("rating-container");
const appreciationContainer = document.getElementById("appreciation");
const ratePick = document.getElementById("pick");

function ratedDisplay() {
  ratingContainer.style.display = "none";
  appreciationContainer.style.display = "flex";
}

for (let x of btns) {
  x.addEventListener("click", () => {
    ratePick.innerHTML = `You selected ${x.value} out of 5`
  });
}

submit.addEventListener("click", ratedDisplay);
