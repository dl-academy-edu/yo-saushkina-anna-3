// окно sign In
(function() {

    const form = document.querySelector('form');
    if ( !form ) return; //завершаем функцию, если не нашлась форма
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //ломается стандартный ивент потому что какой-то баг
        const errorMessages = document.querySelectorAll('.invalid-feedback');
        for ( let error of errorMessages ) {
            error.remove();
        }
        const userEmail = form.elements.email;
        const userPassword = form.elements.password;

        // проверка на наличие чего-то. 
        let errors = {}; // объект под ошибки
        
    
        if ( !isEmailCorrect(userEmail.value) ) errors.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")';
        // if( !isEmpty(userEmail.value) ) = 'This field is required';
        if ( userPassword.value.length < 6) errors.password = 'Please enter a valid password (your entry is not less then 6 symbols)';
         


        //проверка какого либо свойства в объекте errors
         if (Object.keys(errors).length) {
            Object.keys(errors).forEach(key => { //поиск по ключам
              const messageError = errors[key];
              const input = form.elements[key]; // код отрисовки и добавления в верстку
              setError(input, messageError);
              input.classList.add('valid');
            })
            return;
         }

    }) //вешаем слушатель на событие сабмит. кнопка? 
})();
function isEmailCorrect(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}


function setError(input, messageError) {
 
        setErrorText(input, messageError);
    }

function  setErrorText(input, messageError) {
    const error = errorCreator(messageError);
    input.classList.add('is-invalid');
    input.insertAdjacentElement('afterend', error);

}

function errorCreator(errorMessage) {
    let messageErrorContainer = document.createElement('div');
    messageErrorContainer.classList.add('invalid-feedback');
    messageErrorContainer.innerText = errorMessage;
    return messageErrorContainer;
}//вешаем слушатель на событие сабмит. кнопка? 
