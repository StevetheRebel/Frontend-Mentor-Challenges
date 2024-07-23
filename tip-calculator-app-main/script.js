const tips = document.querySelectorAll(".tip");
const bill = document.getElementById("bill");
const numPeople = document.getElementById("no-people");
const resetBtn = document.getElementById("reset");
const errorAlert = document.querySelector(".error");
const tipPerPerson = document.getElementById("tip-person");
const amountPerPerson = document.getElementById("amount-person");
const tipPercentInput = document.getElementById("tip-input");
let tipPercent;
// styling component
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    removeActive();
    tip.classList.toggle("active");
    tipPercent = tip.value;
    tipPercentInput.value = "";
  });
});

function removeActive() {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
}

numPeople.addEventListener("input", () => {
  resetBtn.style.opacity = "1";
  errorMsg();
  tipPerPerson.innerText = `${(Math.floor(output1() * 100) / 100).toFixed(2)}`;
  amountPerPerson.innerText = `${output2().toFixed(2)}`;
});

bill.addEventListener("input", () => {
  errorMsg();
});

// show error function

function errorMsg() {
  if (numPeople.value == "") {
    errorAlert.style.display = "block";
  } else {
    errorAlert.style.display = "none";
  }
}

// I have this here for now
resetBtn.addEventListener("click", () => {
  location.reload();
});

// end of styling component

// calculation functions

function getTipValue() {
  if (tipPercentInput.value == "") {
    return tipPercent;
  } else {
    tipPercent = tipPercentInput.value;
  }

  return tipPercent;
}

function output1(x, y, z) {
  x = bill.value;
  y = getTipValue();
  z = numPeople.value;

  let tipAmount = (x * y) / 100;

  return tipAmount / z;
}

function output2(x, y, z) {
  x = Number(bill.value);
  y = Number(getTipValue());
  z = Number(numPeople.value);

  let stepOne = x * y / 100;
  let stepTwo = stepOne + x;
  let result = stepTwo / z;

  return result;
}
