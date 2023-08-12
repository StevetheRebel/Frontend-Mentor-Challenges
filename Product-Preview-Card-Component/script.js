const btn = document.getElementById("btn");
btn.style.backgroundColor = "var(--pri-darkCyan)";

function activeBtn() {
  btn.style.backgroundColor = "var(--pri-darkerCyan)";
}

function resetBtn() {
  btn.style.backgroundColor = "var(--pri-darkCyan)";
}

function btnPress () {
	if (btn.style.backgroundColor == "var(--pri-darkCyan)") {
		activeBtn()
	} else {
		resetBtn()
	}
}

btn.addEventListener('click', btnPress)
