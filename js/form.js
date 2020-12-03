const btnsub = document.querySelector("#enviar");
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");

const popTitle = document.querySelector("#popup h4");
const popParrafo = document.querySelector("#popup p");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnsub.addEventListener("click", function (e) {
  e.preventDefault();
  if (nombre.value === "" || telefono.value === "" || correo === "") {
    popTitle.textContent = "Por favor asegurate de llenar el formulario";
    popParrafo.textContent =
      "Los campos Nombre, Telefono y Correo son necesario";
    popParrafo.style.color = "red";
    overlay.classList.add("active");
    popup.classList.add("active");
  } else {
    popTitle.textContent = "Gracias por confiar en nosotros";
    popParrafo.textContent = "Nos comunicaremos contigo a la brevedad";
    overlay.classList.add("active");
    popup.classList.add("active");
  }
});

btnCerrarPopup.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
