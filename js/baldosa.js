
let lisasData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('./json/lisas.json')
  .then(response => response.json())
  .then(data => {
    lisasData = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', lisasData);

    // Llamar a la función para renderizar las tarjetas
    renderizarMosaicos(lisasData);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

const contenedorColores = document.getElementById("contenedorColores");

// Función para renderizar las tarjetas en el contenedor
function renderizarMosaicos(data) {
  data.forEach((element, index) => {
    contenedorColores.innerHTML += `
    
    <a href="lisa.html?id=${element.id}"> 
   <img src="lisasBaldosas/${element.img}" alt="">
     </a>
    `;
  });
}






// Recuperar el id del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const contenedorImagenPrincipal = document.getElementById("contenedorImagenPrincipal")
const contenedorSegundaImagen = document.getElementById("contenedorSegundaImagen");
const textSKU = document.querySelectorAll("#textSKU")
const tamano = document.getElementById("tamano");
const unidadesMetro = document.getElementById("unidadesMetro");
const peso = document.getElementById("peso")

console.log(productId)



// Cargar los datos desde el archivo JSON
fetch('./json/mosaicosjson.json')
  .then(response => response.json())
  .then(data => {
    mosaicosData = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', mosaicosData);

    traerDataMosaico(mosaicosData)
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });


// Función para renderizar las tarjetas en el contenedor
function traerDataMosaico(data) {

 const mosaico =  data.find(e=> e.sku == productId);


 textSKU.forEach(element => { element.textContent = `${mosaico.sku}`;});

  contenedorImagenPrincipal.src = `mosaicos/${mosaico.img}`
  contenedorSegundaImagen.src = `mosaicos2/${mosaico.sku}.jpg`
  tamano.textContent = `${mosaico.tamaño}`
  unidadesMetro.textContent = `${mosaico.metro}`
  peso.textContent = `${mosaico.peso}`


}


let imagenesMosaico =[];

// Cargar los datos desde el archivo JSON
fetch('./json/imagenesMosaico.json')
  .then(response => response.json())
  .then(data => {
    imagenesMosaico = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', imagenesMosaico);

    traerImagenes(imagenesMosaico);

  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });


  const contenedorMasImagenes = document.getElementById("contenedorMasImagenes")


  function traerImagenes(data) {

    let filtroImagenes = data.filter(e => e.sku == productId);
    console.log(filtroImagenes);

    contenedorMasImagenes.innerHTML = ''; // Limpiar contenido anterior, si es necesario
    filtroImagenes.forEach(element => {
        contenedorMasImagenes.innerHTML += `
        <img src="imagenesMosaico/${element.img}">
        `;
    });




    const contenedorPrincipal = document.getElementById("contenedorPrincipal");
    const todasLasImagenes = contenedorPrincipal.querySelectorAll("img");
    console.log(todasLasImagenes)
    
    
    
    todasLasImagenes.forEach(element => {
        
       element.addEventListener("click",(e)=>{
    
       let srcCompleto = e.target.src;
     
    
       console.log(srcCompleto)
       imagenGrande.src = `${srcCompleto}`
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

// aplicar hacer click y aparezca imagenEngrande
