"use strict";

/* ==========================
   Datos de los testimonios
========================== */
const testimonials = [
  { bg: "/assets/images/close-pose.jpg", quote: "Este es el primer testimonial, súper inspirador y convincente.", author: "Juan Pérez", stars: 5 },
  { bg: "/assets/images/distracted-pose.jpg", quote: "El segundo testimonial con otro texto dummy para la demo.", author: "Ana Gómez", stars: 3 },
  { bg: "/assets/images/front-pose.jpg", quote: "Un tercer testimonial diferente para mostrar el cambio automático.", author: "Carlos López", stars: 4 }
];

/* ==========================
   Selecciones del DOM
========================== */
const bgImg = document.querySelector(".testimonial__bg");
const form = document.querySelector(".signin__form");
const toast = document.getElementById("toast");

let currentIndex = 0;

/* ==========================
   Funciones
========================== */

// Actualiza la imagen del testimonial con fade y preload
function updateTestimonial(index) {
  const { bg } = testimonials[index];

  const tempImg = new Image();
  tempImg.src = bg;

  tempImg.onload = () => {
    bgImg.style.opacity = 0; // fade out
    setTimeout(() => {
      bgImg.src = bg;
      bgImg.style.opacity = 1; // fade in
    }, 200);
  };
}

// Rotación automática
function startRotation(interval = 6000) {
  updateTestimonial(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }, interval);
}

// Mostrar toast minimalista
function showToast(message = "Enviado con éxito ✅", duration = 2000) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), duration);
}

/* ==========================
   Event Listeners
========================== */

// Animación al cargar la página
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Envío de formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Aquí podrías enviar los datos via fetch/ajax

  showToast(); // Toast por defecto
  form.reset();
});

/* ==========================
   Inicialización
========================== */
startRotation();