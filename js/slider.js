const slides = document.querySelectorAll(".slider");
const divIndicadores = document.querySelector(".indicadores");

divIndicadores.addEventListener("click", (e) => {
  if (e.target.classList.contains("indicador")) {
    for (let item of divIndicadores.children) {
      item.classList.remove("indicador--active");
    }
    slides.forEach((slide) => {
      slide.classList.remove("slider--active");
    });
    const indicadorActivo = e.target;
    const slideActiva = slides[indicadorActivo.dataset.indicador - 1];
    indicadorActivo.classList.add("indicador--active");
    slideActiva.classList.add("slider--active");
  }
});
