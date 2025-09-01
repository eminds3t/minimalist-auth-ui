"use strict";

// Definir los testimonios con imagen de fondo
const testimonials = [
  {
    bg: "/assets/images/close-pose.jpg",
    quote: "Este es el primer testimonial, súper inspirador y convincente.",
    author: "Juan Pérez",
    stars: 5
  },
  {
    bg: "/assets/images/distracted-pose.jpg",
    quote: "El segundo testimonial con otro texto dummy para la demo.",
    author: "Ana Gómez",
    stars: 3
  },
  {
    bg: "/assets/images/front-pose.jpg",
    quote: "Un tercer testimonial diferente para mostrar el cambio automático.",
    author: "Carlos López",
    stars: 4
  }
];

// Seleccionar la sección del testimonial
const testimonialArea = document.querySelector(".testimonial__area");

let currentIndex = 0;

function updateTestimonial(index) {
  const t = testimonials[index];
  
  // Cambiar solo el background
  testimonialArea.style.backgroundImage = `url(${t.bg})`;

  // Opcional: si quieres suavizar la transición
  testimonialArea.style.transition = "background-image 0.8s ease-in-out";
}

function startRotation() {
  updateTestimonial(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }, 6000);
}

startRotation();