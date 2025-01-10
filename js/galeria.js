// lupa

const contenedor = document.querySelector('.contenedorImagen');
const imagen = contenedor.querySelector('.zoomed-image');

contenedor.addEventListener('mousemove', (e) => {
    const rect = contenedor.getBoundingClientRect();
    const x = e.clientX - rect.left; // Coordenada X dentro del contenedor
    const y = e.clientY - rect.top;  // Coordenada Y dentro del contenedor

    // Ajustar el punto de origen de la transformación
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    imagen.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    imagen.style.transform = 'scale(2)'; // Nivel de zoom
});

contenedor.addEventListener('mouseleave', () => {
    imagen.style.transformOrigin = 'center';
    imagen.style.transform = 'scale(1)'; // Restaurar tamaño original
});

// aplicar hacer click y aparezca imagenEngrande

const todasLasImagenes = document.querySelectorAll(".cardImg");
console.log(todasLasImagenes)



todasLasImagenes.forEach(element => {
    
   element.addEventListener("click",(e)=>{

   let srcCompleto = e.target.src;
   let srcPartes = srcCompleto.split("/");
   let src = srcPartes[srcPartes.length - 1];

   console.log(src)
   imagenGrande.src = `img/GALERIA/baños/${src}`
   imagenEnGrande.classList.toggle("d-none")
   
   })


});


const imagenGrande = document.getElementById("imagenGrande");
const imagenEnGrande = document.getElementById("imagenEnGrande");


// cierre del close 

const closeImagenGrande = document.getElementById("closeImagenGrande");

closeImagenGrande.addEventListener("click",()=>{

    imagenEnGrande.classList.toggle("d-none")


})


