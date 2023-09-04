"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/
function case5() {
  const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  const obj = {};

  en.forEach((element, i) => {
    obj[element] = ru[i];
  });

  console.log(obj);
}
case5();