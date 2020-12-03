const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".galeria img");
const original = document.querySelector(".full-image");
const imgTxt = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", function () {
    modal.classList.add("open");
    original.classList.add("open");
    original.src = `../img/${preview.dataset.img}`;
    imgTxt.textContent = preview.alt;
  });
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
