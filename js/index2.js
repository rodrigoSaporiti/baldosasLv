//destacados

const flechaIzquierdaDestacados = document.getElementById("flechaIzquierdaDestacados");
const flechaDerechaDestacados = document.getElementById("flechaDerechaDestacados");

const destacados1= document.getElementById("destacados1")
const destacados2= document.getElementById("destacados2")

const contenedorDestacados = document.querySelector(".destacadosMosaicos")



flechaDerechaDestacados.addEventListener("click",()=>{


    const anchoContenedor = contenedorDestacados.offsetWidth; 

contenedorDestacados.scrollBy({


    left:anchoContenedor,
    behavior:"smooth",
})


})


flechaIzquierdaDestacados.addEventListener("click",()=>{
  
    const anchoContenedor = contenedorDestacados.offsetWidth; 

contenedorDestacados.scrollBy({


    left: -anchoContenedor,
    behavior:"smooth",
})


})


let moverIzquierda = true;

const intervalo = setInterval(() => {
  const anchoContenedor = contenedorDestacados.offsetWidth;
  
  contenedorDestacados.scrollBy({
    left: moverIzquierda ? -anchoContenedor : anchoContenedor, // Si moverIzquierda es true, desplaza a la izquierda, sino a la derecha
    behavior: "smooth",
  });
  
  // Alternar la dirección de desplazamiento
  moverIzquierda = !moverIzquierda;
}, 4000);  // 2000 ms = 2 segundos


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