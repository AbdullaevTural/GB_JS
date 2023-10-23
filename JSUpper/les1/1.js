"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

let music = {
    albums: [{
            title: "Название альбома 1",
            artist: "Исполнитель GG",
            year: "Год 2022",
        },
        {
            title: "Название альбома 2",
            artist: "Исполнитель FF",
            year: "Год 2023",
        },
        {
            title: "Название альбома 3",
            artist: "Исполнитель DD",
            year: "Год 2022",
        },
    ],

    [Symbol.iterator]() {
        let index = 0;

        const next = () => {
            if (index < this.albums.length) {
                const album = this.albums[index];
                index++;
                return { value: album, done: false };
            } else {
                return { done: true };
            }
        };

        return { next };
    },
};
for (const album of music) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

for (const value of music.albums) {
    console.log(`${value.title} - ${value.artist} (${value.year})`);
}