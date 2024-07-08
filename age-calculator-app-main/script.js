document.getElementById("run-btn").addEventListener("click", calculateAge);

function calculateAge() {
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;

  if (isValidDate(dayInput, monthInput, yearInput)) {
    const inputDate = new Date(`${yearInput}-${monthInput}-${dayInput}`);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();
    let days = currentDate.getDate() - inputDate.getDate();

    if (days < 0) {
      months -= 1;
      days += daysInMonth(
        currentDate.getMonth() - 1,
        currentDate.getFullYear()
      );
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }
}

function isValidDate(day, month, year) {
  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) {
    errorDay();
    isValid = false;
  }
  if (isNaN(month) || month < 1 || month > 12) {
    errorMonth();
    isValid = false;
  }
  if (isNaN(year) || year.toString().length !== 4) {
    errorYear();
    isValid = false;
  }

  const date = new Date(`${year}-${month}-${day}`);
  if (
    date.getDate() != day ||
    date.getMonth() + 1 != month ||
    date.getFullYear() != year
  ) {
    if (isValid) {
      if (date.getDate() != day) errorDay();
      if (date.getMonth() + 1 != month) errorMonth();
      if (date.getFullYear() != year) errorYear();
    }
    isValid = false;
  }

  return isValid;
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function errorDay() {
  const label = document.querySelector(".input.day-ctn label");
  const input = document.querySelector(".input.day-ctn input");
  const errorMsg = document.querySelector(".input.day-ctn p");
  label.style.color = "red";
  input.style.border = "0.25px solid red";
  errorMsg.style.visibility = "visible";
}

function errorMonth() {
  const label = document.querySelector(".input.month-ctn label");
  const input = document.querySelector(".input.month-ctn input");
  const errorMsg = document.querySelector(".input.month-ctn p");
  label.style.color = "red";
  input.style.border = "0.25px solid red";
  errorMsg.style.visibility = "visible";
}

function errorYear() {
  const label = document.querySelector(".input.year-ctn label");
  const input = document.querySelector(".input.year-ctn input");
  const errorMsg = document.querySelector(".input.year-ctn p");
  label.style.color = "red";
  input.style.border = "0.25px solid red";
  errorMsg.style.visibility = "visible";
}
