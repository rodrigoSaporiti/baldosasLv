
const cardImg = document.getElementById("cardImg");

const url = window.location.pathname;
const urlSplit = url.split(/[./]/);
console.log(urlSplit)

const seccion = urlSplit[urlSplit.length-2];

console.log(seccion)

const pagHome = document.getElementById("pagHome");

pagHome.textContent= seccion

let banos = []

// Cargar los datos desde el archivo JSON
fetch(`./json/${seccion}.json`)
  .then(response => response.json())
  .then(data => {
    console.log('Datos cargados:', data);
     banos = data
   mostrarImagenes(data);

   flechaDer(data);
   flechaIzq(data);
  

  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });



  function mostrarImagenes(data){

    data.forEach(element => {

        cardImg.innerHTML+= `
        
        
        <div  class="cardImg">
            
           

            <img src="${seccion}/${element.nombre}" alt="">
            
        </div>

        
        `

        
// aplicar hacer click y aparezca imagenEngrande

const todasLasImagenes = document.querySelectorAll(".cardImg");
console.log(todasLasImagenes)



todasLasImagenes.forEach(element => {
    
   element.addEventListener("click",(e)=>{

   let srcCompleto = e.target.src;
   let srcPartes = srcCompleto.split("/");
   let src = srcPartes[srcPartes.length - 1];

   console.log(src)
   imagenGrande.src = `${seccion}/${src}`
   imagenEnGrande.classList.toggle("d-none")
   
   })


});





        
    });
  }



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


const imagenGrande = document.getElementById("imagenGrande");
const imagenEnGrande = document.getElementById("imagenEnGrande");


// cierre del close 

const closeImagenGrande = document.getElementById("closeImagenGrande");

closeImagenGrande.addEventListener("click",()=>{

    imagenEnGrande.classList.toggle("d-none")


})

const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");


function flechaDer(data){


  flechaDerecha.addEventListener("click",()=>{

    let srcCompleto = imagenGrande.src;
    let srcPartes = srcCompleto.split("/");
    let src = srcPartes[srcPartes.length - 1];
 
    console.log(src)
    const posicion = data.findIndex(e=> e.nombre === src)
    console.log(posicion)

    if(posicion< data.length-1){
      let siguienteImagen = data[posicion+1].nombre;
      let splitSiguiente = siguienteImagen.split("/");
      let srcSiguiente = splitSiguiente[splitSiguiente.length-1];
      console.log(srcSiguiente)
      imagenGrande.src= `${seccion}/${srcSiguiente}`;
      console.log(data[posicion+1])
    }else{

      let siguienteImagen = data[0].nombre;
      let splitSiguiente = siguienteImagen.split("/");
      let srcSiguiente = splitSiguiente[splitSiguiente.length-1];
      console.log(srcSiguiente)
      imagenGrande.src= `${seccion}/${srcSiguiente}`;
      console.log(data[posicion+1])
    
    }


  })


}


function flechaIzq(data){


  flechaIzquierda.addEventListener("click",()=>{

    let srcCompleto = imagenGrande.src;
    let srcPartes = srcCompleto.split("/");
    let src = srcPartes[srcPartes.length - 1];
 
    console.log(src)
    const posicion = data.findIndex(e=> e.nombre === src)
    console.log(posicion)

    if(posicion > 0){

      let siguienteImagen = data[posicion-1].nombre;
      let splitSiguiente = siguienteImagen.split("/");
      let srcSiguiente = splitSiguiente[splitSiguiente.length-1];
      console.log(srcSiguiente)
      imagenGrande.src= `${seccion}/${srcSiguiente}`;
      console.log(data[posicion+1])
    }else{

     
      let siguienteImagen = data[data.length-1].nombre;
      let splitSiguiente = siguienteImagen.split("/");
      let srcSiguiente = splitSiguiente[splitSiguiente.length-1];
      console.log(srcSiguiente)
      imagenGrande.src= `${seccion}/${srcSiguiente}`;
      console.log(data[posicion+1])
    
    }


  })

}



  
const inputs = document.querySelectorAll('input[name="galerias"]');


inputs.forEach(element => {
  
  if(element.id ===seccion){

    element.checked = true;
  }

 

  element.addEventListener("click",()=>{
    let inputSeccion = element.value
    window.location.href = `${inputSeccion}.html`
  })

  element.addEventListener("contextmenu",(e)=>{

    alert("clickDErecho")

  })


});