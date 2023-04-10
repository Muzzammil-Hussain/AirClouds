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
  function checkRequired(inputArray){
    inputArray.forEach(function(input) {
        if (input.value === ''){
            showError(input,`${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
  }

  function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

  }

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username,email,mobile,password,password2]);
})