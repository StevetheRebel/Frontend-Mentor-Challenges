const firstEmail = document.getElementById("email");
const firstEmailLabel = document.querySelector(".first-label");
const secondEmail = document.getElementById("sub-email");
const secondEmailLabel = document.querySelector(".sub-email-label");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  firstEmailLabel.style.display = "block";
  if (firstEmail.checkValidity()) {
    firstEmail.style.border = "1px solid green";
    firstEmailLabel.innerText = "Success";
    firstEmailLabel.style.color = "green";
  }
});

btn2.addEventListener("click", () => {
  secondEmailLabel.style.display = "block";
  if (secondEmail.checkValidity()) {
    secondEmail.style.border = "1px solid green";
    secondEmailLabel.innerText = "Success";
    secondEmailLabel.style.color = "hsl(240, 75%, 98%)";
  }
});
