const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required')
    } else{
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email address is required')
    } else if (!isValidEmail(email.value)) {
        showError(email,'Email is invalid')
    } else{
        showSuccess(email);
    }
    if (mobile.value === '') {
        showError(mobile, 'mobile number is required')
    } else{
        showSuccess(mobile);
    }
    if (password.value === '') {
        showError(password, 'Password is required')
    } else{
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else{
        showSuccess(password2);
    }

})