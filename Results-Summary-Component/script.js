const btn = document.getElementById('btn');


function changeColor() {
	btn.style.backgroundColor = 'var(--sec-grayBlue)'
}

function resetColor() {
	btn.style.backgroundColor = 'var(--pri-cobaltBlue)'
}

function btnClick() {
	if (btn.style.backgroundColor === 'var(--sec-grayBlue)') {
		resetColor();
	} else {
		changeColor()
	}
}

btn.addEventListener('click', btnClick)