//destacados

const flechaIzquierdaDestacados = document.getElementById("flechaIzquierdaDestacados");
const flechaDerechaDestacados = document.getElementById("flechaDerechaDestacados");

const destacados1= document.getElementById("destacados1")
const destacados2= document.getElementById("destacados2")

function siTocoCualquierFlecha(flecha){

    flecha.addEventListener("click",()=>{


        destacados1.classList.toggle("d-none")
        destacados2.classList.toggle("d-none");
        reiniciarCarrusel();

    })

}



siTocoCualquierFlecha(flechaDerechaDestacados);
siTocoCualquierFlecha(flechaIzquierdaDestacados);


function correrCarrusel() {
    carruselIntervalo = setInterval(() => {
        destacados1.classList.toggle("d-none")
        destacados2.classList.toggle("d-none");
    }, 5000); // Cambia cada 4 segundos
  }

 // Función para reiniciar el carrusel
    function reiniciarCarrusel() {
    clearInterval(carruselIntervalo); // Detiene el intervalo actual
    correrCarrusel(); // Lo reinicia
  }

  correrCarrusel();