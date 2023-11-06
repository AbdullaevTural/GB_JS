function calculateDistance(location1, location2) {
  // разбиение коорд. на шир и долг
  const [lat1, lon1] = location1;
  const [lat2, lon2] = location2;
  const toRad = (value) => (value * Math.PI) / 180; // преобр в радианы
  const R = 6371; // радиус земли в км

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLon / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

const cities = [
  { name: "Нью-йорк", location: [40.7128, -74.006] },
  { name: "Лондон", location: [51.5074, -0.1278] },
];

function findFastestCity(cities) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        let closestCity = null;
        let shortestDistance = Infinity;
        cities.forEach((city) => {
          const distance = calculateDistance(userLocation, city.location);
          if (distance < shortestDistance) {
            closestCity = city.name;
            shortestDistance = distance;
          }
        });
        resolve(closestCity);
      }, error =>{
        if (error.code === error.PERMISSION_DENIED){
            reject(new Error ('Пользователь отказал в доступе'));
        }else{
            reject(new Error ('Ошибка при получении местоположения'));
        }
      });
    }else{
        reject(new Error ('Геолокация не поддерж. вашим браузером'));
    }
  });
 
}

findFastestCity(cities)
  .then((closestCity) => {
    console.log(closestCity);
  })
  .catch((error) => {
    console.log(error.message);
  });

