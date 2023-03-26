
// Создать программу, которая запрашивает у пользователя число, в консоль выводит числа от 1 до этого числа, но пропускает числа, которые кратны (делятся без остатка) 4-м.

//1. let userNum = +prompt('Введите число для вывода в консоль');

  for (let i = 0; i <= userNum; i++) {
    if (i % 4 == 0) continue;
    console.log(i);
    alert (i);
  } 


  //2. Написать программу, которая будет получать число и с помощью цикла while считать его факториал.

let factorial = +prompt('Введите число для рассчета факториала');
let factorialResult = 1;
let i = 0;
  while ( i < factorial ) {
    factorialResult *= i + 1;
    i++ 
  }
  console.log(factorialResult);
  alert (factorialResult);


  //3. Написать программу, которая будет получать число и его степень, с помощью цикла for возвести число в степень.

  let number = +prompt('Введите число для расчета степени');
  let degree = +prompt('Введите степень');
  let degreeResult = 1;
  for( i = 0; i < degree; i++ ) {
    degreeResult *= number;
  }
    alert (degreeResult);
 

  //4. Написать проверку, для программ 1-3, чтобы если пользователь вводил неверные данные, например слово вместо числа, то должно вывестись сообщение об ошибке.

//   let userData = +prompt(); 
//  if (typeof userData === String)
//   {
//     alert("Ошибка!");
//   }


  //5. Написать игру “Угадай число”

  for ( let secretNumber = Math.floor(1 + Math.random() * 10) ;; alert ("Пробуй еще раз")) {
    let userNumber = +prompt('Угадай число!'); 
    if ( secretNumber !== userNumber ) continue; 
      alert ("Ты угадал!");
  }


 
