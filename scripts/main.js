// Selecciona todas las imágenes dentro del contenedor con la clase slides
const slides = document.querySelectorAll(".slides img");

// Índice para conocer la imagen actual
let slideIndex = 0;

// contador de tiempo que cambia las imagenes
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0) {
        // Muestra la primera diapositiva al cargar la página
        slides[slideIndex].classList.add("displaySlide");

        // Inicia un temporizador para cambiar de diapositiva cada 5 segundos
        intervalId = setInterval(nextSlide, 5000);
    }
}

// Función para mostrar una diapositiva específica según su índice
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    else if (index < 0) {
        slideIndex = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });


    slides[slideIndex].classList.add("displaySlide");
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {

    clearInterval(intervalId);


    slideIndex--;
    showSlide(slideIndex);
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {

    slideIndex++;
    showSlide(slideIndex);
}


// Barra de navegación

// Seleccionamos el botón y la lista de navegación
const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');

// Al hacer clic en el botón, alternamos la clase "active" en el menú
navToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});


// Formulario
// Activar evento del boton "Enviar Información"
var handleForm = (event) => {
    event.preventDefault();

    const form = event.target
    const userField = form[0].value
    const emailField = form[1].value
    const asuntField = form[2].value
    const messageField = form[3].value

    localStorage.setItem("nombre", userField)
    localStorage.setItem("correo", emailField)
    localStorage.setItem("asunto", asuntField)
    localStorage.setItem("mensaje", messageField)
    // localStorage.clear()
}

var form = document.getElementById("formulario");

form.addEventListener("submit", handleForm)
