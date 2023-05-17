
// 1. Создать программу, которая запрашивает у пользователя число, в консоль выводит числа от 1 до этого числа, но пропускает числа, которые кратны (делятся без остатка) 4-м.

  let userNum = +prompt('Введите число для вывода в консоль');
  if (isNaN(userNum))
  { alert("Ошибка!"); 
  }
  for (let i = 0; i <= userNum; i++) {
    if (i % 4 == 0) continue;
    console.log(i);
  }; 


  //2. Написать программу, которая будет получать число и с помощью цикла while считать его факториал.

let factorial = +prompt('Введите число для рассчета факториала');
let factorialResult = 1;
let i = 0;
  while ( i < factorial ) {
    factorialResult *= i + 1;
    i++ 
  }
  if (isNaN(factorial))
  {
    alert("Ошибка!");
  } else {
    console.log(factorialResult);
  };


  //3. Написать программу, которая будет получать число и его степень, с помощью цикла for возвести число в степень.

  let number = +prompt('Введите число для расчета степени');
  let degree = +prompt('Введите степень');
  let degreeResult = 1;
    for( i = 0; i < degree; i++ ) {
      degreeResult *= number;
    }
      if (isNaN(number, degree))
      {
        alert("Ошибка!");
      } else {
        alert (degreeResult);
      };
 

  //4. Написать проверку, для программ 1-3, чтобы если пользователь вводил неверные данные, например слово вместо числа, то должно вывестись сообщение об ошибке.
 
  // if (isNaN())
  //     {
  //       alert("Ошибка!");
  //     };
  //  Проверка добавлена в программы 1-3


  //5. Написать игру “Угадай число”

  for ( let secretNumber = Math.floor(1 + Math.random() * 10) ;; alert ("Пробуй еще раз")) {
    let userNumber = +prompt('Угадай число!'); 
    if ( secretNumber !== userNumber ) continue; 
      alert ("Ты угадал!");
    };