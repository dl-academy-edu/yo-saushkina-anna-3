const signIn = document.querySelector('.form');
const signInBtn = document.querySelector('.js__sign');
const closeSignIn = document.querySelector('.form__close');

const input = document.querySelector('.form__input');
const overlay = document.querySelector('.form__overlay');

const signInOff = document.querySelector('.js__sign');
const signInOn = document.querySelector('.form');



signInBtn.addEventListener('click', function() {
    signIn.classList.add('form__open');
    input.focus();
});

closeSignIn.addEventListener('click', () => {
    signIn.classList.remove('form__open'); 
});

overlay.addEventListener('click', () => {
    signIn.classList.remove('form__open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && signIn.classList.contains('form__open')) {
        signIn.classList.remove('form__open');
        signInBtn.focus();
    }
});



