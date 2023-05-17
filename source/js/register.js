const register = document.querySelector('.register');
const registerBtn = document.querySelector('.js__register');
const closeRegister = document.querySelector('.register__close');

const registerInput = document.querySelector('.form__input');
const registerOverlay = document.querySelector('.register__overlay');

const registerOn = document.querySelector('.js__register');
const registerOff = document.querySelector('.js__register');


registerBtn.addEventListener('click', function() {
    register.classList.add('register__open');
    input.focus();
});

closeRegister.addEventListener('click', () => {
    register.classList.remove('register__open'); 
});

registerOverlay.addEventListener('click', () => {
    register.classList.remove('register__open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && register.classList.contains('register__open')) {
        register.classList.remove('register__open');
        registerBtn.focus();
    }
});
