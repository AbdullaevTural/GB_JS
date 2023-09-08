/* Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки*/
function case11() {
  const arr = [1, 5, 7, 9];
  const min = () => Math.min(...arr);
  console.log(min(arr)); // выводит 1
}
case11();

function case1() {
  arr = [1, 5, 7, 9];
  console.log(Math.min(...arr)); // выводит 1
}
case1();

/*Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

function createCounter() {
  return (counter = {
    value: 0,
    increment() {
      return ++this.value;
    },
    decrement() {
      return --this.value;
    },
  });
}
createCounter();
console.log(counter.decrement(5));
console.log(counter.increment(5));

/* Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала) */

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

/* Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала) */

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
