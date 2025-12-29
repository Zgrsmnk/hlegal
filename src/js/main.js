import '../scss/style.scss'
switchThemeColor()

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