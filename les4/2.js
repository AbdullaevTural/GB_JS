"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/
function case2() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const firstNumbers = arr.slice(0, 2);
    firstNumbers.push(100);
    const lastNumbers = arr.slice(5);
    const arrayLast = firstNumbers.concat(lastNumbers);
    console.log(arrayLast);
    // Решено двумя вариантами
    arr.splice(2, 3, 100);
    console.log(arr);
}
case2();