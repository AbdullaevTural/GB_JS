// Получаем все элементы слайдера
const sliderImages = document.querySelectorAll(".slider-image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".dot");

// Устанавливаем начальный индекс
let currentIndex = 0;

// Функция для отображения текущего изображения и точки
function showImage(index) {
  // Скрываем все изображения
  sliderImages.forEach((image) => {
    image.style.display = "none";
  });

  // Убираем активный класс у всех точек
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Показываем текущее изображение и точку
  sliderImages[index].style.display = "block";
  dots[index].classList.add("active");
}

// Функция для переключения к предыдущему изображению
function goToPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }
  showImage(currentIndex);
}

// Функция для переключения к следующему изображению
function goToNextImage() {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Обработчики событий для кнопок
prevButton.addEventListener("click", goToPrevImage);
nextButton.addEventListener("click", goToNextImage);

// Переключение к изображению по клику на точку
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showImage(index);
    currentIndex = index;
  });
});

// Отображаем начальное изображение
showImage(currentIndex);
