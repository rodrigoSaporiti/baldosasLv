


// Cambio de imagenes en portada y circulos

const imgPortada = document.getElementById("imagenPortada");

const primerCirculo = document.getElementById("primerCirculo")
const segundoCirculo = document.getElementById("segundoCirculo")
const tercerCirculo = document.getElementById("tercerCirculo")


function colorActivo(circulo){
    circulo.style.backgroundColor = "white";
    circulo.style.color = "white"
}

function colorDesactivado(circulo){
    circulo.style.backgroundColor = "#bfbbbb";
    circulo.style.color = "#bfbbbb"
}



colorActivo(primerCirculo);
        colorDesactivado(segundoCirculo);
        colorDesactivado(tercerCirculo);

        let carruselIntervalo; // Variable global para guardar el ID del intervalo

        // Función para iniciar el carrusel
        function correrCarrusel() {
          carruselIntervalo = setInterval(() => {
            const currentImage = imgPortada.src.split("/").pop(); // Extrae el nombre del archivo
        
            if (currentImage === "portada.jpg") {
              colorActivo(segundoCirculo);
              colorDesactivado(primerCirculo);
              colorDesactivado(tercerCirculo);
        
              imgPortada.src = "img/portada2.jpg";
            } else if (currentImage === "portada2.jpg") {
              colorActivo(tercerCirculo);
              colorDesactivado(primerCirculo);
              colorDesactivado(segundoCirculo);
        
              imgPortada.src = "img/portada3.jpg";
            } else if (currentImage === "portada3.jpg") {
              colorActivo(primerCirculo);
              colorDesactivado(segundoCirculo);
              colorDesactivado(tercerCirculo);
        
              imgPortada.src = "img/portada.jpg";
            }
          }, 4000); // Cambia cada 4 segundos
        }
        
        // Inicia el carrusel por primera vez
        correrCarrusel();
        
        // Función para reiniciar el carrusel
        function reiniciarCarrusel() {
          clearInterval(carruselIntervalo); // Detiene el intervalo actual
          correrCarrusel(); // Lo reinicia
        }
        
        // Event listeners para los clics en los círculos
        primerCirculo.addEventListener("click", () => {
          imgPortada.src = "img/portada.jpg";
        
          colorActivo(primerCirculo);
          colorDesactivado(segundoCirculo);
          colorDesactivado(tercerCirculo);
        
          reiniciarCarrusel(); // Reinicia el carrusel
        });
        
        segundoCirculo.addEventListener("click", () => {
          imgPortada.src = "img/portada2.jpg";
        
          colorActivo(segundoCirculo);
          colorDesactivado(primerCirculo);
          colorDesactivado(tercerCirculo);
        
          reiniciarCarrusel(); // Reinicia el carrusel
        });
        
        tercerCirculo.addEventListener("click", () => {
          imgPortada.src = "img/portada3.jpg";
        
          colorActivo(tercerCirculo);
          colorDesactivado(primerCirculo);
          colorDesactivado(segundoCirculo);
        
          reiniciarCarrusel(); // Reinicia el carrusel
        });
        

        //flechas portada

        const flechaPortadaIzquierda = document.querySelector(".flechaPortadaIzquierda")
        const flechaPortadaDerecha = document.querySelector(".flechaPortadaDerecha")

        flechaPortadaIzquierda.addEventListener("click",()=>{
            
            const currentImage = imgPortada.src.split("/").pop(); // Extrae el nombre del archivo
        
            if (currentImage === "portada.jpg") {
             

              colorActivo(tercerCirculo);
              colorDesactivado(primerCirculo);
              colorDesactivado(segundoCirculo);
        
              imgPortada.src = "img/portada3.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            } else if (currentImage === "portada2.jpg") {

                colorActivo(primerCirculo);
                colorDesactivado(segundoCirculo);
                colorDesactivado(tercerCirculo);
  
        
              imgPortada.src = "img/portada.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            } else if (currentImage === "portada3.jpg") {
      
              colorActivo(segundoCirculo);
                colorDesactivado(primerCirculo);
                colorDesactivado(tercerCirculo);
        
              imgPortada.src = "img/portada2.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            }
        })

        flechaPortadaDerecha.addEventListener("click", ()=>{

            const currentImage = imgPortada.src.split("/").pop(); // Extrae el nombre del archivo
        
            if (currentImage === "portada.jpg") {
              colorActivo(segundoCirculo);
              colorDesactivado(primerCirculo);
              colorDesactivado(tercerCirculo);
        
              imgPortada.src = "img/portada2.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            } else if (currentImage === "portada2.jpg") {
              colorActivo(tercerCirculo);
              colorDesactivado(primerCirculo);
              colorDesactivado(segundoCirculo);
        
              imgPortada.src = "img/portada3.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            } else if (currentImage === "portada3.jpg") {
              colorActivo(primerCirculo);
              colorDesactivado(segundoCirculo);
              colorDesactivado(tercerCirculo);
        
              imgPortada.src = "img/portada.jpg";
              reiniciarCarrusel(); // Reinicia el carrusel
            }

        })