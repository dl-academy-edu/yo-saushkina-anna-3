// 1. Используя рекурсию попросите пользователя ввести возраст, если он больше 18, то покажите сообщение об успехе, если меньше, то запустите функцию снова.

function showMessage() {
    let age = prompt("Введите ваш возраст");
    if (age > 18 ) {
        alert ("Хорошо!");
    } else if (isNaN(age) || age <= 18) {
        return showMessage();
    }
};
showMessage();


// 2. Напишите 4 чистые функции, add (сложение 2 чисел), subtract (вычитание из первого аргумента второго), divide (деление первого аргумента на второй) и multiply (умножение). В комментариях напишите, почему эти функции чистые.

// Чистые функции возвращают одинаковый результат при повторном вызове

function add(a, b) {
    if (isNaN(a, b)) {
        console.log('Введите число!');
        } else {
        return a + b;
    }
};
add('Какое-то слово', 2); // Введите число!
add(0, -5); // -5


function subtract(a, b) {
    if (isNaN(a, b)) {
        console.log('Введите число!');
        } else {
            return a - b;
        }
};
subtract('Какое-то слово', 2); // Введите число!
subtract(1, 2); // -5
subtract(1, 2); // -5


function divide(a, b) {
    if (a === 0 || isNaN(a) && b === 0 || isNaN(b)){
    console.log('Введите другое число');
    } else {
        return a / b;
    }
};
divide('Какое-то слово', 0); // Введите другое число
divide(-4, -2); //2


function multiply(a, b) {
    if (isNaN(a,b)) {
        console.log('Введите число!');
    } else {
        return a*b;
    }
};
multiply('Какое-то слово', 2); // Введите число!
multiply(2, 3); // 6


// 3. Напишите функцию addCreator, которая будет работать по коду на след слайде

function addCreator(a) {
    if (typeof a === Number) {
        return a+a;
    } else { 
        return function addCreator(b) {
            return a+b;
        } 
    }
};
const add = addCreator(5);

console.log(add(5)); // 10
console.log(addCreator(1)(3));  // 4


// 4. Создайте свой счетчик, который будет принимать шаг счетчика. То есть ваш counterCreater должен принимать аргумент step и изменять index на step.
// Step должен иметь значение по умолчанию 2.
// Изначально index равен 0.

function counterCreater(step = 2) {
    let index = 0; 
        return function() {
             return  index += step;
    }
};

let myCounter1 = counterCreater(-1);
console.log(myCounter1()); // -1
console.log(myCounter1()); // -2

let myCounter2 = counterCreater(4);
console.log(myCounter2()); // 4
console.log(myCounter2()); // 8

let myCounter3 = counterCreater();
console.log(myCounter3()); // 2
console.log(myCounter3()); // 4





