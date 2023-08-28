"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const number2 = prompt("Введите число");
const percentString = "13%";
const percent = percentString.replace("%", "") / 100;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function nds(n) {
    if (isNumeric(number2) == false) {
        console.log("Значение задано неверно");
    } else {
        const nalog = n - n * percent;
        console.log(`Размер заработной платы за вычетом налогов равен ${nalog}. `);
    }
}
console.log(nds(number2));