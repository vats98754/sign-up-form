const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')
const errMsg = document.getElementById('error-msg');
const regForm = document.getElementById('registration-form')
regForm.noValidate = true;

function validateForm(e) {
    const form = e.target;
    if (password.textContent === confirmPassword.textContent) {
        errMsg.style.display = 'none';
    } else {
        errMsg.style.display = 'initial';
        errMsg.style.color = 'rgb(255, 92, 92)';
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            }
            else {
                i.parentElement.classList.add('invalid');
            }
        });
    }
}

function checkPassword(e) {
    const form = e.target;
    if (password.value === confirmPassword.value) {
        errMsg.style.display = 'none';
    } else {
        errMsg.style.display = 'initial';
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            }
            else {
                i.parentElement.classList.add('invalid');
            }
        });
    }
}
password.addEventListener('focusout', checkPassword)
confirmPassword.addEventListener('focusout', checkPassword)
regForm.addEventListener('submit', validateForm);