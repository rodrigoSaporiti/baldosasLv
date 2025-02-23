//destacados



const contenedorDestacados = document.querySelector(".destacadosMosaicos")








 // Función para reiniciar el carrusel
    function reiniciarCarrusel() {
    clearInterval(carruselIntervalo); // Detiene el intervalo actual
    correrCarrusel(); // Lo reinicia
  }


  const paginacionHome = document.querySelector(".paginacionHome");
  console.log(paginacionHome)


  const linksNav = document.querySelectorAll(".dropdown-menu a")

  console.log(linksNav)


  linksNav.forEach(element => {

    element.addEventListener("click",()=>{

      localStorage.setItem("paginacion", element.textContent);
      

    })
    
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Crear el observador de intersección
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando el elemento es visible, añadir la clase que activa la animación
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Dejar de observar el elemento después de que se haya visto
    }
  });
}, {
  threshold: 0.1 // El umbral de visibilidad (0.5 significa que el 50% del elemento debe ser visible)
});

// Seleccionar todos los elementos que se deben animar
document.querySelectorAll('.animar').forEach(element => {
  observer.observe(element); // Comenzar a observar el elemento
});
