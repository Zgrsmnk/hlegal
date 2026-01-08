//css
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.scss';


//js



//nav open/close
(function () {
  const isOpen = document.querySelector(".menu__burger");
  const isClose = document.querySelector(".menu__cross");
  const navigation = document.querySelector(".menu");

  if (isOpen && navigation) {
    isOpen.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  if (isClose && navigation) {
    isClose.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (
      navigation &&
      !navigation.contains(event.target) &&
      isOpen &&
      !isOpen.contains(event.target)
    ) {
      navigation.classList.remove("active");
    }
  });
})();

//tabs js
(function () {
  // Отримуємо всі елементи вкладок
  const tabs = document.querySelectorAll(".tabs__link");

  // Отримуємо всі елементи контенту, які відповідають вкладкам
  const contents = document.querySelectorAll(".tabs__content-text");

  // Для кожної вкладки в масиві "tabs" створюємо обробник події
  tabs.forEach((tab, index) => {
    // Додаємо подію на клік по вкладці
    tab.addEventListener("click", () => {
      // Видаляємо клас "active" у всіх вкладок та всіх елементів контенту
      tabs.forEach((n) => n.classList.remove("active"));
      contents.forEach((m) => m.classList.remove("active"));

      // Додаємо клас "active" до вибраної вкладки (та яка була натиснута)
      tab.classList.add("active");

      // Додаємо клас "active" до відповідного контенту, що відповідає вкладці
      contents[index].classList.add("active");
    });
  });
})();

//swiper gallery
import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
