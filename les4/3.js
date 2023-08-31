"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function case3() {
  const arr = [];
  let sumElemArr = 0;
  const newArr = [];

  for (let i = 0; i < 5; i++) {
    const randomNum = getRandomInt(0, 9);
    arr.push(randomNum);
    sumElemArr += randomNum;
    if (randomNum === 3) {
      newArr.push(i);
    }
  }

  let minElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minElem > arr[i]) {
      minElem = arr[i];
    }
  }

  console.log(`Массив: ${arr}`);
  console.log(`Сумма элементов массива: ${sumElemArr}`);
  console.log(`Минимальное значение в массиве: ${minElem}`);
  console.log(`Новый массив: ${newArr}`);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
case3();
