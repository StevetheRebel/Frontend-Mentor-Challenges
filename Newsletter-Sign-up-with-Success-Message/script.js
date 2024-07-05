const submit = document.getElementById("submit");
const dismiss = document.getElementById('dismiss')
const email = document.getElementById("email");
const signIn = document.getElementById("sign-in");
const confirmCtn = document.querySelector(".confirm-ctn");
const confirmMsg = document.querySelector(".confirm-msg");


function displayModal() {
    signIn.style.display = 'none';
    confirmCtn.style.display = 'flex';
}

function returnSignIn() {
    confirmCtn.style.display = 'none';
    signIn.style.display = 'flex';
    location.reload()
}

submit.addEventListener('click', () => {
    if (email.value === '') {
        alert('Add a valid email address')
    } else {
        displayModal();
        confirmMsg.innerHTML = `A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
    }
})

dismiss.addEventListener('click', returnSignIn)

